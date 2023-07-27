import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { Flex } from "../Box";
import StyledToggle, { Input, Handle } from "./StyledToggle";
import { scales } from "./types";
var Toggle = function(_param) {
    var checked = _param.checked, _defaultColor = _param.defaultColor, defaultColor = _defaultColor === void 0 ? "input" : _defaultColor, _checkedColor = _param.checkedColor, checkedColor = _checkedColor === void 0 ? "success" : _checkedColor, _scale = _param.scale, scale = _scale === void 0 ? scales.LG : _scale, startIcon = _param.startIcon, endIcon = _param.endIcon, props = _object_without_properties(_param, [
        "checked",
        "defaultColor",
        "checkedColor",
        "scale",
        "startIcon",
        "endIcon"
    ]);
    var isChecked = !!checked;
    return /*#__PURE__*/ _jsxs(StyledToggle, {
        $checked: isChecked,
        $checkedColor: checkedColor,
        $defaultColor: defaultColor,
        scale: scale,
        children: [
            /*#__PURE__*/ _jsx(Input, _object_spread_props(_object_spread({
                checked: checked,
                scale: scale
            }, props), {
                type: "checkbox"
            })),
            startIcon && endIcon ? /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsx(Handle, {
                        scale: scale,
                        children: /*#__PURE__*/ _jsx(Flex, {
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            children: checked ? endIcon(checked) : startIcon(!checked)
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Flex, {
                        width: "100%",
                        height: "100%",
                        justifyContent: "space-around",
                        alignItems: "center",
                        children: [
                            startIcon(),
                            endIcon()
                        ]
                    })
                ]
            }) : /*#__PURE__*/ _jsx(Handle, {
                scale: scale
            })
        ]
    });
};
export default Toggle;
