import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n	0% {\n		transform: translatey(0px);\n	}\n	50% {\n		transform: translatey(10px);\n	}\n	100% {\n		transform: translatey(0px);\n	}\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  animation: ",
        " 5s linear infinite;\n  transform: translate3d(0, 0, 0);\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled, { keyframes } from "styled-components";
var rotate = keyframes(_templateObject());
var float = keyframes(_templateObject1());
var Container = styled.div.withConfig({
    componentId: "sc-d2c5c7fa-0"
})(_templateObject2());
// const RotatingPancakeIcon = styled("img")`
//   position: absolute;
//   top: 30px;
//   left: 35px;
//   animation: ${float} 6s ease-in-out infinite;
//   transform: translate3d(0, 0, 0);
// `;
var FloatingPanIcon = styled("img").withConfig({
    componentId: "sc-d2c5c7fa-1"
})(_templateObject3(), rotate);
var Spinner = function(param) {
    var _size = param.size, size = _size === void 0 ? 128 : _size;
    return /*#__PURE__*/ _jsx(Container, {
        children: /*#__PURE__*/ _jsx(FloatingPanIcon, {
            src: "/images/trollcoin6.png",
            width: "".concat(size, "px")
        })
    });
};
export default Spinner;
