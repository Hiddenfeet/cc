import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  border-color: ",
        ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ",
        ";\n  cursor: pointer;\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:is(button) {\n    cursor: ",
        ";\n  }\n\n  &:hover:not(:disabled) {\n    background-color: ",
        ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled from "styled-components";
export var UserMenuDivider = styled.hr.withConfig({
    componentId: "sc-41c17261-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
});
export var UserMenuItem = styled.button.withConfig({
    componentId: "sc-41c17261-1"
})(_templateObject1(), function(param) {
    var theme = param.theme, disabled = param.disabled;
    return theme.colors[disabled ? "textDisabled" : "textSubtle"];
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed" : "pointer";
}, function(param) {
    var theme = param.theme;
    return theme.colors.tertiary;
});
