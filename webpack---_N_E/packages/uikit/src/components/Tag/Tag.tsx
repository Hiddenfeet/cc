import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { scales } from "./types";
import { StyledTag } from "./StyledTag";
var Tag = function(_param) /*#__PURE__*/ {
    var startIcon = _param.startIcon, endIcon = _param.endIcon, children = _param.children, props = _object_without_properties(_param, [
        "startIcon",
        "endIcon",
        "children"
    ]);
    return _jsxs(StyledTag, _object_spread_props(_object_spread({}, props), {
        children: [
            /*#__PURE__*/ React.isValidElement(startIcon) && /*#__PURE__*/ React.cloneElement(startIcon, {
                mr: "0.5em"
            }),
            children,
            /*#__PURE__*/ React.isValidElement(endIcon) && /*#__PURE__*/ React.cloneElement(endIcon, {
                ml: "0.5em"
            })
        ]
    }));
};
/* eslint-disable react/default-props-match-prop-types */ Tag.defaultProps = {
    variant: "primary",
    scale: scales.MD,
    outline: false
};
export default Tag;
