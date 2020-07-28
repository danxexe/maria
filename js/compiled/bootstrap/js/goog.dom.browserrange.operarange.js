goog.provide("goog.dom.browserrange.OperaRange");
goog.require("goog.dom.browserrange.W3cRange");
/**
 @final
 @constructor
 @extends {goog.dom.browserrange.W3cRange}
 @param {Range} range
 */
goog.dom.browserrange.OperaRange = function(range) {
  goog.dom.browserrange.W3cRange.call(this, range);
};
goog.inherits(goog.dom.browserrange.OperaRange, goog.dom.browserrange.W3cRange);
/**
 @param {Node} node
 @return {!goog.dom.browserrange.OperaRange}
 */
goog.dom.browserrange.OperaRange.createFromNodeContents = function(node) {
  return new goog.dom.browserrange.OperaRange(goog.dom.browserrange.W3cRange.getBrowserRangeForNode(node));
};
/**
 @param {Node} startNode
 @param {number} startOffset
 @param {Node} endNode
 @param {number} endOffset
 @return {!goog.dom.browserrange.OperaRange}
 */
goog.dom.browserrange.OperaRange.createFromNodes = function(startNode, startOffset, endNode, endOffset) {
  return new goog.dom.browserrange.OperaRange(goog.dom.browserrange.W3cRange.getBrowserRangeForNodes(startNode, startOffset, endNode, endOffset));
};
/** @override */ goog.dom.browserrange.OperaRange.prototype.selectInternal = function(selection, reversed) {
  selection.collapse(this.getStartNode(), this.getStartOffset());
  if (this.getEndNode() != this.getStartNode() || this.getEndOffset() != this.getStartOffset()) {
    selection.extend(this.getEndNode(), this.getEndOffset());
  }
  if (selection.rangeCount == 0) {
    selection.addRange(this.range_);
  }
};

//# sourceMappingURL=goog.dom.browserrange.operarange.js.map
