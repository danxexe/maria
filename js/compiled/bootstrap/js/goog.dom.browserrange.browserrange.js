goog.provide("goog.dom.browserrange");
goog.provide("goog.dom.browserrange.Error");
goog.require("goog.dom");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.browserrange.GeckoRange");
goog.require("goog.dom.browserrange.IeRange");
goog.require("goog.dom.browserrange.OperaRange");
goog.require("goog.dom.browserrange.W3cRange");
goog.require("goog.dom.browserrange.WebKitRange");
goog.require("goog.userAgent");
/** @enum {string} */ goog.dom.browserrange.Error = {NOT_IMPLEMENTED:"Not Implemented"};
/**
 @param {(Range|TextRange)} range
 @return {!goog.dom.browserrange.AbstractRange}
 */
goog.dom.browserrange.createRange = function(range) {
  if (goog.dom.BrowserFeature.LEGACY_IE_RANGES) {
    return new goog.dom.browserrange.IeRange(/** @type {TextRange} */ (range), goog.dom.getOwnerDocument(range.parentElement()));
  } else {
    if (goog.userAgent.WEBKIT) {
      return new goog.dom.browserrange.WebKitRange(/** @type {Range} */ (range));
    } else {
      if (goog.userAgent.GECKO) {
        return new goog.dom.browserrange.GeckoRange(/** @type {Range} */ (range));
      } else {
        if (goog.userAgent.OPERA) {
          return new goog.dom.browserrange.OperaRange(/** @type {Range} */ (range));
        } else {
          return new goog.dom.browserrange.W3cRange(/** @type {Range} */ (range));
        }
      }
    }
  }
};
/**
 @param {Node} node
 @return {!goog.dom.browserrange.AbstractRange}
 */
goog.dom.browserrange.createRangeFromNodeContents = function(node) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    return goog.dom.browserrange.IeRange.createFromNodeContents(node);
  } else {
    if (goog.userAgent.WEBKIT) {
      return goog.dom.browserrange.WebKitRange.createFromNodeContents(node);
    } else {
      if (goog.userAgent.GECKO) {
        return goog.dom.browserrange.GeckoRange.createFromNodeContents(node);
      } else {
        if (goog.userAgent.OPERA) {
          return goog.dom.browserrange.OperaRange.createFromNodeContents(node);
        } else {
          return goog.dom.browserrange.W3cRange.createFromNodeContents(node);
        }
      }
    }
  }
};
/**
 @param {Node} startNode
 @param {number} startOffset
 @param {Node} endNode
 @param {number} endOffset
 @return {!goog.dom.browserrange.AbstractRange}
 */
goog.dom.browserrange.createRangeFromNodes = function(startNode, startOffset, endNode, endOffset) {
  if (goog.userAgent.IE && !goog.userAgent.isDocumentModeOrHigher(9)) {
    return goog.dom.browserrange.IeRange.createFromNodes(startNode, startOffset, endNode, endOffset);
  } else {
    if (goog.userAgent.WEBKIT) {
      return goog.dom.browserrange.WebKitRange.createFromNodes(startNode, startOffset, endNode, endOffset);
    } else {
      if (goog.userAgent.GECKO) {
        return goog.dom.browserrange.GeckoRange.createFromNodes(startNode, startOffset, endNode, endOffset);
      } else {
        if (goog.userAgent.OPERA) {
          return goog.dom.browserrange.OperaRange.createFromNodes(startNode, startOffset, endNode, endOffset);
        } else {
          return goog.dom.browserrange.W3cRange.createFromNodes(startNode, startOffset, endNode, endOffset);
        }
      }
    }
  }
};
/**
 @param {Node} node
 @return {boolean}
 */
goog.dom.browserrange.canContainRangeEndpoint = function(node) {
  return goog.dom.canHaveChildren(node) || node.nodeType == goog.dom.NodeType.TEXT;
};

//# sourceMappingURL=goog.dom.browserrange.browserrange.js.map
