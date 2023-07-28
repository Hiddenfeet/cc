/* eslint-disable @typescript-eslint/no-explicit-any */ import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement, memo } from "react";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
var MenuItems = function(_param) {
    var _items = _param.items, items = _items === void 0 ? [] : _items, activeItem = _param.activeItem, activeSubItem = _param.activeSubItem, props = _object_without_properties(_param, [
        "items",
        "activeItem",
        "activeSubItem"
    ]);
    return /*#__PURE__*/ _jsx(Flex, _object_spread_props(_object_spread({}, props), {
        children: items.map(function(param) {
            var label = param.label, tmp = param.items, menuItems = tmp === void 0 ? [] : tmp, href = param.href, icon = param.icon, disabled = param.disabled;
            var ref, ref1;
            var statusColor = (ref = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function(menuItem) {
                return menuItem.status !== undefined;
            })) === null || ref === void 0 ? void 0 : (ref1 = ref.status) === null || ref1 === void 0 ? void 0 : ref1.color;
            var isActive = activeItem === href;
            var linkProps = isTouchDevice() && menuItems && menuItems.length > 0 ? {} : {
                href: href
            };
            var Icon = icon;
            return /*#__PURE__*/ _jsx(DropdownMenu, {
                items: menuItems,
                py: 1,
                activeItem: activeSubItem,
                isDisabled: disabled,
                children: /*#__PURE__*/ _jsx(MenuItem, _object_spread_props(_object_spread({}, linkProps), {
                    isActive: isActive,
                    statusColor: statusColor,
                    isDisabled: disabled,
                    children: label || icon && /*#__PURE__*/ createElement(Icon, {
                        color: isActive ? "secondary" : "textSubtle"
                    })
                }))
            }, "".concat(label, "#").concat(href));
        })
    }));
};
export default /*#__PURE__*/ memo(MenuItems);
