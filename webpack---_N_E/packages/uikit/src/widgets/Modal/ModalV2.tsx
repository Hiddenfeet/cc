import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ",
        ";\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from "framer-motion";
import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Overlay } from "../../components/Overlay";
import getPortalRoot from "../../util/getPortalRoot";
var ModalWrapper = styled(m.div).withConfig({
    componentId: "sc-51dfa186-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.zIndices.modal - 1;
});
export function ModalV2(param) {
    var isOpen = param.isOpen, onDismiss = param.onDismiss, closeOnOverlayClick = param.closeOnOverlayClick, children = param.children;
    var handleOverlayDismiss = function() {
        if (closeOnOverlayClick) {
            onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
        }
    };
    var portal = getPortalRoot();
    if (portal) {
        return /*#__PURE__*/ createPortal(isOpen && /*#__PURE__*/ _jsxs(ModalWrapper, {
            children: [
                /*#__PURE__*/ _jsx(Overlay, {
                    onClick: handleOverlayDismiss
                }),
                children
            ]
        }), portal);
    }
    return null;
}
