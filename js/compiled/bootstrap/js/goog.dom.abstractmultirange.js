goog.provide("goog.dom.AbstractMultiRange");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.dom.AbstractRange");
goog.require("goog.dom.TextRange");
/**
 @constructor
 @extends {goog.dom.AbstractRange}
 */
goog.dom.AbstractMultiRange = function() {
};
goog.inherits(goog.dom.AbstractMultiRange, goog.dom.AbstractRange);
/** @override */ goog.dom.AbstractMultiRange.prototype.containsRange = function(otherRange, opt_allowPartial) {
  var /** !Array<?goog.dom.TextRange> */ ranges = this.getTextRanges();
  var otherRanges = otherRange.getTextRanges();
  var fn = opt_allowPartial ? goog.array.some : goog.array.every;
  return fn(otherRanges, function(otherRange) {
    return goog.array.some(ranges, function(range) {
      return range.containsRange(otherRange, opt_allowPartial);
    });
  });
};
/** @override */ goog.dom.AbstractMultiRange.prototype.containsNode = function(node, opt_allowPartial) {
  return this.containsRange(goog.dom.TextRange.createFromNodeContents(node), opt_allowPartial);
};
/** @override */ goog.dom.AbstractMultiRange.prototype.insertNode = function(node, before) {
  if (before) {
    goog.dom.insertSiblingBefore(node, this.getStartNode());
  } else {
    goog.dom.insertSiblingAfter(node, this.getEndNode());
  }
  return node;
};
/** @override */ goog.dom.AbstractMultiRange.prototype.surroundWithNodes = function(startNode, endNode) {
  this.insertNode(startNode, true);
  this.insertNode(endNode, false);
};

//# sourceMappingURL=goog.dom.abstractmultirange.js.map
