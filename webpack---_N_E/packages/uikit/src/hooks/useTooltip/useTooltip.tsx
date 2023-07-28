import _instanceof from "@swc/helpers/src/_instanceof.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../../theme";
import getPortalRoot from "../../util/getPortalRoot";
import isTouchDevice from "../../util/isTouchDevice";
import { Arrow, StyledTooltip } from "./StyledTooltip";
var animationVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};
var animationMap = {
    initial: "initial",
    animate: "animate",
    exit: "exit"
};
var invertTheme = function(currentTheme) {
    if (currentTheme.isDark) {
        return light;
    }
    return dark;
};
var useTooltip = function(content, options) {
    var _placement = options.placement, placement = _placement === void 0 ? "auto" : _placement, _trigger = options.trigger, trigger = _trigger === void 0 ? "hover" : _trigger, _arrowPadding = options.arrowPadding, arrowPadding = _arrowPadding === void 0 ? 16 : _arrowPadding, _tooltipPadding = options.tooltipPadding, tooltipPadding = _tooltipPadding === void 0 ? {
        left: 16,
        right: 16
    } : _tooltipPadding, _tooltipOffset = options.tooltipOffset, tooltipOffset = _tooltipOffset === void 0 ? [
        0,
        10
    ] : _tooltipOffset, _hideTimeout = options.hideTimeout, hideTimeout = _hideTimeout === void 0 ? 100 : _hideTimeout;
    var ref = useState(null), targetElement = ref[0], setTargetElement = ref[1];
    var ref1 = useState(null), tooltipElement = ref1[0], setTooltipElement = ref1[1];
    var ref2 = useState(null), arrowElement = ref2[0], setArrowElement = ref2[1];
    var ref3 = useState(false), visible = ref3[0], setVisible = ref3[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeoutRef = useRef();
    var hideTooltip = useCallback(function(e) {
        var hide = function() {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeoutRef.current) {
                window.clearTimeout(hideTimeoutRef.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeoutRef.current = window.setTimeout(function() {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, hideTimeout);
            }
        } else {
            hide();
        }
    }, [
        tooltipElement,
        trigger,
        hideTimeout
    ]);
    var showTooltip = useCallback(function(e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeoutRef.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [
        tooltipElement,
        targetElement,
        trigger
    ]);
    var toggleTooltip = useCallback(function(e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [
        visible
    ]);
    // Trigger = hover
    useEffect(function() {
        if (targetElement === null || trigger !== "hover") return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        } else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function() {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [
        trigger,
        targetElement,
        hideTooltip,
        showTooltip
    ]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function() {
        if (tooltipElement === null || trigger !== "hover") return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function() {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [
        trigger,
        tooltipElement,
        hideTooltip,
        showTooltip
    ]);
    // Trigger = click
    useEffect(function() {
        if (targetElement === null || trigger !== "click") return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function() {
            return targetElement.removeEventListener("click", toggleTooltip);
        };
    }, [
        trigger,
        targetElement,
        visible,
        toggleTooltip
    ]);
    // Handle click outside
    useEffect(function() {
        if (trigger !== "click") return undefined;
        var handleClickOutside = function(param) {
            var target = param.target;
            if (_instanceof(target, Node)) {
                if (tooltipElement != null && targetElement != null && !tooltipElement.contains(target) && !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function() {
            return document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        trigger,
        targetElement,
        tooltipElement
    ]);
    // Trigger = focus
    useEffect(function() {
        if (targetElement === null || trigger !== "focus") return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function() {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [
        trigger,
        targetElement,
        showTooltip,
        hideTooltip
    ]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyond the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyond the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var ref4 = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: {
                    element: arrowElement,
                    padding: arrowPadding
                }
            },
            {
                name: "offset",
                options: {
                    offset: tooltipOffset
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding: tooltipPadding
                }
            }, 
        ]
    }), styles = ref4.styles, attributes = ref4.attributes;
    var tooltip = /*#__PURE__*/ _jsxs(StyledTooltip, _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, animationMap), {
        variants: animationVariants,
        transition: {
            duration: 0.3
        },
        ref: setTooltipElement,
        style: styles.popper
    }), attributes.popper), {
        children: [
            /*#__PURE__*/ _jsx(ThemeProvider, {
                theme: invertTheme,
                children: content
            }),
            /*#__PURE__*/ _jsx(Arrow, {
                ref: setArrowElement,
                style: styles.arrow
            })
        ]
    }));
    var AnimatedTooltip = /*#__PURE__*/ _jsx(LazyMotion, {
        features: domAnimation,
        children: /*#__PURE__*/ _jsx(AnimatePresence, {
            children: visible && tooltip
        })
    });
    var portal = getPortalRoot();
    var tooltipInPortal = portal ? /*#__PURE__*/ createPortal(AnimatedTooltip, portal) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : AnimatedTooltip,
        tooltipVisible: visible
    };
};
export default useTooltip;
