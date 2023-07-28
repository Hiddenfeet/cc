import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    0% {\n     opacity: 0;\n    }\n    100% {\n     opacity: 1;\n    }\n  "
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      animation: ",
        " 350ms ease forwards;\n    "
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ",
        ";\n  z-index: 20;\n  will-change: opacity;\n  animation: ",
        " 350ms ease forwards;\n  ",
        "\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import { Box } from "../Box";
var unmountAnimation = keyframes(_templateObject());
var mountAnimation = keyframes(_templateObject1());
var StyledOverlay = styled(Box).withConfig({
    componentId: "sc-de82043-0"
})(_templateObject3(), function(param) {
    var theme = param.theme;
    return "".concat(theme.colors.text99);
}, mountAnimation, function(param) {
    var isUnmounting = param.isUnmounting;
    return isUnmounting && css(_templateObject2(), unmountAnimation);
});
var BodyLock = function() {
    useEffect(function() {
        document.body.style.cssText = "\n      overflow: hidden;\n    ";
        document.body.style.overflow = "hidden";
        return function() {
            document.body.style.cssText = "\n        overflow: visible;\n        overflow: overlay;\n      ";
        };
    }, []);
    return null;
};
export var Overlay = function(props) {
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(BodyLock, {}),
            /*#__PURE__*/ _jsx(StyledOverlay, _object_spread({
                role: "presentation"
            }, props))
        ]
    });
};
export default Overlay;
