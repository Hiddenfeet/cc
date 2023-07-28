import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  background: transparent;\n  border-bottom: 1px solid ",
        ";\n  display: flex;\n  padding: 12px 24px;\n\n  ",
        " {\n    background: ",
        ";\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  flex: 1;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  flex-direction: column;\n  overflow-y: auto;\n  max-height: calc(90vh - ",
        "px);\n  ",
        " {\n    display: flex;\n    max-height: 90vh;\n  }\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  overflow: hidden;\n  background: ",
        ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ",
        ";\n  border-radius: 32px 32px 0px 0px;\n  width: 100%;\n  max-height: calc(var(--vh, 1vh) * 100);\n  z-index: ",
        ";\n  position: absolute;\n  min-width: ",
        ";\n  bottom: 0;\n  max-width: none !important;\n  min-height: 300px;\n\n  ",
        " {\n    width: auto;\n    position: auto;\n    bottom: auto;\n    border-radius: 32px;\n    max-width: 100%;\n    max-height: 100vh;\n  }\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { MotionBox } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
export var mobileFooterHeight = 73;
export var ModalHeader = styled.div.withConfig({
    componentId: "sc-e5f1f8e0-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
}, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
}, function(param) {
    var background = param.background;
    return background || "transparent";
});
export var ModalTitle = styled(Flex).withConfig({
    componentId: "sc-e5f1f8e0-1"
})(_templateObject1());
export var ModalBody = styled(Flex).withConfig({
    componentId: "sc-e5f1f8e0-2"
})(_templateObject2(), mobileFooterHeight, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
});
export var ModalCloseButton = function(param) {
    var onDismiss = param.onDismiss;
    return /*#__PURE__*/ _jsx(IconButton, {
        variant: "text",
        onClick: onDismiss,
        "aria-label": "Close the dialog",
        children: /*#__PURE__*/ _jsx(CloseIcon, {
            color: "primary"
        })
    });
};
export var ModalBackButton = function(param) {
    var onBack = param.onBack;
    return /*#__PURE__*/ _jsx(IconButton, {
        variant: "text",
        onClick: onBack,
        "area-label": "go back",
        mr: "8px",
        children: /*#__PURE__*/ _jsx(ArrowBackIcon, {
            color: "primary"
        })
    });
};
export var ModalContainer = styled(MotionBox).withConfig({
    componentId: "sc-e5f1f8e0-3"
})(_templateObject3(), function(param) {
    var theme = param.theme;
    return theme.modal.background;
}, function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
}, function(param) {
    var theme = param.theme;
    return theme.zIndices.modal;
}, function(param) {
    var $minWidth = param.$minWidth;
    return $minWidth;
}, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
});
