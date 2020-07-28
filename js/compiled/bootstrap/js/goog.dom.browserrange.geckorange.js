goog.provide("goog.dom.browserrange.GeckoRange");
goog.require("goog.dom.browserrange.W3cRange");
/**
 @final
 @constructor
 @extends {goog.dom.browserrange.W3cRange}
 @param {Range} range
 */
goog.dom.browserrange.GeckoRange = function(range) {
  goog.dom.browserrange.W3cRange.call(this, range);
};
goog.inherits(goog.dom.browserrange.GeckoRange, goog.dom.browserrange.W3cRange);
/**
 @param {Node} node
 @return {!goog.dom.browserrange.GeckoRange}
 */
goog.dom.browserrange.GeckoRange.createFromNodeContents = function(node) {
  return new goog.dom.browserrange.GeckoRange(goog.dom.browserrange.W3cRange.getBrowserRangeForNode(node));
};
/**
 @param {Node} startNode
 @param {number} startOffset
 @param {Node} endNode
 @param {number} endOffset
 @return {!goog.dom.browserrange.GeckoRange}
 */
goog.dom.browserrange.GeckoRange.createFromNodes = function(startNode, startOffset, endNode, endOffset) {
  return new goog.dom.browserrange.GeckoRange(goog.dom.browserrange.W3cRange.getBrowserRangeForNodes(startNode, startOffset, endNode, endOffset));
};
/** @override */ goog.dom.browserrange.GeckoRange.prototype.selectInternal = function(selection, reversed) {
  if (!reversed || this.isCollapsed()) {
    goog.dom.browserrange.GeckoRange.base(this, "selectInternal", selection, reversed);
  } else {
    selection.collapse(this.getEndNode(), this.getEndOffset());
    selection.extend(this.getStartNode(), this.getStartOffset());
  }
};

//# sourceMappingURL=goog.dom.browserrange.geckorange.js.map
