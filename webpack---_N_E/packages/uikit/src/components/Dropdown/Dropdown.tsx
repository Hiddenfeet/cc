import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  width: max-content;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ",
        ";\n  bottom: ",
        ";\n  background-color: ",
        ";\n  box-shadow: ",
        ";\n  padding: 16px;\n  max-height: 0px;\n  overflow: hidden;\n  z-index: ",
        ";\n  border-radius: ",
        ";\n  opacity: 0;\n  transition: max-height 0s 0.3s, opacity 0.3s ease-in-out;\n  will-change: opacity;\n  pointer-events: none;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      &:hover ",
        ", &:focus-within ",
        " {\n        opacity: 1;\n        max-height: 400px;\n        overflow-y: auto;\n        transition: max-height 0s 0s, opacity 0.3s ease-in-out;\n        pointer-events: auto;\n      }\n    "
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  ",
        "\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import styled, { css } from "styled-components";
import { useMatchBreakpoints } from "../../contexts";
var getLeft = function(param) {
    var position = param.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function(param) {
    var position = param.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div.withConfig({
    componentId: "sc-ee5ec6ea-0"
})(_templateObject(), getLeft, getBottom, function(param) {
    var theme = param.theme;
    return theme.nav.background;
}, function(param) {
    var theme = param.theme;
    return theme.shadows.level1;
}, function(param) {
    var theme = param.theme;
    return theme.zIndices.dropdown;
}, function(param) {
    var theme = param.theme;
    return theme.radii.small;
});
var Container = styled.div.withConfig({
    componentId: "sc-ee5ec6ea-1"
})(_templateObject2(), function(param) {
    var $scrolling = param.$scrolling;
    return !$scrolling && css(_templateObject1(), DropdownContent, DropdownContent);
});
var Dropdown = function(param) {
    var target = param.target, _position = param.position, position = _position === void 0 ? "bottom" : _position, children = param.children;
    var ref = useState(false), scrolling = ref[0], setScrolling = ref[1];
    var isMobile = useMatchBreakpoints().isMobile;
    useEffect(function() {
        if (isMobile) {
            var scrollEndTimer;
            var handleScroll = function() {
                if (scrollEndTimer) clearTimeout(scrollEndTimer);
                setScrolling(true);
                // @ts-ignore
                scrollEndTimer = setTimeout(function() {
                    setScrolling(false);
                }, 300);
            };
            var throttledHandleScroll = throttle(handleScroll, 200);
            document.addEventListener("scroll", throttledHandleScroll);
            return function() {
                document.removeEventListener("scroll", throttledHandleScroll);
            };
        }
        return undefined;
    }, [
        isMobile
    ]);
    return /*#__PURE__*/ _jsxs(Container, {
        $scrolling: scrolling,
        children: [
            target,
            /*#__PURE__*/ _jsx(DropdownContent, {
                position: position,
                children: children
            })
        ]
    });
};
Dropdown.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    position: "bottom"
};
export default Dropdown;
