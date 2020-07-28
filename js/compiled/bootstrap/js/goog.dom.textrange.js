goog.provide("goog.dom.TextRange");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.AbstractRange");
goog.require("goog.dom.RangeType");
goog.require("goog.dom.SavedRange");
goog.require("goog.dom.TagName");
goog.require("goog.dom.TextRangeIterator");
goog.require("goog.dom.browserrange");
goog.require("goog.string");
goog.require("goog.userAgent");
/**
 @final
 @constructor
 @extends {goog.dom.AbstractRange}
 */
goog.dom.TextRange = function() {
  /** @private @type {?goog.dom.browserrange.AbstractRange} */ this.browserRangeWrapper_ = null;
  /** @private @type {?Node} */ this.startNode_ = null;
  /** @private @type {?number} */ this.startOffset_ = null;
  /** @private @type {?Node} */ this.endNode_ = null;
  /** @private @type {?number} */ this.endOffset_ = null;
  /** @private @type {boolean} */ this.isReversed_ = false;
};
goog.inherits(goog.dom.TextRange, goog.dom.AbstractRange);
/**
 @param {(Range|TextRange)} range
 @param {boolean=} opt_isReversed
 @return {!goog.dom.TextRange}
 */
goog.dom.TextRange.createFromBrowserRange = function(range, opt_isReversed) {
  return goog.dom.TextRange.createFromBrowserRangeWrapper_(goog.dom.browserrange.createRange(range), opt_isReversed);
};
/**
 @private
 @param {goog.dom.browserrange.AbstractRange} browserRange
 @param {boolean=} opt_isReversed
 @return {!goog.dom.TextRange}
 */
goog.dom.TextRange.createFromBrowserRangeWrapper_ = function(browserRange, opt_isReversed) {
  var range = new goog.dom.TextRange;
  range.browserRangeWrapper_ = browserRange;
  range.isReversed_ = !!opt_isReversed;
  return range;
};
/**
 @param {Node} node
 @param {boolean=} opt_isReversed
 @return {!goog.dom.TextRange}
 */
goog.dom.TextRange.createFromNodeContents = function(node, opt_isReversed) {
  return goog.dom.TextRange.createFromBrowserRangeWrapper_(goog.dom.browserrange.createRangeFromNodeContents(node), opt_isReversed);
};
/**
 @param {Node} anchorNode
 @param {number} anchorOffset
 @param {Node} focusNode
 @param {number} focusOffset
 @return {!goog.dom.TextRange}
 */
goog.dom.TextRange.createFromNodes = function(anchorNode, anchorOffset, focusNode, focusOffset) {
  var range = new goog.dom.TextRange;
  range.isReversed_ = /**
   @suppress {missingRequire}
   */
  goog.dom.Range.isReversed(anchorNode, anchorOffset, focusNode, focusOffset);
  if (goog.dom.isElement(anchorNode) && !goog.dom.canHaveChildren(anchorNode)) {
    var parent = anchorNode.parentNode;
    anchorOffset = goog.array.indexOf(parent.childNodes, anchorNode);
    anchorNode = parent;
  }
  if (goog.dom.isElement(focusNode) && !goog.dom.canHaveChildren(focusNode)) {
    var parent = focusNode.parentNode;
    focusOffset = goog.array.indexOf(parent.childNodes, focusNode);
    focusNode = parent;
  }
  if (range.isReversed_) {
    range.startNode_ = focusNode;
    range.startOffset_ = focusOffset;
    range.endNode_ = anchorNode;
    range.endOffset_ = anchorOffset;
  } else {
    range.startNode_ = anchorNode;
    range.startOffset_ = anchorOffset;
    range.endNode_ = focusNode;
    range.endOffset_ = focusOffset;
  }
  return range;
};
/**
 @return {!goog.dom.TextRange}
 @override
 */
goog.dom.TextRange.prototype.clone = function() {
  var range = new goog.dom.TextRange;
  range.browserRangeWrapper_ = this.browserRangeWrapper_ && this.browserRangeWrapper_.clone();
  range.startNode_ = this.startNode_;
  range.startOffset_ = this.startOffset_;
  range.endNode_ = this.endNode_;
  range.endOffset_ = this.endOffset_;
  range.isReversed_ = this.isReversed_;
  return range;
};
/** @override */ goog.dom.TextRange.prototype.getType = function() {
  return goog.dom.RangeType.TEXT;
};
/** @override */ goog.dom.TextRange.prototype.getBrowserRangeObject = function() {
  return this.getBrowserRangeWrapper_().getBrowserRange();
};
/** @override */ goog.dom.TextRange.prototype.setBrowserRangeObject = function(nativeRange) {
  if (goog.dom.AbstractRange.isNativeControlRange(nativeRange)) {
    return false;
  }
  this.browserRangeWrapper_ = goog.dom.browserrange.createRange(nativeRange);
  this.clearCachedValues_();
  return true;
};
/** @private */ goog.dom.TextRange.prototype.clearCachedValues_ = function() {
  this.startNode_ = this.startOffset_ = this.endNode_ = this.endOffset_ = null;
};
/** @override */ goog.dom.TextRange.prototype.getTextRangeCount = function() {
  return 1;
};
/** @override */ goog.dom.TextRange.prototype.getTextRange = function(i) {
  return this;
};
/**
 @private
 @return {!goog.dom.browserrange.AbstractRange}
 */
goog.dom.TextRange.prototype.getBrowserRangeWrapper_ = function() {
  return this.browserRangeWrapper_ || (this.browserRangeWrapper_ = goog.dom.browserrange.createRangeFromNodes(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset()));
};
/** @override */ goog.dom.TextRange.prototype.getContainer = function() {
  return this.getBrowserRangeWrapper_().getContainer();
};
/** @override */ goog.dom.TextRange.prototype.getStartNode = function() {
  return this.startNode_ || (this.startNode_ = this.getBrowserRangeWrapper_().getStartNode());
};
/** @override */ goog.dom.TextRange.prototype.getStartOffset = function() {
  return this.startOffset_ != null ? this.startOffset_ : this.startOffset_ = this.getBrowserRangeWrapper_().getStartOffset();
};
/** @override */ goog.dom.TextRange.prototype.getStartPosition = function() {
  return this.getBrowserRangeWrapper_().getStartPosition();
};
/** @override */ goog.dom.TextRange.prototype.getEndNode = function() {
  return this.endNode_ || (this.endNode_ = this.getBrowserRangeWrapper_().getEndNode());
};
/** @override */ goog.dom.TextRange.prototype.getEndOffset = function() {
  return this.endOffset_ != null ? this.endOffset_ : this.endOffset_ = this.getBrowserRangeWrapper_().getEndOffset();
};
/** @override */ goog.dom.TextRange.prototype.getEndPosition = function() {
  return this.getBrowserRangeWrapper_().getEndPosition();
};
/**
 @param {Node} startNode
 @param {number} startOffset
 @param {Node} endNode
 @param {number} endOffset
 @param {boolean} isReversed
 */
goog.dom.TextRange.prototype.moveToNodes = function(startNode, startOffset, endNode, endOffset, isReversed) {
  this.startNode_ = startNode;
  this.startOffset_ = startOffset;
  this.endNode_ = endNode;
  this.endOffset_ = endOffset;
  this.isReversed_ = isReversed;
  this.browserRangeWrapper_ = null;
};
/** @override */ goog.dom.TextRange.prototype.isReversed = function() {
  return this.isReversed_;
};
/** @override */ goog.dom.TextRange.prototype.containsRange = function(otherRange, opt_allowPartial) {
  var otherRangeType = otherRange.getType();
  if (otherRangeType == goog.dom.RangeType.TEXT) {
    return this.getBrowserRangeWrapper_().containsRange(otherRange.getBrowserRangeWrapper_(), opt_allowPartial);
  } else {
    if (otherRangeType == goog.dom.RangeType.CONTROL) {
      var elements = otherRange.getElements();
      var fn = opt_allowPartial ? goog.array.some : goog.array.every;
      return fn(elements, /**
       @this {goog.dom.TextRange}
       @param {!Element} el
       @return {boolean}
       */
      function(el) {
        return this.containsNode(el, opt_allowPartial);
      }, this);
    }
  }
  return false;
};
/** @override */ goog.dom.TextRange.prototype.containsNode = function(node, opt_allowPartial) {
  return this.containsRange(goog.dom.TextRange.createFromNodeContents(node), opt_allowPartial);
};
/**
 @param {Node} node
 @return {boolean}
 */
goog.dom.TextRange.isAttachedNode = function(node) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    var returnValue = false;
    try {
      returnValue = node.parentNode;
    } catch (e) {
    }
    return !!returnValue;
  } else {
    return goog.dom.contains(node.ownerDocument.body, node);
  }
};
/** @override */ goog.dom.TextRange.prototype.isRangeInDocument = function() {
  return (!this.startNode_ || goog.dom.TextRange.isAttachedNode(this.startNode_)) && (!this.endNode_ || goog.dom.TextRange.isAttachedNode(this.endNode_)) && (!(goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) || this.getBrowserRangeWrapper_().isRangeInDocument());
};
/** @override */ goog.dom.TextRange.prototype.isCollapsed = function() {
  return this.getBrowserRangeWrapper_().isCollapsed();
};
/** @override */ goog.dom.TextRange.prototype.getText = function() {
  return this.getBrowserRangeWrapper_().getText();
};
/** @override */ goog.dom.TextRange.prototype.getHtmlFragment = function() {
  return this.getBrowserRangeWrapper_().getHtmlFragment();
};
/** @override */ goog.dom.TextRange.prototype.getValidHtml = function() {
  return this.getBrowserRangeWrapper_().getValidHtml();
};
/** @override */ goog.dom.TextRange.prototype.getPastableHtml = function() {
  var html = this.getValidHtml();
  if (html.match(/^\s*<td\b/i)) {
    html = "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e" + html + "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e";
  } else {
    if (html.match(/^\s*<tr\b/i)) {
      html = "\x3ctable\x3e\x3ctbody\x3e" + html + "\x3c/tbody\x3e\x3c/table\x3e";
    } else {
      if (html.match(/^\s*<tbody\b/i)) {
        html = "\x3ctable\x3e" + html + "\x3c/table\x3e";
      } else {
        if (html.match(/^\s*<li\b/i)) {
          var container = /** @type {!Element} */ (this.getContainer());
          var tagType = goog.dom.TagName.UL;
          while (container) {
            if (container.tagName == goog.dom.TagName.OL) {
              tagType = goog.dom.TagName.OL;
              break;
            } else {
              if (container.tagName == goog.dom.TagName.UL) {
                break;
              }
            }
            container = container.parentNode;
          }
          html = goog.string.buildString("\x3c", tagType, "\x3e", html, "\x3c/", tagType, "\x3e");
        }
      }
    }
  }
  return html;
};
/**
 @param {boolean=} opt_keys
 @return {!goog.dom.TextRangeIterator}
 @override
 */
goog.dom.TextRange.prototype.__iterator__ = function(opt_keys) {
  return new goog.dom.TextRangeIterator(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset());
};
/** @override */ goog.dom.TextRange.prototype.select = function() {
  this.getBrowserRangeWrapper_().select(this.isReversed_);
};
/** @override */ goog.dom.TextRange.prototype.removeContents = function() {
  this.getBrowserRangeWrapper_().removeContents();
  this.clearCachedValues_();
};
/**
 @param {Element} element
 @return {Element}
 */
goog.dom.TextRange.prototype.surroundContents = function(element) {
  var output = this.getBrowserRangeWrapper_().surroundContents(element);
  this.clearCachedValues_();
  return output;
};
/** @override */ goog.dom.TextRange.prototype.insertNode = function(node, before) {
  var output = this.getBrowserRangeWrapper_().insertNode(node, before);
  this.clearCachedValues_();
  return output;
};
/** @override */ goog.dom.TextRange.prototype.surroundWithNodes = function(startNode, endNode) {
  this.getBrowserRangeWrapper_().surroundWithNodes(startNode, endNode);
  this.clearCachedValues_();
};
/** @override */ goog.dom.TextRange.prototype.saveUsingDom = function() {
  return new goog.dom.DomSavedTextRange_(this);
};
/** @override */ goog.dom.TextRange.prototype.collapse = function(toAnchor) {
  var toStart = this.isReversed() ? !toAnchor : toAnchor;
  if (this.browserRangeWrapper_) {
    this.browserRangeWrapper_.collapse(toStart);
  }
  if (toStart) {
    this.endNode_ = this.startNode_;
    this.endOffset_ = this.startOffset_;
  } else {
    this.startNode_ = this.endNode_;
    this.startOffset_ = this.endOffset_;
  }
  this.isReversed_ = false;
};
/**
 @private
 @constructor
 @extends {goog.dom.SavedRange}
 @param {goog.dom.AbstractRange} range
 */
goog.dom.DomSavedTextRange_ = function(range) {
  goog.dom.DomSavedTextRange_.base(this, "constructor");
  /** @private @type {Node} */ this.anchorNode_ = range.getAnchorNode();
  /** @private @type {number} */ this.anchorOffset_ = range.getAnchorOffset();
  /** @private @type {Node} */ this.focusNode_ = range.getFocusNode();
  /** @private @type {number} */ this.focusOffset_ = range.getFocusOffset();
};
goog.inherits(goog.dom.DomSavedTextRange_, goog.dom.SavedRange);
/**
 @return {!goog.dom.AbstractRange}
 @override
 */
goog.dom.DomSavedTextRange_.prototype.restoreInternal = function() {
  return (/**
   @suppress {missingRequire}
   */
  goog.dom.Range.createFromNodes(this.anchorNode_, this.anchorOffset_, this.focusNode_, this.focusOffset_));
};
/** @override */ goog.dom.DomSavedTextRange_.prototype.disposeInternal = function() {
  goog.dom.DomSavedTextRange_.superClass_.disposeInternal.call(this);
  this.anchorNode_ = null;
  this.focusNode_ = null;
};

//# sourceMappingURL=goog.dom.textrange.js.map
