import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ",
        "\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import styled from "styled-components";
import { variant as systemVariant, space } from "styled-system";
import { WarningIcon, ErrorIcon, CheckmarkCircleFillIcon } from "../Svg";
import { Text } from "../Text";
import { Box } from "../Box";
import variants from "./theme";
var MessageContext = /*#__PURE__*/ React.createContext({
    variant: "success"
});
var Icons = {
    warning: WarningIcon,
    danger: ErrorIcon,
    success: CheckmarkCircleFillIcon
};
var MessageContainer = styled.div.withConfig({
    componentId: "sc-462695fe-0"
})(_templateObject(), space, systemVariant({
    variants: variants
}));
var Flex = styled.div.withConfig({
    componentId: "sc-462695fe-1"
})(_templateObject1());
var colors = {
    // these color names should be place in the theme once the palette is finalized
    warning: "#D67E0A",
    success: "#129E7D",
    danger: "failure"
};
export var MessageText = function(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    var ctx = useContext(MessageContext);
    return /*#__PURE__*/ _jsx(Text, _object_spread_props(_object_spread({
        fontSize: "14px",
        color: colors[ctx === null || ctx === void 0 ? void 0 : ctx.variant]
    }, props), {
        children: children
    }));
};
var Message = function(_param) {
    var children = _param.children, variant = _param.variant, icon = _param.icon, action = _param.action, actionInline = _param.actionInline, props = _object_without_properties(_param, [
        "children",
        "variant",
        "icon",
        "action",
        "actionInline"
    ]);
    var Icon = Icons[variant];
    return /*#__PURE__*/ _jsx(MessageContext.Provider, {
        value: {
            variant: variant
        },
        children: /*#__PURE__*/ _jsxs(MessageContainer, _object_spread_props(_object_spread({
            variant: variant
        }, props), {
            children: [
                /*#__PURE__*/ _jsxs(Flex, {
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            mr: "12px",
                            children: icon !== null && icon !== void 0 ? icon : /*#__PURE__*/ _jsx(Icon, {
                                color: variants[variant].borderColor,
                                width: "24px"
                            })
                        }),
                        children,
                        actionInline && action
                    ]
                }),
                !actionInline && action
            ]
        }))
    });
};
export default Message;
