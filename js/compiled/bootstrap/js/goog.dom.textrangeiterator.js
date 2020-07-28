goog.provide("goog.dom.TextRangeIterator");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.RangeIterator");
goog.require("goog.dom.TagName");
goog.require("goog.iter.StopIteration");
/**
 @final
 @constructor
 @extends {goog.dom.RangeIterator}
 @param {Node} startNode
 @param {number} startOffset
 @param {Node} endNode
 @param {number} endOffset
 @param {boolean=} opt_reverse
 */
goog.dom.TextRangeIterator = function(startNode, startOffset, endNode, endOffset, opt_reverse) {
  /** @private @type {?Node} */ this.startNode_ = null;
  /** @private @type {?Node} */ this.endNode_ = null;
  /** @private @type {number} */ this.startOffset_ = 0;
  /** @private @type {number} */ this.endOffset_ = 0;
  /** @private @type {boolean} */ this.isReversed_ = !!opt_reverse;
  var goNext;
  if (startNode) {
    this.startNode_ = startNode;
    this.startOffset_ = startOffset;
    this.endNode_ = endNode;
    this.endOffset_ = endOffset;
    if (startNode.nodeType == goog.dom.NodeType.ELEMENT && /** @type {!Element} */ (startNode).tagName != goog.dom.TagName.BR) {
      var startChildren = startNode.childNodes;
      var candidate = startChildren[startOffset];
      if (candidate) {
        this.startNode_ = candidate;
        this.startOffset_ = 0;
      } else {
        if (startChildren.length) {
          this.startNode_ = /** @type {Node} */ (goog.array.peek(startChildren));
        }
        goNext = true;
      }
    }
    if (endNode.nodeType == goog.dom.NodeType.ELEMENT) {
      this.endNode_ = endNode.childNodes[endOffset];
      if (this.endNode_) {
        this.endOffset_ = 0;
      } else {
        this.endNode_ = endNode;
      }
    }
  }
  goog.dom.TextRangeIterator.base(this, "constructor", this.isReversed_ ? this.endNode_ : this.startNode_, this.isReversed_);
  if (goNext) {
    try {
      this.next();
    } catch (e) {
      if (e != goog.iter.StopIteration) {
        throw e;
      }
    }
  }
};
goog.inherits(goog.dom.TextRangeIterator, goog.dom.RangeIterator);
/** @override */ goog.dom.TextRangeIterator.prototype.getStartTextOffset = function() {
  return this.node.nodeType != goog.dom.NodeType.TEXT ? -1 : this.node == this.startNode_ ? this.startOffset_ : 0;
};
/** @override */ goog.dom.TextRangeIterator.prototype.getEndTextOffset = function() {
  return this.node.nodeType != goog.dom.NodeType.TEXT ? -1 : this.node == this.endNode_ ? this.endOffset_ : this.node.nodeValue.length;
};
/** @override */ goog.dom.TextRangeIterator.prototype.getStartNode = function() {
  return this.startNode_;
};
/**
 @param {Node} node
 */
goog.dom.TextRangeIterator.prototype.setStartNode = function(node) {
  if (!this.isStarted()) {
    this.setPosition(node);
  }
  this.startNode_ = node;
  this.startOffset_ = 0;
};
/** @override */ goog.dom.TextRangeIterator.prototype.getEndNode = function() {
  return this.endNode_;
};
/**
 @param {Node} node
 */
goog.dom.TextRangeIterator.prototype.setEndNode = function(node) {
  this.endNode_ = node;
  this.endOffset_ = 0;
};
/** @override */ goog.dom.TextRangeIterator.prototype.isLast = function() {
  return this.isStarted() && this.isLastTag_();
};
/**
 @private
 @return {boolean}
 */
goog.dom.TextRangeIterator.prototype.isLastTag_ = function() {
  if (this.node != this.lastNode_()) {
    return false;
  }
  if (this.isReversed_) {
    return this.startOffset_ ? !this.isEndTag() : this.isStartTag();
  }
  return !this.endOffset_ || !this.isStartTag();
};
/**
 @return {Node}
 @override
 */
goog.dom.TextRangeIterator.prototype.next = function() {
  if (this.isLast()) {
    throw goog.iter.StopIteration;
  }
  return goog.dom.TextRangeIterator.superClass_.next.call(this);
};
/**
 @private
 @return {?Node}
 */
goog.dom.TextRangeIterator.prototype.lastNode_ = function() {
  return this.isReversed_ ? this.startNode_ : this.endNode_;
};
/** @override */ goog.dom.TextRangeIterator.prototype.skipTag = function() {
  goog.dom.TextRangeIterator.superClass_.skipTag.apply(this);
  if (goog.dom.contains(this.node, this.lastNode_())) {
    throw goog.iter.StopIteration;
  }
};
/**
 @override
 @suppress {strictMissingProperties}
 */
goog.dom.TextRangeIterator.prototype.copyFrom = function(other) {
  this.startNode_ = other.startNode_;
  this.endNode_ = other.endNode_;
  this.startOffset_ = other.startOffset_;
  this.endOffset_ = other.endOffset_;
  this.isReversed_ = other.isReversed_;
  goog.dom.TextRangeIterator.superClass_.copyFrom.call(this, other);
};
/**
 @return {!goog.dom.TextRangeIterator}
 @override
 */
goog.dom.TextRangeIterator.prototype.clone = function() {
  var copy = new goog.dom.TextRangeIterator(this.startNode_, this.startOffset_, this.endNode_, this.endOffset_, this.isReversed_);
  copy.copyFrom(this);
  return copy;
};

//# sourceMappingURL=goog.dom.textrangeiterator.js.map
