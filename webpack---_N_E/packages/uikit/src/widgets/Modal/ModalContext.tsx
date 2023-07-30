import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ",
        ";\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ",
        " 0.3s ease-in-out forwards;\n    ",
        " {\n      animation: ",
        " 0.3s ease-in-out forwards;\n      ",
        " {\n        animation: none;\n      }\n    }\n  }\n  &.disappear {\n    animation: ",
        " 0.3s ease-in-out forwards;\n    ",
        " {\n      animation: ",
        " 0.3s ease-in-out forwards;\n      ",
        " {\n        animation: none;\n      }\n    }\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, domMax, LazyMotion, m } from "framer-motion";
import React, { createContext, useRef, useState } from "react";
import styled from "styled-components";
import { mountAnimation, unmountAnimation } from "../../components/BottomDrawer/styles";
import { Overlay } from "../../components/Overlay";
import { useIsomorphicEffect } from "../../hooks";
import { animationHandler, animationMap, animationVariants, appearAnimation, disappearAnimation } from "../../util/animationToolkit";
import { ModalContainer } from "./styles";
var ModalWrapper = styled(m.div).withConfig({
    componentId: "sc-cc45d0d7-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.zIndices.modal - 1;
}, appearAnimation, ModalContainer, mountAnimation, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
}, disappearAnimation, ModalContainer, unmountAnimation, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
});
export var Context = /*#__PURE__*/ createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function() {
        return null;
    },
    onPresent: function() {
        return null;
    },
    onDismiss: function() {
        return null;
    }
});
var ModalProvider = function(param) {
    var children = param.children;
    var ref = useState(false), isOpen = ref[0], setIsOpen = ref[1];
    var ref1 = useState(), modalNode = ref1[0], setModalNode = ref1[1];
    var ref2 = useState(""), nodeId = ref2[0], setNodeId = ref2[1];
    var ref3 = useState(true), closeOnOverlayClick = ref3[0], setCloseOnOverlayClick = ref3[1];
    var animationRef = useRef(null);
    useIsomorphicEffect(function() {
        var setViewportHeight = function() {
            var vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
        };
        setViewportHeight();
        window.addEventListener("resize", setViewportHeight);
        return function() {
            return window.removeEventListener("resize", setViewportHeight);
        };
    }, []);
    var handlePresent = function(node, newNodeId, closeOverlayClick) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
        setCloseOnOverlayClick(closeOverlayClick);
    };
    var handleDismiss = function() {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
        setCloseOnOverlayClick(true);
    };
    var handleOverlayDismiss = function() {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return /*#__PURE__*/ _jsxs(Context.Provider, {
        value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss
        },
        children: [
            /*#__PURE__*/ _jsx(LazyMotion, {
                features: domMax,
                children: /*#__PURE__*/ _jsx(AnimatePresence, {
                    children: isOpen && /*#__PURE__*/ _jsxs(ModalWrapper, _object_spread_props(_object_spread({
                        ref: animationRef,
                        onAnimationStart: function() {
                            return animationHandler(animationRef.current);
                        }
                    }, animationMap), {
                        variants: animationVariants,
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            /*#__PURE__*/ _jsx(Overlay, {
                                onClick: handleOverlayDismiss
                            }),
                            /*#__PURE__*/ React.isValidElement(modalNode) && /*#__PURE__*/ React.cloneElement(modalNode, {
                                onDismiss: handleDismiss
                            })
                        ]
                    }))
                })
            }),
            children
        ]
    });
};
export default ModalProvider;
