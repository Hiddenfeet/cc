/* eslint-disable import/prefer-default-export */ import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n    0% {\n      transform: translateY(20%);\n    }\n    100% {\n      transform: translateY(0%);\n    }\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    0% {\n      transform: translateY(0%);\n    }\n    100% {\n      transform: translateY(20%);\n    }\n  "
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
        "\n  width: 100%;\n  height: 80vh;\n  bottom: 0;\n  background-color: ",
        ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ",
        ' 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*="TokenPocket_iOS"] & {\n    padding-bottom: 45px;\n  }\n  will-change: transform;\n  z-index: 21;\n  ',
        "\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import styled, { keyframes, css } from "styled-components";
export var mountAnimation = keyframes(_templateObject());
export var unmountAnimation = keyframes(_templateObject1());
export var DrawerContainer = styled.div.withConfig({
    componentId: "sc-a4321cba-0"
})(_templateObject3(), function(param) {
    var theme = param.theme;
    return theme.colors.backgroundAlt;
}, mountAnimation, function(param) {
    var isUnmounting = param.isUnmounting;
    return isUnmounting && css(_templateObject2(), unmountAnimation);
});
