/**
 @suppress {strictMissingProperties}
 */
goog.provide("goog.dom.ControlRange");
goog.provide("goog.dom.ControlRangeIterator");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.AbstractMultiRange");
goog.require("goog.dom.AbstractRange");
goog.require("goog.dom.RangeIterator");
goog.require("goog.dom.RangeType");
goog.require("goog.dom.SavedRange");
goog.require("goog.dom.TagWalkType");
goog.require("goog.dom.TextRange");
goog.require("goog.iter.StopIteration");
goog.require("goog.userAgent");
/**
 @final
 @constructor
 @extends {goog.dom.AbstractMultiRange}
 */
goog.dom.ControlRange = function() {
  /** @private @type {?Object} */ this.range_ = null;
  /** @private @type {?Array<?Element>} */ this.elements_ = null;
  /** @private @type {?Array<?Element>} */ this.sortedElements_ = null;
};
goog.inherits(goog.dom.ControlRange, goog.dom.AbstractMultiRange);
/**
 @param {Object} controlRange
 @return {!goog.dom.ControlRange}
 */
goog.dom.ControlRange.createFromBrowserRange = function(controlRange) {
  var range = new goog.dom.ControlRange;
  range.range_ = controlRange;
  return range;
};
/**
 @param {...Element} var_args
 @return {!goog.dom.ControlRange}
 */
goog.dom.ControlRange.createFromElements = function(var_args) {
  var range = goog.dom.getOwnerDocument(arguments[0]).body.createControlRange();
  for (var i = 0, len = arguments.length; i < len; i++) {
    range.addElement(arguments[i]);
  }
  return goog.dom.ControlRange.createFromBrowserRange(range);
};
/** @private */ goog.dom.ControlRange.prototype.clearCachedValues_ = function() {
  this.elements_ = null;
  this.sortedElements_ = null;
};
/** @override */ goog.dom.ControlRange.prototype.clone = function() {
  return goog.dom.ControlRange.createFromElements.apply(this, this.getElements());
};
/** @override */ goog.dom.ControlRange.prototype.getType = function() {
  return goog.dom.RangeType.CONTROL;
};
/** @override */ goog.dom.ControlRange.prototype.getBrowserRangeObject = function() {
  return this.range_ || document.body.createControlRange();
};
/** @override */ goog.dom.ControlRange.prototype.setBrowserRangeObject = function(nativeRange) {
  if (!goog.dom.AbstractRange.isNativeControlRange(nativeRange)) {
    return false;
  }
  this.range_ = nativeRange;
  return true;
};
/** @override */ goog.dom.ControlRange.prototype.getTextRangeCount = function() {
  return this.range_ ? this.range_.length : 0;
};
/** @override */ goog.dom.ControlRange.prototype.getTextRange = function(i) {
  return goog.dom.TextRange.createFromNodeContents(this.range_.item(i));
};
/** @override */ goog.dom.ControlRange.prototype.getContainer = function() {
  return goog.dom.findCommonAncestor.apply(null, this.getElements());
};
/** @override */ goog.dom.ControlRange.prototype.getStartNode = function() {
  return this.getSortedElements()[0];
};
/** @override */ goog.dom.ControlRange.prototype.getStartOffset = function() {
  return 0;
};
/** @override */ goog.dom.ControlRange.prototype.getEndNode = function() {
  var sorted = this.getSortedElements();
  var startsLast = /** @type {Node} */ (goog.array.peek(sorted));
  return (/** @type {Node} */ (goog.array.find(sorted, function(el) {
    return goog.dom.contains(el, startsLast);
  })));
};
/** @override */ goog.dom.ControlRange.prototype.getEndOffset = function() {
  return this.getEndNode().childNodes.length;
};
/**
 @return {!Array<Element>}
 */
goog.dom.ControlRange.prototype.getElements = function() {
  if (!this.elements_) {
    this.elements_ = [];
    if (this.range_) {
      for (var i = 0; i < this.range_.length; i++) {
        this.elements_.push(this.range_.item(i));
      }
    }
  }
  return this.elements_;
};
/**
 @return {!Array<Element>}
 */
goog.dom.ControlRange.prototype.getSortedElements = function() {
  if (!this.sortedElements_) {
    this.sortedElements_ = this.getElements().concat();
    this.sortedElements_.sort(function(a, b) {
      return a.sourceIndex - b.sourceIndex;
    });
  }
  return this.sortedElements_;
};
/** @override */ goog.dom.ControlRange.prototype.isRangeInDocument = function() {
  var returnValue = false;
  try {
    returnValue = goog.array.every(this.getElements(), function(element) {
      return goog.userAgent.IE ? !!element.parentNode : goog.dom.contains(element.ownerDocument.body, element);
    });
  } catch (e) {
  }
  return returnValue;
};
/** @override */ goog.dom.ControlRange.prototype.isCollapsed = function() {
  return !this.range_ || !this.range_.length;
};
/** @override */ goog.dom.ControlRange.prototype.getText = function() {
  return "";
};
/** @override */ goog.dom.ControlRange.prototype.getHtmlFragment = function() {
  return goog.array.map(this.getSortedElements(), goog.dom.getOuterHtml).join("");
};
/** @override */ goog.dom.ControlRange.prototype.getValidHtml = function() {
  return this.getHtmlFragment();
};
/** @override */ goog.dom.ControlRange.prototype.getPastableHtml = goog.dom.ControlRange.prototype.getValidHtml;
/** @override */ goog.dom.ControlRange.prototype.__iterator__ = function(opt_keys) {
  return new goog.dom.ControlRangeIterator(this);
};
/** @override */ goog.dom.ControlRange.prototype.select = function() {
  if (this.range_) {
    this.range_.select();
  }
};
/** @override */ goog.dom.ControlRange.prototype.removeContents = function() {
  if (this.range_) {
    var nodes = [];
    for (var i = 0, len = this.range_.length; i < len; i++) {
      nodes.push(this.range_.item(i));
    }
    goog.array.forEach(nodes, goog.dom.removeNode);
    this.collapse(false);
  }
};
/** @override */ goog.dom.ControlRange.prototype.replaceContentsWithNode = function(node) {
  var result = this.insertNode(node, true);
  if (!this.isCollapsed()) {
    this.removeContents();
  }
  return result;
};
/** @override */ goog.dom.ControlRange.prototype.saveUsingDom = function() {
  return new goog.dom.DomSavedControlRange_(this);
};
/** @override */ goog.dom.ControlRange.prototype.collapse = function(toAnchor) {
  this.range_ = null;
  this.clearCachedValues_();
};
/**
 @private
 @constructor
 @extends {goog.dom.SavedRange}
 @param {goog.dom.ControlRange} range
 */
goog.dom.DomSavedControlRange_ = function(range) {
  /** @private @type {Array<Element>} */ this.elements_ = range.getElements();
};
goog.inherits(goog.dom.DomSavedControlRange_, goog.dom.SavedRange);
/** @override */ goog.dom.DomSavedControlRange_.prototype.restoreInternal = function() {
  var doc = this.elements_.length ? goog.dom.getOwnerDocument(this.elements_[0]) : document;
  var controlRange = doc.body.createControlRange();
  for (var i = 0, len = this.elements_.length; i < len; i++) {
    controlRange.addElement(this.elements_[i]);
  }
  return goog.dom.ControlRange.createFromBrowserRange(controlRange);
};
/** @override */ goog.dom.DomSavedControlRange_.prototype.disposeInternal = function() {
  goog.dom.DomSavedControlRange_.superClass_.disposeInternal.call(this);
  delete this.elements_;
};
/**
 @final
 @constructor
 @extends {goog.dom.RangeIterator}
 @param {?goog.dom.ControlRange} range
 */
goog.dom.ControlRangeIterator = function(range) {
  /** @private @type {?Node} */ this.startNode_ = null;
  /** @private @type {?Node} */ this.endNode_ = null;
  /** @private @type {?Array<?Element>} */ this.elements_ = null;
  if (range) {
    this.elements_ = range.getSortedElements();
    this.startNode_ = this.elements_.shift();
    this.endNode_ = /** @type {Node} */ (goog.array.peek(this.elements_)) || this.startNode_;
  }
  goog.dom.ControlRangeIterator.base(this, "constructor", this.startNode_, false);
};
goog.inherits(goog.dom.ControlRangeIterator, goog.dom.RangeIterator);
/** @override */ goog.dom.ControlRangeIterator.prototype.getStartTextOffset = function() {
  return 0;
};
/** @override */ goog.dom.ControlRangeIterator.prototype.getEndTextOffset = function() {
  return 0;
};
/** @override */ goog.dom.ControlRangeIterator.prototype.getStartNode = function() {
  return this.startNode_;
};
/** @override */ goog.dom.ControlRangeIterator.prototype.getEndNode = function() {
  return this.endNode_;
};
/** @override */ goog.dom.ControlRangeIterator.prototype.isLast = function() {
  return !this.depth && !this.elements_.length;
};
/**
 @return {Node}
 @override
 */
goog.dom.ControlRangeIterator.prototype.next = function() {
  if (this.isLast()) {
    throw goog.iter.StopIteration;
  } else {
    if (!this.depth) {
      var el = this.elements_.shift();
      this.setPosition(el, goog.dom.TagWalkType.START_TAG, goog.dom.TagWalkType.START_TAG);
      return el;
    }
  }
  return goog.dom.ControlRangeIterator.superClass_.next.call(this);
};
/** @override */ goog.dom.ControlRangeIterator.prototype.copyFrom = function(other) {
  var that = /** @type {!goog.dom.ControlRangeIterator} */ (other);
  this.elements_ = that.elements_;
  this.startNode_ = that.startNode_;
  this.endNode_ = that.endNode_;
  goog.dom.ControlRangeIterator.superClass_.copyFrom.call(this, that);
};
/**
 @return {!goog.dom.ControlRangeIterator}
 @override
 */
goog.dom.ControlRangeIterator.prototype.clone = function() {
  var copy = new goog.dom.ControlRangeIterator(null);
  copy.copyFrom(this);
  return copy;
};

//# sourceMappingURL=goog.dom.controlrange.js.map
