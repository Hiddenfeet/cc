import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ",
        ";\n  cursor: pointer;\n  font-weight: ",
        ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:is(button) {\n    cursor: ",
        ";\n  }\n\n  &:hover:not(:disabled) {\n    background-color: ",
        ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  &:first-child > ",
        " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ",
        " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  border-color: ",
        ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border: 1px solid ",
        ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  margin-bottom: 0;\n  width: ",
        ";\n  visibility: visible;\n  z-index: 1001;\n\n  ",
        "\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  border-radius: ",
        ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ",
        ";\n  box-shadow: none;\n  color: ",
        ";\n  margin-left: 8px;\n"
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { Text } from "../Text";
var getTextColor = function(param) {
    var $isActive = param.$isActive, disabled = param.disabled, theme = param.theme;
    if (disabled) return theme.colors.textDisabled;
    if ($isActive) return theme.colors.secondary;
    return theme.colors.textSubtle;
};
export var DropdownMenuItem = styled.button.withConfig({
    componentId: "sc-c11809c1-0"
})(_templateObject(), function(param) {
    var theme = param.theme, disabled = param.disabled, $isActive = param.$isActive;
    return getTextColor({
        theme: theme,
        disabled: disabled,
        $isActive: $isActive
    });
}, function(param) {
    var _$isActive = param.$isActive, $isActive = _$isActive === void 0 ? false : _$isActive;
    return $isActive ? "600" : "400";
}, function(param) {
    var disabled = param.disabled;
    return disabled ? "not-allowed" : "pointer";
}, function(param) {
    var theme = param.theme;
    return theme.colors.tertiary;
});
export var StyledDropdownMenuItemContainer = styled.div.withConfig({
    componentId: "sc-c11809c1-1"
})(_templateObject1(), DropdownMenuItem, DropdownMenuItem);
export var DropdownMenuDivider = styled.hr.withConfig({
    componentId: "sc-c11809c1-2"
})(_templateObject2(), function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
});
export var StyledDropdownMenu = styled.div.withConfig({
    componentId: "sc-c11809c1-3"
})(_templateObject3(), function(param) {
    var theme = param.theme;
    return theme.card.background;
}, function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
}, function(param) {
    var $isBottomNav = param.$isBottomNav;
    return $isBottomNav ? "calc(100% - 32px)" : "280px";
}, function(param) {
    var $isOpen = param.$isOpen;
    return !$isOpen && "\n    pointer-events: none;\n    visibility: hidden;\n  ";
});
export var LinkStatus = styled(Text).withConfig({
    componentId: "sc-c11809c1-4"
})(_templateObject4(), function(param) {
    var theme = param.theme;
    return theme.radii.default;
}, function(param) {
    var theme = param.theme, color = param.color;
    return theme.colors[color];
}, function(param) {
    var theme = param.theme, color = param.color;
    return theme.colors[color];
});
