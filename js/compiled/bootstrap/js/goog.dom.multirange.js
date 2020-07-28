goog.provide("goog.dom.MultiRange");
goog.provide("goog.dom.MultiRangeIterator");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.AbstractMultiRange");
goog.require("goog.dom.AbstractRange");
goog.require("goog.dom.RangeIterator");
goog.require("goog.dom.RangeType");
goog.require("goog.dom.SavedRange");
goog.require("goog.dom.TextRange");
goog.require("goog.iter");
goog.require("goog.iter.StopIteration");
goog.require("goog.log");
/**
 @final
 @constructor
 @extends {goog.dom.AbstractMultiRange}
 */
goog.dom.MultiRange = function() {
  /** @private @type {goog.log.Logger} */ this.logger_ = goog.log.getLogger("goog.dom.MultiRange");
  /** @private @type {Array<Range>} */ this.browserRanges_ = [];
  /** @private @type {Array<goog.dom.TextRange>} */ this.ranges_ = [];
  /** @private @type {?Array<?goog.dom.TextRange>} */ this.sortedRanges_ = null;
  /** @private @type {?Node} */ this.container_ = null;
};
goog.inherits(goog.dom.MultiRange, goog.dom.AbstractMultiRange);
/**
 @param {Selection} selection
 @return {!goog.dom.MultiRange}
 */
goog.dom.MultiRange.createFromBrowserSelection = function(selection) {
  var range = new goog.dom.MultiRange;
  for (var i = 0, len = selection.rangeCount; i < len; i++) {
    range.browserRanges_.push(selection.getRangeAt(i));
  }
  return range;
};
/**
 @param {Array<Range>} browserRanges
 @return {!goog.dom.MultiRange}
 */
goog.dom.MultiRange.createFromBrowserRanges = function(browserRanges) {
  var range = new goog.dom.MultiRange;
  range.browserRanges_ = goog.array.clone(browserRanges);
  return range;
};
/**
 @param {Array<goog.dom.TextRange>} textRanges
 @return {!goog.dom.MultiRange}
 */
goog.dom.MultiRange.createFromTextRanges = function(textRanges) {
  var range = new goog.dom.MultiRange;
  range.ranges_ = textRanges;
  range.browserRanges_ = goog.array.map(textRanges, function(range) {
    return range.getBrowserRangeObject();
  });
  return range;
};
/** @private */ goog.dom.MultiRange.prototype.clearCachedValues_ = function() {
  this.ranges_ = [];
  this.sortedRanges_ = null;
  this.container_ = null;
};
/**
 @return {!goog.dom.MultiRange}
 @override
 */
goog.dom.MultiRange.prototype.clone = function() {
  return goog.dom.MultiRange.createFromBrowserRanges(this.browserRanges_);
};
/** @override */ goog.dom.MultiRange.prototype.getType = function() {
  return goog.dom.RangeType.MULTI;
};
/** @override */ goog.dom.MultiRange.prototype.getBrowserRangeObject = function() {
  if (this.browserRanges_.length > 1) {
    goog.log.warning(this.logger_, "getBrowserRangeObject called on MultiRange with more than 1 range");
  }
  return this.browserRanges_[0];
};
/** @override */ goog.dom.MultiRange.prototype.setBrowserRangeObject = function(nativeRange) {
  return false;
};
/** @override */ goog.dom.MultiRange.prototype.getTextRangeCount = function() {
  return this.browserRanges_.length;
};
/** @override */ goog.dom.MultiRange.prototype.getTextRange = function(i) {
  if (!this.ranges_[i]) {
    this.ranges_[i] = goog.dom.TextRange.createFromBrowserRange(this.browserRanges_[i]);
  }
  return this.ranges_[i];
};
/** @override */ goog.dom.MultiRange.prototype.getContainer = function() {
  if (!this.container_) {
    var nodes = [];
    for (var i = 0, len = this.getTextRangeCount(); i < len; i++) {
      nodes.push(this.getTextRange(i).getContainer());
    }
    this.container_ = goog.dom.findCommonAncestor.apply(null, nodes);
  }
  return this.container_;
};
/**
 @return {!Array<goog.dom.TextRange>}
 */
goog.dom.MultiRange.prototype.getSortedRanges = function() {
  if (!this.sortedRanges_) {
    this.sortedRanges_ = this.getTextRanges();
    this.sortedRanges_.sort(function(a, b) {
      var aStartNode = a.getStartNode();
      var aStartOffset = a.getStartOffset();
      var bStartNode = b.getStartNode();
      var bStartOffset = b.getStartOffset();
      if (aStartNode == bStartNode && aStartOffset == bStartOffset) {
        return 0;
      }
      /**
       @suppress {missingRequire}
       */
      return goog.dom.Range.isReversed(aStartNode, aStartOffset, bStartNode, bStartOffset) ? 1 : -1;
    });
  }
  return this.sortedRanges_;
};
/** @override */ goog.dom.MultiRange.prototype.getStartNode = function() {
  return this.getSortedRanges()[0].getStartNode();
};
/** @override */ goog.dom.MultiRange.prototype.getStartOffset = function() {
  return this.getSortedRanges()[0].getStartOffset();
};
/** @override */ goog.dom.MultiRange.prototype.getEndNode = function() {
  return goog.array.peek(this.getSortedRanges()).getEndNode();
};
/** @override */ goog.dom.MultiRange.prototype.getEndOffset = function() {
  return goog.array.peek(this.getSortedRanges()).getEndOffset();
};
/** @override */ goog.dom.MultiRange.prototype.isRangeInDocument = function() {
  return goog.array.every(this.getTextRanges(), function(range) {
    return range.isRangeInDocument();
  });
};
/** @override */ goog.dom.MultiRange.prototype.isCollapsed = function() {
  return this.browserRanges_.length == 0 || this.browserRanges_.length == 1 && this.getTextRange(0).isCollapsed();
};
/** @override */ goog.dom.MultiRange.prototype.getText = function() {
  return goog.array.map(this.getTextRanges(), function(range) {
    return range.getText();
  }).join("");
};
/** @override */ goog.dom.MultiRange.prototype.getHtmlFragment = function() {
  return this.getValidHtml();
};
/** @override */ goog.dom.MultiRange.prototype.getValidHtml = function() {
  return goog.array.map(this.getTextRanges(), function(range) {
    return range.getValidHtml();
  }).join("");
};
/** @override */ goog.dom.MultiRange.prototype.getPastableHtml = function() {
  return this.getValidHtml();
};
/** @override */ goog.dom.MultiRange.prototype.__iterator__ = function(opt_keys) {
  return new goog.dom.MultiRangeIterator(this);
};
/** @override */ goog.dom.MultiRange.prototype.select = function() {
  var selection = goog.dom.AbstractRange.getBrowserSelectionForWindow(this.getWindow());
  selection.removeAllRanges();
  for (var i = 0, len = this.getTextRangeCount(); i < len; i++) {
    selection.addRange(this.getTextRange(i).getBrowserRangeObject());
  }
};
/** @override */ goog.dom.MultiRange.prototype.removeContents = function() {
  goog.array.forEach(this.getTextRanges(), function(range) {
    range.removeContents();
  });
};
/** @override */ goog.dom.MultiRange.prototype.saveUsingDom = function() {
  return new goog.dom.DomSavedMultiRange_(this);
};
/**
 @param {boolean} toAnchor
 @override
 */
goog.dom.MultiRange.prototype.collapse = function(toAnchor) {
  if (!this.isCollapsed()) {
    var range = toAnchor ? this.getTextRange(0) : this.getTextRange(this.getTextRangeCount() - 1);
    this.clearCachedValues_();
    range.collapse(toAnchor);
    this.ranges_ = [range];
    this.sortedRanges_ = [range];
    this.browserRanges_ = [range.getBrowserRangeObject()];
  }
};
/**
 @private
 @constructor
 @extends {goog.dom.SavedRange}
 @param {goog.dom.MultiRange} range
 */
goog.dom.DomSavedMultiRange_ = function(range) {
  /** @private @type {Array<goog.dom.SavedRange>} */ this.savedRanges_ = goog.array.map(range.getTextRanges(), function(range) {
    return range.saveUsingDom();
  });
};
goog.inherits(goog.dom.DomSavedMultiRange_, goog.dom.SavedRange);
/**
 @return {!goog.dom.MultiRange}
 @override
 */
goog.dom.DomSavedMultiRange_.prototype.restoreInternal = function() {
  var ranges = goog.array.map(this.savedRanges_, function(savedRange) {
    return savedRange.restore();
  });
  return goog.dom.MultiRange.createFromTextRanges(ranges);
};
/** @override */ goog.dom.DomSavedMultiRange_.prototype.disposeInternal = function() {
  goog.dom.DomSavedMultiRange_.superClass_.disposeInternal.call(this);
  goog.array.forEach(this.savedRanges_, function(savedRange) {
    savedRange.dispose();
  });
  delete this.savedRanges_;
};
/**
 @final
 @constructor
 @extends {goog.dom.RangeIterator}
 @param {goog.dom.MultiRange} range
 */
goog.dom.MultiRangeIterator = function(range) {
  /** @private @type {?Array<?goog.dom.RangeIterator>} */ this.iterators_ = null;
  /** @private @type {number} */ this.currentIdx_ = 0;
  if (range) {
    this.iterators_ = goog.array.map(range.getSortedRanges(), function(r) {
      return goog.iter.toIterator(r);
    });
  }
  goog.dom.MultiRangeIterator.base(this, "constructor", range ? this.getStartNode() : null, false);
};
goog.inherits(goog.dom.MultiRangeIterator, goog.dom.RangeIterator);
/** @override */ goog.dom.MultiRangeIterator.prototype.getStartTextOffset = function() {
  return this.iterators_[this.currentIdx_].getStartTextOffset();
};
/** @override */ goog.dom.MultiRangeIterator.prototype.getEndTextOffset = function() {
  return this.iterators_[this.currentIdx_].getEndTextOffset();
};
/** @override */ goog.dom.MultiRangeIterator.prototype.getStartNode = function() {
  return this.iterators_[0].getStartNode();
};
/** @override */ goog.dom.MultiRangeIterator.prototype.getEndNode = function() {
  return goog.array.peek(this.iterators_).getEndNode();
};
/** @override */ goog.dom.MultiRangeIterator.prototype.isLast = function() {
  return this.iterators_[this.currentIdx_].isLast();
};
/** @override */ goog.dom.MultiRangeIterator.prototype.next = function() {
  try {
    var it = this.iterators_[this.currentIdx_];
    var next = it.next();
    this.setPosition(it.node, it.tagType, it.depth);
    return next;
  } catch (ex) {
    if (ex !== goog.iter.StopIteration || this.iterators_.length - 1 == this.currentIdx_) {
      throw ex;
    } else {
      this.currentIdx_++;
      return this.next();
    }
  }
};
/** @override */ goog.dom.MultiRangeIterator.prototype.copyFrom = function(other) {
  this.iterators_ = goog.array.clone(other.iterators_);
  goog.dom.MultiRangeIterator.superClass_.copyFrom.call(this, other);
};
/**
 @return {!goog.dom.MultiRangeIterator}
 @override
 */
goog.dom.MultiRangeIterator.prototype.clone = function() {
  var copy = new goog.dom.MultiRangeIterator(null);
  copy.copyFrom(this);
  return copy;
};

//# sourceMappingURL=goog.dom.multirange.js.map
