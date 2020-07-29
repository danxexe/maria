(ns maria.frames.frame-communication
  (:require [maria.persistence.transit :as t]))

(enable-console-print!)

;; NOTE: you can `console.log`, but not `print`, cross-origin windows.



(def trusted-frame "trusted")

(def is-parent?
  (= js/window (.-parent js/window)))
(def is-child?
  (not is-parent?))

(def queue (atom {}))
(defn queue-add [the-queue id item] (swap! queue update-in [the-queue id] (fnil conj []) item))
(defn queue-process [the-queue id f]
  (doseq [item (get-in @queue [the-queue id])]
    (f item))
  (swap! queue update the-queue dissoc id))

(let [this-hostname (.. js/window -location -hostname)
      this-port (.. js/window -location -port)
      other-hostname-lookup {"localhost"            "localhost"
                             "maria.dev"            "maria-live.dev"
                             "maria-live.dev"       "maria.dev"
                             "www.maria.cloud"      "user.maria.cloud"
                             "user.maria.cloud"     "www.maria.cloud"
                             "dev.maria.cloud"      "dev-user.maria.cloud"
                             "dev-user.maria.cloud" "dev.maria.cloud"
                             "maria.danxexe.dev"    "maria.danxexe.dev"}
      other-port-lookup {"8701" "8702"
                         "8702" "8701"}
      parent-hostname (cond->> this-hostname
                               is-child? (get other-hostname-lookup))
      child-hostname (cond->> this-hostname
                              is-parent? (get other-hostname-lookup))
      parent-port (cond->> this-port
                           is-child? (get other-port-lookup))
      child-port (cond->> this-port
                          is-parent? (get other-port-lookup))
      protocol-prefix (str (.. js/window -location -protocol) "//")
      parent-origin (str protocol-prefix
                         parent-hostname
                         (some->> parent-port (str ":")))
      child-origin (str protocol-prefix
                        child-hostname
                        (some->> child-port (str ":")))
      other-origin (if is-parent? child-origin parent-origin)
      current-frame-id (if is-parent?
                         "trusted"
                         (some->> (.. js/window -location -hash)
                                  (re-find #"#frame_(.*)")
                                  (second)))
      frame-index (atom (cond-> {}
                                is-child?
                                (assoc "trusted" (.. js/window -parent))))]

  (def child-origin child-origin)

  (defn send
    "Send a message to the another frame. If the frame is not yet register, queue the message."
    [frame-id message]
    {:pre [frame-id]}
    (if-let [the-window (get @frame-index (name frame-id))]
      (.postMessage the-window
                    (t/serialize [current-frame-id message])
                    other-origin)
      (queue-add :send (name frame-id) message)))

  (def listeners (atom {}))

  (defn listen
    "Listen for messages from another frame, given its id."
    [id f]
    (swap! listeners update (name id) (fnil conj #{}) f))

  (defn unlisten
    [id f]
    (swap! listeners update (name id) disj f))

  (.addEventListener js/window "message"
                     (fn [e]
                       (when-let [[id data] (t/deserialize (.-data e))]
                         (if (= data :frame/ready)
                           (do
                             (swap! frame-index assoc id (.-source e))
                             (queue-process :send id #(send id %)))
                           (when (= (.-origin e) other-origin)
                             (doseq [f (concat (get @listeners id) (get @listeners "*"))]
                               (f id data))))))))