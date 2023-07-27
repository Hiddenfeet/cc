import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n\n  ",
        ";\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ",
        ";\n  font-size: 16px;\n  font-weight: ",
        ";\n  opacity: ",
        ";\n\n  ",
        "\n\n  ",
        "\n\n  &:hover {\n    background: ",
        ";\n    ",
        ";\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled from "styled-components";
export var StyledMenuItemContainer = styled.div.withConfig({
    componentId: "sc-ae81c2e-0"
})(_templateObject(), function(param) {
    var $isActive = param.$isActive, $variant = param.$variant, theme = param.theme;
    return $isActive && $variant === "subMenu" && '\n      &:after{\n        content: "";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        background-color: '.concat(theme.colors.primary, ";\n        border-radius: 2px 2px 0 0;\n      }\n    ");
});
var StyledMenuItem = styled.a.withConfig({
    componentId: "sc-ae81c2e-1"
})(_templateObject1(), function(param) {
    var theme = param.theme, $isActive = param.$isActive;
    return $isActive ? theme.colors.secondary : theme.colors.textSubtle;
}, function(param) {
    var $isActive = param.$isActive;
    return $isActive ? "600" : "400";
}, function(param) {
    var $isDisabled = param.$isDisabled;
    return $isDisabled ? 0.5 : 1;
}, function(param) {
    var $statusColor = param.$statusColor, theme = param.theme;
    return $statusColor && '\n    &:after {\n      content: "";\n      border-radius: 100%;\n      background: '.concat(theme.colors[$statusColor], ";\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n  ");
}, function(param) {
    var $variant = param.$variant;
    return $variant === "default" ? "\n    padding: 0 16px;\n    height: 48px;\n  " : "\n    padding: 4px 4px 0px 4px;\n    height: 42px;\n  ";
}, function(param) {
    var theme = param.theme;
    return theme.colors.tertiary;
}, function(param) {
    var $variant = param.$variant;
    return $variant === "default" && "border-radius: 16px;";
});
export default StyledMenuItem;
