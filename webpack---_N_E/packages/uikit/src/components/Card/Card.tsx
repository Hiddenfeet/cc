import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { StyledCard, StyledCardInner } from "./StyledCard";
var Card = function(_param) {
    var ribbon = _param.ribbon, children = _param.children, background = _param.background, props = _object_without_properties(_param, [
        "ribbon",
        "children",
        "background"
    ]);
    return /*#__PURE__*/ _jsx(StyledCard, _object_spread_props(_object_spread({}, props), {
        children: /*#__PURE__*/ _jsxs(StyledCardInner, {
            background: background,
            hasCustomBorder: !!props.borderBackground,
            children: [
                ribbon,
                children
            ]
        })
    }));
};
export default Card;
