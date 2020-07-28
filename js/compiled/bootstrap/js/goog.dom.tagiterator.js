goog.provide("goog.dom.TagIterator");
goog.provide("goog.dom.TagWalkType");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.StopIteration");
/** @enum {number} */ goog.dom.TagWalkType = {START_TAG:1, OTHER:0, END_TAG:-1};
/**
 @constructor
 @extends {goog.iter.Iterator<Node>}
 @param {Node=} opt_node
 @param {boolean=} opt_reversed
 @param {boolean=} opt_unconstrained
 @param {?goog.dom.TagWalkType=} opt_tagType
 @param {number=} opt_depth
 */
goog.dom.TagIterator = function(opt_node, opt_reversed, opt_unconstrained, opt_tagType, opt_depth) {
  /** @type {boolean} */ this.reversed = !!opt_reversed;
  /** @type {?Node} */ this.node = null;
  /** @type {goog.dom.TagWalkType} */ this.tagType = goog.dom.TagWalkType.OTHER;
  /** @type {number} */ this.depth;
  /** @private @type {boolean} */ this.started_ = false;
  /** @type {boolean} */ this.constrained = !opt_unconstrained;
  if (opt_node) {
    this.setPosition(opt_node, opt_tagType);
  }
  this.depth = opt_depth != undefined ? opt_depth : this.tagType || 0;
  if (this.reversed) {
    this.depth *= -1;
  }
};
goog.inherits(goog.dom.TagIterator, goog.iter.Iterator);
/**
 @param {Node} node
 @param {?goog.dom.TagWalkType=} opt_tagType
 @param {number=} opt_depth
 */
goog.dom.TagIterator.prototype.setPosition = function(node, opt_tagType, opt_depth) {
  this.node = node;
  if (node) {
    if (goog.isNumber(opt_tagType)) {
      this.tagType = opt_tagType;
    } else {
      this.tagType = this.node.nodeType != goog.dom.NodeType.ELEMENT ? goog.dom.TagWalkType.OTHER : this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
    }
  }
  if (goog.isNumber(opt_depth)) {
    this.depth = opt_depth;
  }
};
/**
 @protected
 @param {goog.dom.TagIterator} other
 */
goog.dom.TagIterator.prototype.copyFrom = function(other) {
  this.node = other.node;
  this.tagType = other.tagType;
  this.depth = other.depth;
  this.reversed = other.reversed;
  this.constrained = other.constrained;
};
/**
 @return {!goog.dom.TagIterator}
 */
goog.dom.TagIterator.prototype.clone = function() {
  return new goog.dom.TagIterator(this.node, this.reversed, !this.constrained, this.tagType, this.depth);
};
goog.dom.TagIterator.prototype.skipTag = function() {
  var check = this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
  if (this.tagType == check) {
    this.tagType = /** @type {goog.dom.TagWalkType} */ (check * -1);
    this.depth += this.tagType * (this.reversed ? -1 : 1);
  }
};
goog.dom.TagIterator.prototype.restartTag = function() {
  var check = this.reversed ? goog.dom.TagWalkType.START_TAG : goog.dom.TagWalkType.END_TAG;
  if (this.tagType == check) {
    this.tagType = /** @type {goog.dom.TagWalkType} */ (check * -1);
    this.depth += this.tagType * (this.reversed ? -1 : 1);
  }
};
/**
 @return {Node}
 @override
 */
goog.dom.TagIterator.prototype.next = function() {
  var node;
  if (this.started_) {
    if (!this.node || this.constrained && this.depth == 0) {
      throw goog.iter.StopIteration;
    }
    node = this.node;
    var startType = this.reversed ? goog.dom.TagWalkType.END_TAG : goog.dom.TagWalkType.START_TAG;
    if (this.tagType == startType) {
      var child = this.reversed ? node.lastChild : node.firstChild;
      if (child) {
        this.setPosition(child);
      } else {
        this.setPosition(node, /** @type {goog.dom.TagWalkType} */ (startType * -1));
      }
    } else {
      var sibling = this.reversed ? node.previousSibling : node.nextSibling;
      if (sibling) {
        this.setPosition(sibling);
      } else {
        this.setPosition(node.parentNode, /** @type {goog.dom.TagWalkType} */ (startType * -1));
      }
    }
    this.depth += this.tagType * (this.reversed ? -1 : 1);
  } else {
    this.started_ = true;
  }
  node = this.node;
  if (!this.node) {
    throw goog.iter.StopIteration;
  }
  return node;
};
/**
 @protected
 @return {boolean}
 */
goog.dom.TagIterator.prototype.isStarted = function() {
  return this.started_;
};
/**
 @return {boolean}
 */
goog.dom.TagIterator.prototype.isStartTag = function() {
  return this.tagType == goog.dom.TagWalkType.START_TAG;
};
/**
 @return {boolean}
 */
goog.dom.TagIterator.prototype.isEndTag = function() {
  return this.tagType == goog.dom.TagWalkType.END_TAG;
};
/**
 @return {boolean}
 */
goog.dom.TagIterator.prototype.isNonElement = function() {
  return this.tagType == goog.dom.TagWalkType.OTHER;
};
/**
 @param {goog.dom.TagIterator} other
 @return {boolean}
 */
goog.dom.TagIterator.prototype.equals = function(other) {
  return other.node == this.node && (!this.node || other.tagType == this.tagType);
};
/**
 @param {...Object} var_args
 */
goog.dom.TagIterator.prototype.splice = function(var_args) {
  var node = this.node;
  this.restartTag();
  this.reversed = !this.reversed;
  goog.dom.TagIterator.prototype.next.call(this);
  this.reversed = !this.reversed;
  var arr = goog.isArrayLike(arguments[0]) ? arguments[0] : arguments;
  for (var i = arr.length - 1; i >= 0; i--) {
    goog.dom.insertSiblingAfter(arr[i], node);
  }
  goog.dom.removeNode(node);
};

//# sourceMappingURL=goog.dom.tagiterator.js.map
