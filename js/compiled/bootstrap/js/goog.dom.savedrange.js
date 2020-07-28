goog.provide("goog.dom.SavedRange");
goog.require("goog.Disposable");
goog.require("goog.log");
goog.forwardDeclare("goog.dom.AbstractRange");
/**
 @constructor
 @extends {goog.Disposable}
 */
goog.dom.SavedRange = function() {
  goog.Disposable.call(this);
};
goog.inherits(goog.dom.SavedRange, goog.Disposable);
/** @private @type {goog.log.Logger} */ goog.dom.SavedRange.logger_ = goog.log.getLogger("goog.dom.SavedRange");
/**
 @param {boolean=} opt_stayAlive
 @return {goog.dom.AbstractRange}
 */
goog.dom.SavedRange.prototype.restore = function(opt_stayAlive) {
  if (this.isDisposed()) {
    goog.log.error(goog.dom.SavedRange.logger_, "Disposed SavedRange objects cannot be restored.");
  }
  var range = this.restoreInternal();
  if (!opt_stayAlive) {
    this.dispose();
  }
  return range;
};
/**
 @return {goog.dom.AbstractRange}
 */
goog.dom.SavedRange.prototype.restoreInternal = goog.abstractMethod;

//# sourceMappingURL=goog.dom.savedrange.js.map
