import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background: ",
        ";\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  ",
        ";\n  ",
        ";\n\n  div:first-child {\n    ",
        ";\n    ",
        ";\n    z-index: 0;\n  }\n  ",
        "\n\n  ",
        "\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled from "styled-components";
export var StyledIconContainer = styled.div.withConfig({
    componentId: "sc-bfd9d551-0"
})(_templateObject(), function(param) {
    var activeBackgroundColor = param.activeBackgroundColor, theme = param.theme;
    return activeBackgroundColor ? theme.colors[activeBackgroundColor] : "transparent";
});
export var StyledAnimatedIconComponent = styled.div.withConfig({
    componentId: "sc-bfd9d551-1"
})(_templateObject1(), function(param) {
    var height = param.height;
    return height && "height: ".concat(height);
}, function(param) {
    var width = param.width;
    return "width: ".concat(width || "100%");
}, function(param) {
    var height = param.height;
    return height && "height: ".concat(height);
}, function(param) {
    var width = param.width;
    return "width: ".concat(width || "100%");
}, function(param) {
    var hasFillIcon = param.hasFillIcon;
    return hasFillIcon && "\n    div, svg {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      overflow:hidden;\n    }\n\n    div:last-child {\n      height: 0;\n      z-index: 5;\n      transition: height 0.25s ease;\n    }\n  ";
}, function(param) {
    var isActive = param.isActive, height = param.height, width = param.width, hasFillIcon = param.hasFillIcon;
    return isActive && "\n    div:last-child {\n      ".concat(height && hasFillIcon && "height:".concat(height), ";\n      ").concat("width: ".concat(width || "100%"), ";\n    }\n  ");
});
