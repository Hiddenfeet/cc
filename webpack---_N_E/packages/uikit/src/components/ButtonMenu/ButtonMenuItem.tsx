import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background-color: transparent;\n  color: ",
        ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { variants } from "../Button/types";
var InactiveButton = styled(Button).withConfig({
    componentId: "sc-baf98d6e-0"
})(_templateObject(), function(param) {
    var theme = param.theme, variant = param.variant;
    return variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle;
});
var ButtonMenuItem = function(_param) {
    var _isActive = _param.isActive, isActive = _isActive === void 0 ? false : _isActive, _variant = _param.variant, variant = _variant === void 0 ? variants.PRIMARY : _variant, as = _param.as, props = _object_without_properties(_param, [
        "isActive",
        "variant",
        "as"
    ]);
    if (!isActive) {
        return /*#__PURE__*/ _jsx(InactiveButton, _object_spread({
            forwardedAs: as,
            variant: variant
        }, props));
    }
    return /*#__PURE__*/ _jsx(Button, _object_spread({
        as: as,
        variant: variant
    }, props));
};
export default ButtonMenuItem;
