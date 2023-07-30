import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useContext, useRef, useEffect } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { useMatchBreakpoints } from "../../contexts";
var MenuItem = function(_param) {
    var children = _param.children, href = _param.href, _isActive = _param.isActive, isActive = _isActive === void 0 ? false : _isActive, _isDisabled = _param.isDisabled, isDisabled = _isDisabled === void 0 ? false : _isDisabled, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, scrollLayerRef = _param.scrollLayerRef, statusColor = _param.statusColor, props = _object_without_properties(_param, [
        "children",
        "href",
        "isActive",
        "isDisabled",
        "variant",
        "scrollLayerRef",
        "statusColor"
    ]);
    var isMobile = useMatchBreakpoints().isMobile;
    var menuItemRef = useRef(null);
    var linkComponent = useContext(MenuContext).linkComponent;
    var itemLinkProps = href ? {
        as: linkComponent,
        href: href
    } : {
        as: "div"
    };
    useEffect(function() {
        if (!isMobile || !isActive || !menuItemRef.current || !(scrollLayerRef === null || scrollLayerRef === void 0 ? void 0 : scrollLayerRef.current)) return;
        var scrollLayer = scrollLayerRef.current;
        var menuNode = menuItemRef.current.parentNode;
        if (!menuNode) return;
        if (scrollLayer.scrollLeft > menuNode.offsetLeft || scrollLayer.scrollLeft + scrollLayer.offsetWidth < menuNode.offsetLeft + menuNode.offsetWidth) {
            scrollLayer.scrollLeft = menuNode.offsetLeft;
        }
    }, [
        isActive,
        isMobile,
        scrollLayerRef
    ]);
    return /*#__PURE__*/ _jsx(StyledMenuItemContainer, {
        $isActive: isActive,
        $variant: variant,
        ref: menuItemRef,
        children: /*#__PURE__*/ _jsx(StyledMenuItem, _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, itemLinkProps), {
            $isActive: isActive,
            $isDisabled: isDisabled,
            $variant: variant,
            $statusColor: statusColor
        }), props), {
            children: children
        }))
    });
};
export default MenuItem;
