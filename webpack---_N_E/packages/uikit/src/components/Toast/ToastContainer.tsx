import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { Toast } from "./Toast";
var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div.withConfig({
    componentId: "sc-2711bd7c-0"
})(_templateObject());
export var ToastContainer = function(param) {
    var toasts = param.toasts, onRemove = param.onRemove, _ttl = param.ttl, ttl = _ttl === void 0 ? 6000 : _ttl, _stackSpacing = param.stackSpacing, stackSpacing = _stackSpacing === void 0 ? 24 : _stackSpacing;
    return /*#__PURE__*/ _jsx(StyledToastContainer, {
        children: /*#__PURE__*/ _jsx(TransitionGroup, {
            children: toasts.map(function(toast, index) {
                var zIndex = (ZINDEX - index).toString();
                var top = TOP_POSITION + index * stackSpacing;
                return /*#__PURE__*/ _jsx(Toast, {
                    toast: toast,
                    onRemove: onRemove,
                    ttl: ttl,
                    style: {
                        top: "".concat(top, "px"),
                        zIndex: zIndex
                    }
                }, toast.id);
            })
        })
    });
};
