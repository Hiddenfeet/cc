import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { cloneElement, isValidElement } from "react";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import StyledButton from "./StyledButton";
import { scales, variants } from "./types";
var Button = function(props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = _object_without_properties(props, [
        "startIcon",
        "endIcon",
        "external",
        "className",
        "isLoading",
        "disabled",
        "children"
    ]);
    var internalProps = external ? EXTERNAL_LINK_PROPS : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [
        className
    ] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return /*#__PURE__*/ _jsx(StyledButton, _object_spread_props(_object_spread({
        $isLoading: isLoading,
        className: classNames.join(" "),
        disabled: isDisabled
    }, internalProps, rest), {
        children: /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                /*#__PURE__*/ isValidElement(startIcon) && /*#__PURE__*/ cloneElement(startIcon, {
                    mr: "0.5rem"
                }),
                children,
                /*#__PURE__*/ isValidElement(endIcon) && /*#__PURE__*/ cloneElement(endIcon, {
                    ml: "0.5rem"
                })
            ]
        })
    }));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants.PRIMARY,
    scale: scales.MD,
    disabled: false
};
export default Button;
