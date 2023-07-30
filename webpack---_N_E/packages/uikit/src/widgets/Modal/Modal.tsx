import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { useTheme } from "styled-components";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { ModalBody, ModalHeader, ModalTitle, ModalContainer, ModalCloseButton, ModalBackButton } from "./styles";
import { useMatchBreakpoints } from "../../contexts";
export var MODAL_SWIPE_TO_CLOSE_VELOCITY = 300;
var Modal = function(_param) {
    var title = _param.title, onDismiss = _param.onDismiss, onBack = _param.onBack, children = _param.children, _hideCloseButton = _param.hideCloseButton, hideCloseButton = _hideCloseButton === void 0 ? false : _hideCloseButton, _bodyPadding = _param.bodyPadding, bodyPadding = _bodyPadding === void 0 ? "24px" : _bodyPadding, _headerBackground = _param.headerBackground, headerBackground = _headerBackground === void 0 ? "transparent" : _headerBackground, _minWidth = _param.minWidth, minWidth = _minWidth === void 0 ? "320px" : _minWidth, props = _object_without_properties(_param, [
        "title",
        "onDismiss",
        "onBack",
        "children",
        "hideCloseButton",
        "bodyPadding",
        "headerBackground",
        "minWidth"
    ]);
    var theme = useTheme();
    var isMobile = useMatchBreakpoints().isMobile;
    var wrapperRef = useRef(null);
    return(// @ts-ignore
    /*#__PURE__*/ _jsxs(ModalContainer, _object_spread_props(_object_spread({
        drag: isMobile ? "y" : false,
        dragConstraints: {
            top: 0,
            bottom: 600
        },
        dragElastic: {
            top: 0
        },
        dragSnapToOrigin: true,
        onDragStart: function() {
            if (wrapperRef.current) wrapperRef.current.style.animation = "none";
        },
        onDragEnd: function(e, info) {
            if (info.velocity.y > MODAL_SWIPE_TO_CLOSE_VELOCITY && onDismiss) onDismiss();
        },
        ref: wrapperRef,
        $minWidth: minWidth
    }, props), {
        children: [
            /*#__PURE__*/ _jsxs(ModalHeader, {
                background: getThemeValue(theme, "colors.".concat(headerBackground), headerBackground),
                children: [
                    /*#__PURE__*/ _jsxs(ModalTitle, {
                        children: [
                            onBack && /*#__PURE__*/ _jsx(ModalBackButton, {
                                onBack: onBack
                            }),
                            /*#__PURE__*/ _jsx(Heading, {
                                children: title
                            })
                        ]
                    }),
                    !hideCloseButton && /*#__PURE__*/ _jsx(ModalCloseButton, {
                        onDismiss: onDismiss
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(ModalBody, {
                p: bodyPadding,
                children: children
            })
        ]
    })));
};
export default Modal;
