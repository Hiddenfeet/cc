import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Link from "./Link";
import OpenNewIcon from "../Svg/Icons/OpenNew";
var LinkExternal = function(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /*#__PURE__*/ _jsxs(Link, _object_spread_props(_object_spread({
        external: true
    }, props), {
        children: [
            children,
            /*#__PURE__*/ _jsx(OpenNewIcon, {
                color: props.color ? props.color : "primary",
                ml: "4px"
            })
        ]
    }));
};
export default LinkExternal;
