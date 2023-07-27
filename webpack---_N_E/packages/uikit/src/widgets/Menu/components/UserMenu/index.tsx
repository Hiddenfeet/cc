import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  background-color: ",
        ";\n  border-radius: 16px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  display: inline-flex;\n  height: 32px;\n  padding-left: 32px;\n  padding-right: 8px;\n  position: relative;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  color: ",
        ";\n  display: none;\n  font-weight: 600;\n\n  ",
        " {\n    display: block;\n    margin-left: 8px;\n    margin-right: 4px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border: 1px solid ",
        ";\n  border-radius: 16px;\n  padding-bottom: 4px;\n  padding-top: 4px;\n  pointer-events: auto;\n  width: 280px;\n  visibility: visible;\n  z-index: 1001;\n\n  ",
        "\n\n  ",
        ":first-child {\n    border-radius: 8px 8px 0 0;\n  }\n\n  ",
        ":last-child {\n    border-radius: 0 0 8px 8px;\n  }\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";
import { Box, Flex } from "../../../../components/Box";
import { ChevronDownIcon } from "../../../../components/Svg";
import { variants } from "./types";
import MenuIcon from "./MenuIcon";
import { UserMenuItem } from "./styles";
export var StyledUserMenu = styled(Flex).withConfig({
    componentId: "sc-9ad39da0-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.tertiary;
});
export var LabelText = styled.div.withConfig({
    componentId: "sc-9ad39da0-1"
})(_templateObject1(), function(param) {
    var theme = param.theme;
    return theme.colors.text;
}, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.sm;
});
var Menu = styled.div.withConfig({
    componentId: "sc-9ad39da0-2"
})(_templateObject2(), function(param) {
    var theme = param.theme;
    return theme.card.background;
}, function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
}, function(param) {
    var isOpen = param.isOpen;
    return !isOpen && "\n    pointer-events: none;\n    visibility: hidden;\n  ";
}, UserMenuItem, UserMenuItem);
var UserMenu = function(_param) {
    var account = _param.account, text = _param.text, avatarSrc = _param.avatarSrc, _variant = _param.variant, variant = _variant === void 0 ? variants.DEFAULT : _variant, children = _param.children, disabled = _param.disabled, props = _object_without_properties(_param, [
        "account",
        "text",
        "avatarSrc",
        "variant",
        "children",
        "disabled"
    ]);
    var ref = useState(false), isOpen = ref[0], setIsOpen = ref[1];
    var ref1 = useState(null), targetRef = ref1[0], setTargetRef = ref1[1];
    var ref2 = useState(null), tooltipRef = ref2[0], setTooltipRef = ref2[1];
    var accountEllipsis = account ? "".concat(account.substring(0, 2), "...").concat(account.substring(account.length - 4)) : null;
    var ref3 = usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom-end",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        0
                    ]
                }
            }
        ]
    }), styles = ref3.styles, attributes = ref3.attributes;
    useEffect(function() {
        var showDropdownMenu = function() {
            setIsOpen(true);
        };
        var hideDropdownMenu = function(evt) {
            var target = evt.target;
            if (target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target))) {
                setIsOpen(false);
                evt.stopPropagation();
            }
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function() {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [
        targetRef,
        tooltipRef,
        setIsOpen
    ]);
    return /*#__PURE__*/ _jsxs(Flex, _object_spread_props(_object_spread({
        alignItems: "center",
        height: "100%",
        ref: setTargetRef
    }, props), {
        children: [
            /*#__PURE__*/ _jsxs(StyledUserMenu, {
                onTouchStart: function() {
                    setIsOpen(function(s) {
                        return !s;
                    });
                },
                children: [
                    /*#__PURE__*/ _jsx(MenuIcon, {
                        avatarSrc: avatarSrc,
                        variant: variant
                    }),
                    /*#__PURE__*/ _jsx(LabelText, {
                        title: typeof text === "string" ? text || account : account,
                        children: text || accountEllipsis
                    }),
                    !disabled && /*#__PURE__*/ _jsx(ChevronDownIcon, {
                        color: "text",
                        width: "24px"
                    })
                ]
            }),
            !disabled && /*#__PURE__*/ _jsx(Menu, _object_spread_props(_object_spread({
                style: styles.popper,
                ref: setTooltipRef
            }, attributes.popper), {
                isOpen: isOpen,
                children: /*#__PURE__*/ _jsx(Box, {
                    onClick: function() {
                        return setIsOpen(false);
                    },
                    children: children === null || children === void 0 ? void 0 : children({
                        isOpen: isOpen
                    })
                })
            }))
        ]
    }));
};
export default UserMenu;
