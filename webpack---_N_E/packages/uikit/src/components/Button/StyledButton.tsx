import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        '\n      &::before {\n        content: "',
        '";\n        position: absolute;\n        border-bottom: 20px solid ',
        ";\n        border-left: 34px solid transparent;\n        border-right: 12px solid transparent;\n        height: 0;\n        top: -1px;\n        right: -12px;\n        width: 75px;\n        text-align: center;\n        padding-right: 30px;\n        line-height: 20px;\n        font-size: 12px;\n        font-weight: 400;\n        transform: rotate(31.17deg);\n        color: ",
        ";\n      }\n    "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ",
        ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled, { css } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
var getDisabledStyles = function(param) {
    var $isLoading = param.$isLoading, theme = param.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: ".concat(theme.colors.backgroundDisabled, ";\n      border-color: ").concat(theme.colors.backgroundDisabled, ";\n      box-shadow: none;\n      color: ").concat(theme.colors.textDisabled, ";\n      cursor: not-allowed;\n    }\n  ");
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */ var getOpacity = function(param) {
    var _$isLoading = param.$isLoading, $isLoading = _$isLoading === void 0 ? false : _$isLoading;
    return $isLoading ? ".5" : "1";
};
var _backgroundColor, _color;
var StyledButton = styled.button.withConfig({
    componentId: "sc-a8cf5f33-0"
})(_templateObject1(), getOpacity, getDisabledStyles, variant({
    prop: "scale",
    variants: scaleVariants
}), variant({
    variants: styleVariants
}), layout, space, function(param) {
    var decorator = param.decorator, theme = param.theme;
    return decorator && css(_templateObject(), decorator.text, (_backgroundColor = decorator.backgroundColor) !== null && _backgroundColor !== void 0 ? _backgroundColor : theme.colors.secondary, (_color = decorator.color) !== null && _color !== void 0 ? _color : "white");
});
export default StyledButton;
