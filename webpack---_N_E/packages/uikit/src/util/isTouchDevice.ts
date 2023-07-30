var isTouchDevice = function() {
    return "object" !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
    navigator.msMaxTouchPoints > 0);
};
export default isTouchDevice;
