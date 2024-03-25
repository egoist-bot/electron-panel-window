const isMac = process.platform === "darwin"
const NativeExtension = isMac
  ? require("bindings")("NativeExtension")
  : undefined

exports.makeKeyWindow = (window) => {
  if (!isMac) return
  return NativeExtension.MakeKeyWindow(window.getNativeWindowHandle())
}

exports.makePanel = (window) => {
  if (!isMac) return
  return NativeExtension.MakePanel(window.getNativeWindowHandle())
}

exports.makeWindow = (window) => {
  if (!isMac) return
  return NativeExtension.MakeWindow(window.getNativeWindowHandle())
}
