(ns maria.user
  (:require chia.view.hiccup
            [maria.friendly.kinds :refer [what-is]]
            goog.net.jsloader
            goog.crypt                                      ;; solely for `stringToUtf8ByteArray` in Shannon's Entropy lesson -- feel free to remove once we switch to a simple story for grabbing a single external dependency
            maria.user.loaders
            maria.repl-specials
            [chia.cell :refer [cell with-view]]
            [chia.cell.lib :as cell
             :refer [interval timeout fetch geo-location]]
            [shapes.core :as shapes :refer [listen
                                            circle ellipse square rectangle triangle polygon polyline text image
                                            position opacity rotate scale
                                            colorize stroke stroke-width no-stroke fill no-fill
                                            color-names colors-named rgb hsl rescale
                                            layer beside above value-to-cell!
                                            #_gfish
                                            ;; are these internal only? -jar
                                            ;;assure-shape-seq shape-bounds bounds shape->vector
                                            ]]
            [chia.view :include-macros true]
            [cljs.spec.alpha :include-macros true]
            [cljs.spec.test.alpha :include-macros true])
  (:require-macros [chia.cell :refer [defcell cell]]))
