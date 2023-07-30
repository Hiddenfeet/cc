import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, memo } from "react";
import BottomNavItem from "../BottomNavItem";
import StyledBottomNav from "./styles";
import { Box } from "../Box";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { NotificationDot } from "../NotificationDot";
import { Overlay } from "../Overlay";
var BottomNav = function(_param) {
    var _items = _param.items, items = _items === void 0 ? [] : _items, _activeItem = _param.activeItem, activeItem = _activeItem === void 0 ? "" : _activeItem, _activeSubItem = _param.activeSubItem, activeSubItem = _activeSubItem === void 0 ? "" : _activeSubItem, props = _object_without_properties(_param, [
        "items",
        "activeItem",
        "activeSubItem"
    ]);
    var ref = useState({}), menuOpenByIndex = ref[0], setMenuOpenByIndex = ref[1];
    var isBottomMenuOpen = Object.values(menuOpenByIndex).some(function(acc) {
        return acc;
    });
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            isBottomMenuOpen && /*#__PURE__*/ _jsx(Overlay, {}),
            /*#__PURE__*/ _jsx(StyledBottomNav, _object_spread_props(_object_spread({
                justifyContent: "space-around"
            }, props), {
                children: items.map(function(param, index) {
                    var label = param.label, menuItems = param.items, href = param.href, icon = param.icon, fillIcon = param.fillIcon, _showOnMobile = param.showOnMobile, showOnMobile = _showOnMobile === void 0 ? true : _showOnMobile, _showItemsOnMobile = param.showItemsOnMobile, showItemsOnMobile = _showItemsOnMobile === void 0 ? true : _showItemsOnMobile, disabled = param.disabled;
                    var ref, ref1;
                    var statusColor = (ref = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function(menuItem) {
                        return menuItem.status !== undefined;
                    })) === null || ref === void 0 ? void 0 : (ref1 = ref.status) === null || ref1 === void 0 ? void 0 : ref1.color;
                    return showOnMobile && /*#__PURE__*/ _jsx(DropdownMenu, {
                        items: menuItems,
                        isBottomNav: true,
                        activeItem: activeSubItem,
                        showItemsOnMobile: showItemsOnMobile,
                        setMenuOpenByIndex: setMenuOpenByIndex,
                        index: index,
                        isDisabled: disabled,
                        children: /*#__PURE__*/ _jsx(Box, {
                            children: /*#__PURE__*/ _jsx(NotificationDot, {
                                show: !!statusColor,
                                color: statusColor,
                                children: /*#__PURE__*/ _jsx(BottomNavItem, {
                                    href: href,
                                    disabled: disabled,
                                    isActive: href === activeItem,
                                    label: label,
                                    icon: icon,
                                    fillIcon: fillIcon,
                                    showItemsOnMobile: showItemsOnMobile
                                })
                            })
                        })
                    }, "".concat(label, "#").concat(href));
                })
            }))
        ]
    });
};
export default /*#__PURE__*/ memo(BottomNav);
