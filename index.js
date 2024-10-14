var isMac = process.platform === "darwin"
var NativeExtension = isMac ? require("bindings")("NativeExtension") : undefined

exports.makeKeyWindow = function (window) {
  if (!isMac) return
  return NativeExtension.MakeKeyWindow(window.getNativeWindowHandle())
}

exports.makePanel = function (window) {
  if (!isMac) return
  return NativeExtension.MakePanel(window.getNativeWindowHandle())
}

exports.makeWindow = function (window) {
  if (!isMac) return
  return NativeExtension.MakeWindow(window.getNativeWindowHandle())
}
