/**
 @suppress {strictMissingProperties}
 */
goog.provide("goog.dom.Range");
goog.require("goog.dom");
goog.require("goog.dom.AbstractRange");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.ControlRange");
goog.require("goog.dom.MultiRange");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.TextRange");
/**
 @param {Window=} opt_win
 @return {?goog.dom.AbstractRange}
 */
goog.dom.Range.createFromWindow = function(opt_win) {
  var sel = goog.dom.AbstractRange.getBrowserSelectionForWindow(opt_win || window);
  return sel && goog.dom.Range.createFromBrowserSelection(sel);
};
/**
 @param {!Object} selection
 @return {?goog.dom.AbstractRange}
 */
goog.dom.Range.createFromBrowserSelection = function(selection) {
  var range;
  var isReversed = false;
  if (selection.createRange) {
    try {
      range = selection.createRange();
    } catch (e) {
      return null;
    }
  } else {
    if (selection.rangeCount) {
      if (selection.rangeCount > 1) {
        return goog.dom.MultiRange.createFromBrowserSelection(/** @type {!Selection} */ (selection));
      } else {
        range = selection.getRangeAt(0);
        isReversed = goog.dom.Range.isReversed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
      }
    } else {
      return null;
    }
  }
  return goog.dom.Range.createFromBrowserRange(range, isReversed);
};
/**
 @param {(Range|TextRange)} range
 @param {boolean=} opt_isReversed
 @return {!goog.dom.AbstractRange}
 */
goog.dom.Range.createFromBrowserRange = function(range, opt_isReversed) {
  return goog.dom.AbstractRange.isNativeControlRange(range) ? goog.dom.ControlRange.createFromBrowserRange(range) : goog.dom.TextRange.createFromBrowserRange(range, opt_isReversed);
};
/**
 @param {Node} node
 @param {boolean=} opt_isReversed
 @return {!goog.dom.AbstractRange}
 */
goog.dom.Range.createFromNodeContents = function(node, opt_isReversed) {
  return goog.dom.TextRange.createFromNodeContents(node, opt_isReversed);
};
/**
 @param {Node} node
 @param {number} offset
 @return {!goog.dom.AbstractRange}
 */
goog.dom.Range.createCaret = function(node, offset) {
  return goog.dom.TextRange.createFromNodes(node, offset, node, offset);
};
/**
 @param {Node} anchorNode
 @param {number} anchorOffset
 @param {Node} focusNode
 @param {number} focusOffset
 @return {!goog.dom.AbstractRange}
 */
goog.dom.Range.createFromNodes = function(anchorNode, anchorOffset, focusNode, focusOffset) {
  return goog.dom.TextRange.createFromNodes(anchorNode, anchorOffset, focusNode, focusOffset);
};
/**
 @param {Window=} opt_win
 */
goog.dom.Range.clearSelection = function(opt_win) {
  var sel = goog.dom.AbstractRange.getBrowserSelectionForWindow(opt_win || window);
  if (!sel) {
    return;
  }
  if (sel.empty) {
    try {
      sel.empty();
    } catch (e) {
    }
  } else {
    try {
      sel.removeAllRanges();
    } catch (e$5) {
    }
  }
};
/**
 @param {Window=} opt_win
 @return {boolean}
 */
goog.dom.Range.hasSelection = function(opt_win) {
  var sel = goog.dom.AbstractRange.getBrowserSelectionForWindow(opt_win || window);
  return !!sel && (goog.dom.BrowserFeature.LEGACY_IE_RANGES ? sel.type != "None" : !!sel.rangeCount);
};
/**
 @param {Node} anchorNode
 @param {number} anchorOffset
 @param {Node} focusNode
 @param {number} focusOffset
 @return {boolean}
 */
goog.dom.Range.isReversed = function(anchorNode, anchorOffset, focusNode, focusOffset) {
  if (anchorNode == focusNode) {
    return focusOffset < anchorOffset;
  }
  var child;
  if (anchorNode.nodeType == goog.dom.NodeType.ELEMENT && anchorOffset) {
    child = anchorNode.childNodes[anchorOffset];
    if (child) {
      anchorNode = child;
      anchorOffset = 0;
    } else {
      if (goog.dom.contains(anchorNode, focusNode)) {
        return true;
      }
    }
  }
  if (focusNode.nodeType == goog.dom.NodeType.ELEMENT && focusOffset) {
    child = focusNode.childNodes[focusOffset];
    if (child) {
      focusNode = child;
      focusOffset = 0;
    } else {
      if (goog.dom.contains(focusNode, anchorNode)) {
        return false;
      }
    }
  }
  return (goog.dom.compareNodeOrder(anchorNode, focusNode) || anchorOffset - focusOffset) > 0;
};

//# sourceMappingURL=goog.dom.range.js.map
