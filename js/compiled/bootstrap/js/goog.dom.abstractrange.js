goog.provide("goog.dom.AbstractRange");
goog.provide("goog.dom.RangeIterator");
goog.provide("goog.dom.RangeType");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.SavedCaretRange");
goog.require("goog.dom.TagIterator");
goog.require("goog.userAgent");
goog.forwardDeclare("goog.dom.TextRange");
/** @enum {string} */ goog.dom.RangeType = {TEXT:"text", CONTROL:"control", MULTI:"mutli"};
/** @constructor */ goog.dom.AbstractRange = function() {
};
/**
 @param {Window} win
 @return {Object}
 */
goog.dom.AbstractRange.getBrowserSelectionForWindow = function(win) {
  if (win.getSelection) {
    return win.getSelection();
  } else {
    var doc = win.document;
    var sel = doc.selection;
    if (sel) {
      try {
        var range = sel.createRange();
        if (range.parentElement) {
          if (range.parentElement().document != doc) {
            return null;
          }
        } else {
          if (!range.length || /** @type {ControlRange} */ (range).item(0).document != doc) {
            return null;
          }
        }
      } catch (e) {
        return null;
      }
      return sel;
    }
    return null;
  }
};
/**
 @param {Object} range
 @return {boolean}
 */
goog.dom.AbstractRange.isNativeControlRange = function(range) {
  return !!range && !!range.addElement;
};
/**
 @return {!goog.dom.AbstractRange}
 */
goog.dom.AbstractRange.prototype.clone = goog.abstractMethod;
/**
 @return {goog.dom.RangeType}
 */
goog.dom.AbstractRange.prototype.getType = goog.abstractMethod;
/**
 @return {(Range|TextRange)}
 */
goog.dom.AbstractRange.prototype.getBrowserRangeObject = goog.abstractMethod;
/**
 @param {(Range|TextRange)} nativeRange
 @return {boolean}
 */
goog.dom.AbstractRange.prototype.setBrowserRangeObject = function(nativeRange) {
  return false;
};
/**
 @return {number}
 */
goog.dom.AbstractRange.prototype.getTextRangeCount = goog.abstractMethod;
/**
 @param {number} i
 @return {goog.dom.TextRange}
 */
goog.dom.AbstractRange.prototype.getTextRange = goog.abstractMethod;
/**
 @return {!Array<goog.dom.TextRange>}
 */
goog.dom.AbstractRange.prototype.getTextRanges = function() {
  var output = [];
  for (var i = 0, len = this.getTextRangeCount(); i < len; i++) {
    output.push(this.getTextRange(i));
  }
  return output;
};
/**
 @return {Node}
 */
goog.dom.AbstractRange.prototype.getContainer = goog.abstractMethod;
/**
 @return {Element}
 */
goog.dom.AbstractRange.prototype.getContainerElement = function() {
  var node = this.getContainer();
  return (/** @type {Element} */ (node.nodeType == goog.dom.NodeType.ELEMENT ? node : node.parentNode));
};
/**
 @return {Node}
 */
goog.dom.AbstractRange.prototype.getStartNode = goog.abstractMethod;
/**
 @return {number}
 */
goog.dom.AbstractRange.prototype.getStartOffset = goog.abstractMethod;
/**
 @return {goog.math.Coordinate}
 */
goog.dom.AbstractRange.prototype.getStartPosition = goog.abstractMethod;
/**
 @return {Node}
 */
goog.dom.AbstractRange.prototype.getEndNode = goog.abstractMethod;
/**
 @return {number}
 */
goog.dom.AbstractRange.prototype.getEndOffset = goog.abstractMethod;
/**
 @return {goog.math.Coordinate}
 */
goog.dom.AbstractRange.prototype.getEndPosition = goog.abstractMethod;
/**
 @return {Node}
 */
goog.dom.AbstractRange.prototype.getAnchorNode = function() {
  return this.isReversed() ? this.getEndNode() : this.getStartNode();
};
/**
 @return {number}
 */
goog.dom.AbstractRange.prototype.getAnchorOffset = function() {
  return this.isReversed() ? this.getEndOffset() : this.getStartOffset();
};
/**
 @return {Node}
 */
goog.dom.AbstractRange.prototype.getFocusNode = function() {
  return this.isReversed() ? this.getStartNode() : this.getEndNode();
};
/**
 @return {number}
 */
goog.dom.AbstractRange.prototype.getFocusOffset = function() {
  return this.isReversed() ? this.getStartOffset() : this.getEndOffset();
};
/**
 @return {boolean}
 */
goog.dom.AbstractRange.prototype.isReversed = function() {
  return false;
};
/**
 @return {!Document}
 */
goog.dom.AbstractRange.prototype.getDocument = function() {
  return goog.dom.getOwnerDocument(goog.userAgent.IE ? this.getContainer() : this.getStartNode());
};
/**
 @return {!Window}
 */
goog.dom.AbstractRange.prototype.getWindow = function() {
  return goog.dom.getWindow(this.getDocument());
};
/**
 @param {goog.dom.AbstractRange} range
 @param {boolean=} opt_allowPartial
 @return {boolean}
 */
goog.dom.AbstractRange.prototype.containsRange = goog.abstractMethod;
/**
 @param {Node} node
 @param {boolean=} opt_allowPartial
 @return {boolean}
 */
goog.dom.AbstractRange.prototype.containsNode = goog.abstractMethod;
/**
 @return {boolean}
 */
goog.dom.AbstractRange.prototype.isRangeInDocument = goog.abstractMethod;
/**
 @return {boolean}
 */
goog.dom.AbstractRange.prototype.isCollapsed = goog.abstractMethod;
/**
 @return {string}
 */
goog.dom.AbstractRange.prototype.getText = goog.abstractMethod;
/**
 @return {string}
 */
goog.dom.AbstractRange.prototype.getHtmlFragment = goog.abstractMethod;
/**
 @return {string}
 */
goog.dom.AbstractRange.prototype.getValidHtml = goog.abstractMethod;
/**
 @return {string}
 */
goog.dom.AbstractRange.prototype.getPastableHtml = goog.abstractMethod;
/**
 @param {boolean=} opt_keys
 @return {!goog.dom.RangeIterator}
 */
goog.dom.AbstractRange.prototype.__iterator__ = goog.abstractMethod;
goog.dom.AbstractRange.prototype.select = goog.abstractMethod;
goog.dom.AbstractRange.prototype.removeContents = goog.abstractMethod;
/**
 @param {Node} node
 @param {boolean} before
 @return {Node}
 */
goog.dom.AbstractRange.prototype.insertNode = goog.abstractMethod;
/**
 @param {Node} node
 @return {Node}
 */
goog.dom.AbstractRange.prototype.replaceContentsWithNode = function(node) {
  if (!this.isCollapsed()) {
    this.removeContents();
  }
  return this.insertNode(node, true);
};
/**
 @param {Element} startNode
 @param {Element} endNode
 */
goog.dom.AbstractRange.prototype.surroundWithNodes = goog.abstractMethod;
/**
 @return {!goog.dom.SavedRange}
 */
goog.dom.AbstractRange.prototype.saveUsingDom = goog.abstractMethod;
/**
 @return {?goog.dom.SavedCaretRange}
 */
goog.dom.AbstractRange.prototype.saveUsingCarets = function() {
  return this.getStartNode() && this.getEndNode() ? new goog.dom.SavedCaretRange(this) : null;
};
/**
 @param {boolean} toAnchor
 */
goog.dom.AbstractRange.prototype.collapse = goog.abstractMethod;
/**
 @constructor
 @extends {goog.dom.TagIterator}
 @param {Node} node
 @param {boolean=} opt_reverse
 */
goog.dom.RangeIterator = function(node, opt_reverse) {
  goog.dom.TagIterator.call(this, node, opt_reverse, true);
};
goog.inherits(goog.dom.RangeIterator, goog.dom.TagIterator);
/**
 @return {number}
 */
goog.dom.RangeIterator.prototype.getStartTextOffset = goog.abstractMethod;
/**
 @return {number}
 */
goog.dom.RangeIterator.prototype.getEndTextOffset = goog.abstractMethod;
/**
 @return {Node}
 */
goog.dom.RangeIterator.prototype.getStartNode = goog.abstractMethod;
/**
 @return {Node}
 */
goog.dom.RangeIterator.prototype.getEndNode = goog.abstractMethod;
/**
 @return {boolean}
 */
goog.dom.RangeIterator.prototype.isLast = goog.abstractMethod;

//# sourceMappingURL=goog.dom.abstractrange.js.map
