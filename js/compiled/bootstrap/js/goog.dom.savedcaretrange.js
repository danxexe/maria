goog.provide("goog.dom.SavedCaretRange");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.SavedRange");
goog.require("goog.dom.TagName");
goog.require("goog.string");
goog.forwardDeclare("goog.dom.AbstractRange");
goog.forwardDeclare("goog.dom.Range");
/**
 @constructor
 @extends {goog.dom.SavedRange}
 @param {goog.dom.AbstractRange} range
 */
goog.dom.SavedCaretRange = function(range) {
  goog.dom.SavedRange.call(this);
  /** @private @type {string} */ this.startCaretId_ = goog.string.createUniqueString();
  /** @private @type {string} */ this.endCaretId_ = goog.string.createUniqueString();
  /** @private @type {boolean} */ this.reversed_ = range.isReversed();
  /** @private @type {goog.dom.DomHelper} */ this.dom_ = goog.dom.getDomHelper(range.getDocument());
  range.surroundWithNodes(this.createCaret_(true), this.createCaret_(false));
};
goog.inherits(goog.dom.SavedCaretRange, goog.dom.SavedRange);
/**
 @return {?goog.dom.AbstractRange}
 @suppress {missingRequire,undefinedNames}
 */
goog.dom.SavedCaretRange.prototype.toAbstractRange = function() {
  var range = null;
  var startCaret = this.getCaret(true);
  var endCaret = this.getCaret(false);
  if (startCaret && endCaret) {
    range = goog.dom.Range.createFromNodes(startCaret, 0, endCaret, 0);
  }
  return range;
};
/**
 @param {boolean} start
 @return {Element}
 */
goog.dom.SavedCaretRange.prototype.getCaret = function(start) {
  return this.dom_.getElement(start ? this.startCaretId_ : this.endCaretId_);
};
/**
 @param {goog.dom.AbstractRange=} opt_range
 @return {(goog.dom.AbstractRange|undefined)}
 */
goog.dom.SavedCaretRange.prototype.removeCarets = function(opt_range) {
  goog.dom.removeNode(this.getCaret(true));
  goog.dom.removeNode(this.getCaret(false));
  return opt_range;
};
/**
 @param {!Document} doc
 */
goog.dom.SavedCaretRange.prototype.setRestorationDocument = function(doc) {
  this.dom_.setDocument(doc);
};
/**
 @protected
 @return {?goog.dom.AbstractRange}
 @override
 */
goog.dom.SavedCaretRange.prototype.restoreInternal = function() {
  var range = null;
  var anchorCaret = this.getCaret(!this.reversed_);
  var focusCaret = this.getCaret(this.reversed_);
  if (anchorCaret && focusCaret) {
    var anchorNode = anchorCaret.parentNode;
    var anchorOffset = goog.array.indexOf(anchorNode.childNodes, anchorCaret);
    var focusNode = focusCaret.parentNode;
    var focusOffset = goog.array.indexOf(focusNode.childNodes, focusCaret);
    if (focusNode == anchorNode) {
      if (this.reversed_) {
        anchorOffset--;
      } else {
        focusOffset--;
      }
    }
    /**
     @suppress {missingRequire,undefinedNames}
     */
    range = goog.dom.Range.createFromNodes(anchorNode, anchorOffset, focusNode, focusOffset);
    range = this.removeCarets(range);
    range.select();
  } else {
    this.removeCarets();
  }
  return range;
};
/** @protected @override */ goog.dom.SavedCaretRange.prototype.disposeInternal = function() {
  this.removeCarets();
  this.dom_ = null;
};
/**
 @private
 @param {boolean} start
 @return {!Element}
 */
goog.dom.SavedCaretRange.prototype.createCaret_ = function(start) {
  return this.dom_.createDom(goog.dom.TagName.SPAN, {"id":start ? this.startCaretId_ : this.endCaretId_});
};
/** @type {RegExp} */ goog.dom.SavedCaretRange.CARET_REGEX = /<span\s+id="?goog_\d+"?><\/span>/ig;
/**
 @param {string} str1
 @param {string} str2
 @return {boolean}
 */
goog.dom.SavedCaretRange.htmlEqual = function(str1, str2) {
  return str1 == str2 || str1.replace(goog.dom.SavedCaretRange.CARET_REGEX, "") == str2.replace(goog.dom.SavedCaretRange.CARET_REGEX, "");
};

//# sourceMappingURL=goog.dom.savedcaretrange.js.map
