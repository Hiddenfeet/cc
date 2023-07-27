import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border-radius: 16px;\n  display: ",
        ";\n  border: 1px solid ",
        ";\n  width: ",
        ";\n\n  & > button,\n  & > a {\n    flex: ",
        ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ",
        "\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React, { cloneElement, Children } from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
var getBackgroundColor = function(param) {
    var theme = param.theme, variant = param.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var getBorderColor = function(param) {
    var theme = param.theme, variant = param.variant;
    return theme.colors[variant === variants.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled.div.withConfig({
    componentId: "sc-15e0dcc-0"
})(_templateObject(), getBackgroundColor, function(param) {
    var fullWidth = param.fullWidth;
    return fullWidth ? "flex" : "inline-flex";
}, getBorderColor, function(param) {
    var fullWidth = param.fullWidth;
    return fullWidth ? "100%" : "auto";
}, function(param) {
    var fullWidth = param.fullWidth;
    return fullWidth ? 1 : "auto";
}, function(param) {
    var disabled = param.disabled, theme = param.theme, variant = param.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle, ";\n        }\n    ");
    }
    return "";
}, space);
var ButtonMenu = function(_param) {
    var _activeIndex = _param.activeIndex, activeIndex = _activeIndex === void 0 ? 0 : _activeIndex, _scale = _param.scale, scale = _scale === void 0 ? scales.MD : _scale, _variant = _param.variant, variant = _variant === void 0 ? variants.PRIMARY : _variant, onItemClick = _param.onItemClick, disabled = _param.disabled, children = _param.children, _fullWidth = _param.fullWidth, fullWidth = _fullWidth === void 0 ? false : _fullWidth, props = _object_without_properties(_param, [
        "activeIndex",
        "scale",
        "variant",
        "onItemClick",
        "disabled",
        "children",
        "fullWidth"
    ]);
    return /*#__PURE__*/ _jsx(StyledButtonMenu, _object_spread_props(_object_spread({
        disabled: disabled,
        variant: variant,
        fullWidth: fullWidth
    }, props), {
        children: Children.map(children, function(child, index) {
            return /*#__PURE__*/ cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? function() {
                    return onItemClick(index);
                } : undefined,
                scale: scale,
                variant: variant,
                disabled: disabled
            });
        })
    }));
};
export default ButtonMenu;
