import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
var BottomNavItem = function(_param) {
    var label = _param.label, icon = _param.icon, fillIcon = _param.fillIcon, href = _param.href, _showItemsOnMobile = _param.showItemsOnMobile, showItemsOnMobile = _showItemsOnMobile === void 0 ? false : _showItemsOnMobile, _isActive = _param.isActive, isActive = _isActive === void 0 ? false : _isActive, _disabled = _param.disabled, disabled = _disabled === void 0 ? false : _disabled, props = _object_without_properties(_param, [
        "label",
        "icon",
        "fillIcon",
        "href",
        "showItemsOnMobile",
        "isActive",
        "disabled"
    ]);
    var linkComponent = useContext(MenuContext).linkComponent;
    var bottomNavItemContent = /*#__PURE__*/ _jsxs(Flex, {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        children: [
            icon && /*#__PURE__*/ _jsx(AnimatedIconComponent, {
                icon: icon,
                fillIcon: fillIcon,
                height: "22px",
                width: "21px",
                color: isActive ? "secondary" : "textSubtle",
                isActive: isActive,
                activeBackgroundColor: "backgroundAlt"
            }),
            /*#__PURE__*/ _jsx(StyledBottomNavText, {
                color: isActive ? "text" : "textSubtle",
                fontWeight: isActive ? "600" : "400",
                fontSize: "10px",
                children: label
            })
        ]
    });
    return showItemsOnMobile ? /*#__PURE__*/ _jsx(StyledBottomNavItem, _object_spread_props(_object_spread({
        style: {
            opacity: disabled ? 0.5 : 1
        },
        type: "button"
    }, props), {
        children: bottomNavItemContent
    })) : /*#__PURE__*/ _jsx(StyledBottomNavItem, _object_spread_props(_object_spread({
        style: {
            opacity: disabled ? 0.5 : 1
        },
        as: linkComponent,
        href: href
    }, props), {
        children: bottomNavItemContent
    }));
};
export default BottomNavItem;
