goog.provide("goog.dom.browserrange.AbstractRange");
goog.require("goog.array");
goog.require("goog.asserts");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.RangeEndpoint");
goog.require("goog.dom.TagName");
goog.require("goog.dom.TextRangeIterator");
goog.require("goog.iter");
goog.require("goog.math.Coordinate");
goog.require("goog.string");
goog.require("goog.string.StringBuffer");
goog.require("goog.userAgent");
/** @constructor */ goog.dom.browserrange.AbstractRange = function() {
};
/**
 @return {goog.dom.browserrange.AbstractRange}
 */
goog.dom.browserrange.AbstractRange.prototype.clone = goog.abstractMethod;
/**
 @return {(Range|TextRange)}
 */
goog.dom.browserrange.AbstractRange.prototype.getBrowserRange = goog.abstractMethod;
/**
 @return {Node}
 */
goog.dom.browserrange.AbstractRange.prototype.getContainer = goog.abstractMethod;
/**
 @return {Node}
 */
goog.dom.browserrange.AbstractRange.prototype.getStartNode = goog.abstractMethod;
/**
 @return {number}
 */
goog.dom.browserrange.AbstractRange.prototype.getStartOffset = goog.abstractMethod;
/**
 @return {goog.math.Coordinate}
 */
goog.dom.browserrange.AbstractRange.prototype.getStartPosition = function() {
  return this.getPosition_(true);
};
/**
 @return {Node}
 */
goog.dom.browserrange.AbstractRange.prototype.getEndNode = goog.abstractMethod;
/**
 @return {number}
 */
goog.dom.browserrange.AbstractRange.prototype.getEndOffset = goog.abstractMethod;
/**
 @return {goog.math.Coordinate}
 */
goog.dom.browserrange.AbstractRange.prototype.getEndPosition = function() {
  return this.getPosition_(false);
};
/**
 @private
 @param {boolean} start
 @return {goog.math.Coordinate}
 */
goog.dom.browserrange.AbstractRange.prototype.getPosition_ = function(start) {
  goog.asserts.assert(this.range_.getClientRects, "Getting selection coordinates is not supported.");
  var rects = this.range_.getClientRects();
  if (rects.length) {
    var r = start ? rects[0] : goog.array.peek(rects);
    return new goog.math.Coordinate(start ? r.left : r.right, start ? r.top : r.bottom);
  }
  return null;
};
/**
 @param {(Range|TextRange)} range
 @param {goog.dom.RangeEndpoint} thisEndpoint
 @param {goog.dom.RangeEndpoint} otherEndpoint
 @return {number}
 */
goog.dom.browserrange.AbstractRange.prototype.compareBrowserRangeEndpoints = goog.abstractMethod;
/**
 @param {goog.dom.browserrange.AbstractRange} abstractRange
 @param {boolean=} opt_allowPartial
 @return {boolean}
 */
goog.dom.browserrange.AbstractRange.prototype.containsRange = function(abstractRange, opt_allowPartial) {
  var checkPartial = opt_allowPartial && !abstractRange.isCollapsed();
  var range = abstractRange.getBrowserRange();
  var start = goog.dom.RangeEndpoint.START, end = goog.dom.RangeEndpoint.END;
  try {
    if (checkPartial) {
      return this.compareBrowserRangeEndpoints(range, end, start) >= 0 && this.compareBrowserRangeEndpoints(range, start, end) <= 0;
    } else {
      return this.compareBrowserRangeEndpoints(range, end, end) >= 0 && this.compareBrowserRangeEndpoints(range, start, start) <= 0;
    }
  } catch (e) {
    if (!goog.userAgent.IE) {
      throw e;
    }
    return false;
  }
};
/**
 @param {Node} node
 @param {boolean=} opt_allowPartial
 @return {boolean}
 @suppress {missingRequire}
 */
goog.dom.browserrange.AbstractRange.prototype.containsNode = function(node, opt_allowPartial) {
  /**
   @suppress {missingRequire}
   */
  return this.containsRange(goog.dom.browserrange.createRangeFromNodeContents(node), opt_allowPartial);
};
/**
 @return {boolean}
 */
goog.dom.browserrange.AbstractRange.prototype.isCollapsed = goog.abstractMethod;
/**
 @return {string}
 */
goog.dom.browserrange.AbstractRange.prototype.getText = goog.abstractMethod;
/**
 @return {string}
 */
goog.dom.browserrange.AbstractRange.prototype.getHtmlFragment = function() {
  var output = new goog.string.StringBuffer;
  goog.iter.forEach(this, function(node, ignore, it) {
    if (node.nodeType == goog.dom.NodeType.TEXT) {
      output.append(goog.string.htmlEscape(node.nodeValue.substring(it.getStartTextOffset(), it.getEndTextOffset())));
    } else {
      if (node.nodeType == goog.dom.NodeType.ELEMENT) {
        if (it.isEndTag()) {
          if (goog.dom.canHaveChildren(node)) {
            output.append("\x3c/" + node.tagName + "\x3e");
          }
        } else {
          var shallow = node.cloneNode(false);
          var html = goog.dom.getOuterHtml(shallow);
          if (goog.userAgent.IE && node.tagName == goog.dom.TagName.LI) {
            output.append(html);
          } else {
            var index = html.lastIndexOf("\x3c");
            output.append(index ? html.substr(0, index) : html);
          }
        }
      }
    }
  }, this);
  return output.toString();
};
/**
 @return {string}
 */
goog.dom.browserrange.AbstractRange.prototype.getValidHtml = goog.abstractMethod;
/**
 @param {boolean=} opt_keys
 @return {!goog.dom.RangeIterator}
 */
goog.dom.browserrange.AbstractRange.prototype.__iterator__ = function(opt_keys) {
  return new goog.dom.TextRangeIterator(this.getStartNode(), this.getStartOffset(), this.getEndNode(), this.getEndOffset());
};
/**
 @param {boolean=} opt_reverse
 */
goog.dom.browserrange.AbstractRange.prototype.select = goog.abstractMethod;
goog.dom.browserrange.AbstractRange.prototype.removeContents = goog.abstractMethod;
/**
 @param {Element} element
 @return {Element}
 */
goog.dom.browserrange.AbstractRange.prototype.surroundContents = goog.abstractMethod;
/**
 @param {Node} node
 @param {boolean} before
 @return {Node}
 */
goog.dom.browserrange.AbstractRange.prototype.insertNode = goog.abstractMethod;
/**
 @param {Element} startNode
 @param {Element} endNode
 */
goog.dom.browserrange.AbstractRange.prototype.surroundWithNodes = goog.abstractMethod;
/**
 @param {boolean} toStart
 */
goog.dom.browserrange.AbstractRange.prototype.collapse = goog.abstractMethod;

//# sourceMappingURL=goog.dom.browserrange.abstractrange.js.map
