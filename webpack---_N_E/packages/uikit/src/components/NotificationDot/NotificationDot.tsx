import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: inline-flex;\n  position: relative;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  display: ",
        ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ",
        ";\n  border-radius: 50%;\n  background-color: ",
        ";\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { cloneElement, Children } from "react";
import styled from "styled-components";
var NotificationDotRoot = styled.span.withConfig({
    componentId: "sc-a93f15de-0"
})(_templateObject());
var Dot = styled.span.withConfig({
    componentId: "sc-a93f15de-1"
})(_templateObject1(), function(param) {
    var show = param.show;
    return show ? "inline-flex" : "none";
}, function(param) {
    var theme = param.theme;
    return theme.colors.invertedContrast;
}, function(param) {
    var theme = param.theme, color = param.color;
    return theme.colors[color];
});
var NotificationDot = function(_param) /*#__PURE__*/ {
    var _show = _param.show, show = _show === void 0 ? false : _show, _color = _param.color, color = _color === void 0 ? "failure" : _color, children = _param.children, props = _object_without_properties(_param, [
        "show",
        "color",
        "children"
    ]);
    return _jsxs(NotificationDotRoot, {
        children: [
            Children.map(children, function(child) {
                return /*#__PURE__*/ cloneElement(child, props);
            }),
            /*#__PURE__*/ _jsx(Dot, {
                show: show,
                color: color
            })
        ]
    });
};
export default NotificationDot;
