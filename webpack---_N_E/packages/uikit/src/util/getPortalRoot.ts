// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var ref;
var getPortalRoot = function() {
    return "object" !== "undefined" && ((ref = document.getElementById("portal-root")) !== null && ref !== void 0 ? ref : document.body);
};
export default getPortalRoot;
