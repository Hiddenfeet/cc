import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Svg from "../Svg";
var Icon = function(props) {
    return /*#__PURE__*/ _jsxs(Svg, _object_spread_props(_object_spread({
        viewBox: "0 0 600 600"
    }, props), {
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "white"
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M115 191.731L300 85L485 191.731V405.192L300 511.923L115 405.192V191.731ZM226.964 177.278H372.665L390.09 251.396H209.91L226.964 177.278ZM264.037 350.715L268.857 304.391L252.915 262.885H347.083L331.512 304.391L335.961 350.715H299.628H264.037ZM373.036 428.54H346.713L315.2 399.634V384.81L347.825 353.68V304.391L390.461 276.597L439.028 313.285L373.036 428.54ZM254.028 428.91L285.541 399.633V384.81L252.916 353.68V304.391L209.91 276.967L160.972 313.285L227.334 428.91H254.028Z",
                fill: "#03316C"
            })
        ]
    }));
};
export default Icon;
