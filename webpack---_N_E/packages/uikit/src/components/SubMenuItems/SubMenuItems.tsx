import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import debounce from "lodash/debounce";
import React, { useCallback, useEffect, useRef } from "react";
import { useMatchBreakpoints } from "../../contexts";
import { Box } from "../Box";
import { DropdownMenuItemType } from "../DropdownMenu/types";
import MenuItem from "../MenuItem/MenuItem";
import { ChevronLeftIcon, ChevronRightIcon, OpenNewIcon } from "../Svg";
import StyledSubMenuItems, { LeftMaskLayer, RightMaskLayer, StyledSubMenuItemWrapper, SubMenuItemWrapper } from "./styles";
var SUBMENU_CHEVRON_CLICK_MOVE_PX = 100;
var SUBMENU_SCROLL_DEVIATION = 3;
var SubMenuItems = function(_param) {
    var _items = _param.items, items = _items === void 0 ? [] : _items, activeItem = _param.activeItem, _isMobileOnly = _param.isMobileOnly, isMobileOnly = _isMobileOnly === void 0 ? false : _isMobileOnly, props = _object_without_properties(_param, [
        "items",
        "activeItem",
        "isMobileOnly"
    ]);
    var isMobile = useMatchBreakpoints().isMobile;
    var scrollLayerRef = useRef(null);
    var chevronLeftRef = useRef(null);
    var chevronRightRef = useRef(null);
    var layerController = useCallback(function() {
        if (!scrollLayerRef.current || !chevronLeftRef.current || !chevronRightRef.current) return;
        var scrollLayer = scrollLayerRef.current;
        if (scrollLayer.scrollLeft === 0) chevronLeftRef.current.classList.add("hide");
        else chevronLeftRef.current.classList.remove("hide");
        if (scrollLayer.scrollLeft + scrollLayer.offsetWidth < scrollLayer.scrollWidth - SUBMENU_SCROLL_DEVIATION) chevronRightRef.current.classList.remove("hide");
        else chevronRightRef.current.classList.add("hide");
    }, []);
    useEffect(function() {
        layerController();
    }, [
        layerController
    ]);
    return /*#__PURE__*/ _jsxs(SubMenuItemWrapper, _object_spread_props(_object_spread({
        $isMobileOnly: isMobileOnly
    }, props), {
        children: [
            isMobile && /*#__PURE__*/ _jsx(LeftMaskLayer, {
                ref: chevronLeftRef,
                onClick: function() {
                    if (!scrollLayerRef.current) return;
                    scrollLayerRef.current.scrollLeft -= SUBMENU_CHEVRON_CLICK_MOVE_PX;
                },
                children: /*#__PURE__*/ _jsx(ChevronLeftIcon, {})
            }),
            isMobile && /*#__PURE__*/ _jsx(RightMaskLayer, {
                ref: chevronRightRef,
                onClick: function() {
                    if (!scrollLayerRef.current) return;
                    scrollLayerRef.current.scrollLeft += SUBMENU_CHEVRON_CLICK_MOVE_PX;
                },
                children: /*#__PURE__*/ _jsx(ChevronRightIcon, {})
            }),
            /*#__PURE__*/ _jsx(StyledSubMenuItems, {
                justifyContent: [
                    isMobileOnly ? "flex-end" : "start",
                    null,
                    "center"
                ],
                pl: [
                    "12px",
                    null,
                    "0px"
                ],
                onScroll: debounce(layerController, 100),
                ref: scrollLayerRef,
                children: items.map(function(param) {
                    var label = param.label, href = param.href, icon = param.icon, itemProps = param.itemProps, type = param.type, disabled = param.disabled;
                    var Icon = icon;
                    var isExternalLink = type === DropdownMenuItemType.EXTERNAL_LINK;
                    var linkProps = isExternalLink ? {
                        as: "a",
                        target: "_blank"
                    } : {};
                    var isActive = href === activeItem;
                    return label && /*#__PURE__*/ _jsx(StyledSubMenuItemWrapper, {
                        mr: "20px",
                        children: /*#__PURE__*/ _jsxs(MenuItem, _object_spread_props(_object_spread({
                            href: href,
                            scrollLayerRef: scrollLayerRef,
                            isActive: isActive,
                            isDisabled: disabled,
                            variant: "subMenu"
                        }, itemProps, linkProps), {
                            children: [
                                Icon && /*#__PURE__*/ _jsx(Icon, {
                                    color: isActive ? "secondary" : "textSubtle",
                                    mr: "4px"
                                }),
                                label,
                                isExternalLink && /*#__PURE__*/ _jsx(Box, {
                                    display: [
                                        "none",
                                        null,
                                        "flex"
                                    ],
                                    style: {
                                        alignItems: "center"
                                    },
                                    ml: "4px",
                                    children: /*#__PURE__*/ _jsx(OpenNewIcon, {
                                        color: "textSubtle"
                                    })
                                })
                            ]
                        }))
                    }, label);
                })
            })
        ]
    }));
};
export default SubMenuItems;
