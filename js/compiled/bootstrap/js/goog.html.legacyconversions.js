goog.provide("goog.html.legacyconversions");
goog.require("goog.html.SafeHtml");
goog.require("goog.html.SafeScript");
goog.require("goog.html.SafeStyle");
goog.require("goog.html.SafeStyleSheet");
goog.require("goog.html.SafeUrl");
goog.require("goog.html.TrustedResourceUrl");
/**
 @param {string} html
 @return {!goog.html.SafeHtml}
 */
goog.html.legacyconversions.safeHtmlFromString = function(html) {
  goog.html.legacyconversions.reportCallback_();
  return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(html, null);
};
/**
 @param {string} script
 @return {!goog.html.SafeScript}
 */
goog.html.legacyconversions.safeScriptFromString = function(script) {
  goog.html.legacyconversions.reportCallback_();
  return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(script);
};
/**
 @param {string} style
 @return {!goog.html.SafeStyle}
 */
goog.html.legacyconversions.safeStyleFromString = function(style) {
  goog.html.legacyconversions.reportCallback_();
  return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(style);
};
/**
 @param {string} styleSheet
 @return {!goog.html.SafeStyleSheet}
 */
goog.html.legacyconversions.safeStyleSheetFromString = function(styleSheet) {
  goog.html.legacyconversions.reportCallback_();
  return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(styleSheet);
};
/**
 @param {string} url
 @return {!goog.html.SafeUrl}
 */
goog.html.legacyconversions.safeUrlFromString = function(url) {
  goog.html.legacyconversions.reportCallback_();
  return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(url);
};
/**
 @param {string} url
 @return {!goog.html.TrustedResourceUrl}
 */
goog.html.legacyconversions.trustedResourceUrlFromString = function(url) {
  goog.html.legacyconversions.reportCallback_();
  return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(url);
};
/** @private @type {function():undefined} */ goog.html.legacyconversions.reportCallback_ = goog.nullFunction;
/**
 @param {function():undefined} callback
 */
goog.html.legacyconversions.setReportCallback = function(callback) {
  goog.html.legacyconversions.reportCallback_ = callback;
};

//# sourceMappingURL=goog.html.legacyconversions.js.map
