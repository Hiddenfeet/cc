/* eslint-disable react/no-array-index-key */ import _define_property from "@swc/helpers/src/_define_property.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { usePopper } from "react-popper";
import { useOnClickOutside } from "../../hooks";
import { MenuContext } from "../../widgets/Menu/context";
import { Box, Flex } from "../Box";
import { LogoutIcon } from "../Svg";
import { DropdownMenuDivider, DropdownMenuItem, StyledDropdownMenu, LinkStatus, StyledDropdownMenuItemContainer } from "./styles";
import { DropdownMenuItemType } from "./types";
var DropdownMenu = function(_param) {
    var children = _param.children, _isBottomNav = _param.isBottomNav, isBottomNav = _isBottomNav === void 0 ? false : _isBottomNav, _showItemsOnMobile = _param.showItemsOnMobile, showItemsOnMobile = _showItemsOnMobile === void 0 ? false : _showItemsOnMobile, _activeItem = _param.activeItem, activeItem = _activeItem === void 0 ? "" : _activeItem, _items = _param.items, items = _items === void 0 ? [] : _items, index = _param.index, setMenuOpenByIndex = _param.setMenuOpenByIndex, isDisabled = _param.isDisabled, props = _object_without_properties(_param, [
        "children",
        "isBottomNav",
        "showItemsOnMobile",
        "activeItem",
        "items",
        "index",
        "setMenuOpenByIndex",
        "isDisabled"
    ]);
    var linkComponent = useContext(MenuContext).linkComponent;
    var ref = useState(false), isOpen = ref[0], setIsOpen = ref[1];
    var ref1 = useState(null), targetRef = ref1[0], setTargetRef = ref1[1];
    var ref2 = useState(null), tooltipRef = ref2[0], setTooltipRef = ref2[1];
    var hasItems = items.length > 0;
    var ref3 = usePopper(targetRef, tooltipRef, {
        strategy: isBottomNav ? "absolute" : "fixed",
        placement: isBottomNav ? "top" : "bottom-start",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        isBottomNav ? 6 : 0
                    ]
                }
            }
        ]
    }), styles = ref3.styles, attributes = ref3.attributes;
    var isMenuShow = isOpen && (isBottomNav && showItemsOnMobile || !isBottomNav);
    useEffect(function() {
        var showDropdownMenu = function() {
            setIsOpen(true);
        };
        var hideDropdownMenu = function(evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
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
        setIsOpen,
        isBottomNav
    ]);
    useEffect(function() {
        if (setMenuOpenByIndex && index !== undefined) {
            setMenuOpenByIndex(function(prevValue) {
                return _object_spread_props(_object_spread({}, prevValue), _define_property({}, index, isMenuShow));
            });
        }
    }, [
        isMenuShow,
        setMenuOpenByIndex,
        index
    ]);
    useOnClickOutside(targetRef, useCallback(function() {
        setIsOpen(false);
    }, [
        setIsOpen
    ]));
    return /*#__PURE__*/ _jsxs(Box, _object_spread_props(_object_spread({
        ref: setTargetRef
    }, props), {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                onPointerDown: function() {
                    setIsOpen(function(s) {
                        return !s;
                    });
                },
                children: children
            }),
            hasItems && /*#__PURE__*/ _jsx(StyledDropdownMenu, _object_spread_props(_object_spread({
                style: styles.popper,
                ref: setTooltipRef
            }, attributes.popper), {
                $isBottomNav: isBottomNav,
                $isOpen: isMenuShow,
                children: items.filter(function(item) {
                    return !item.isMobileOnly;
                }).map(function(_param, itemItem) {
                    var _type = _param.type, type = _type === void 0 ? DropdownMenuItemType.INTERNAL_LINK : _type, label = _param.label, _href = _param.href, href = _href === void 0 ? "/" : _href, status = _param.status, disabled = _param.disabled, itemProps = _object_without_properties(_param, [
                        "type",
                        "label",
                        "href",
                        "status",
                        "disabled"
                    ]);
                    var MenuItemContent = /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            label,
                            status && /*#__PURE__*/ _jsx(LinkStatus, {
                                color: status.color,
                                fontSize: "14px",
                                children: status.text
                            })
                        ]
                    });
                    var isActive = href === activeItem;
                    return /*#__PURE__*/ _jsxs(StyledDropdownMenuItemContainer, {
                        children: [
                            type === DropdownMenuItemType.BUTTON && /*#__PURE__*/ _jsx(DropdownMenuItem, _object_spread_props(_object_spread({
                                $isActive: isActive,
                                disabled: disabled || isDisabled,
                                type: "button"
                            }, itemProps), {
                                children: MenuItemContent
                            })),
                            type === DropdownMenuItemType.INTERNAL_LINK && /*#__PURE__*/ _jsx(DropdownMenuItem, _object_spread_props(_object_spread({
                                $isActive: isActive,
                                disabled: disabled || isDisabled,
                                as: linkComponent,
                                href: href,
                                onClick: function() {
                                    setIsOpen(false);
                                }
                            }, itemProps), {
                                children: MenuItemContent
                            })),
                            type === DropdownMenuItemType.EXTERNAL_LINK && /*#__PURE__*/ _jsx(DropdownMenuItem, _object_spread_props(_object_spread({
                                $isActive: isActive,
                                disabled: disabled || isDisabled,
                                as: "a",
                                href: href,
                                target: "_blank",
                                onClick: function() {
                                    setIsOpen(false);
                                }
                            }, itemProps), {
                                children: /*#__PURE__*/ _jsxs(Flex, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    children: [
                                        label,
                                        /*#__PURE__*/ _jsx(LogoutIcon, {})
                                    ]
                                })
                            })),
                            type === DropdownMenuItemType.DIVIDER && /*#__PURE__*/ _jsx(DropdownMenuDivider, {})
                        ]
                    }, itemItem);
                })
            }))
        ]
    }));
};
export default DropdownMenu;
