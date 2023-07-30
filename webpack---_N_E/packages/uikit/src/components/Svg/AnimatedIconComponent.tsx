import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledAnimatedIconComponent, StyledIconContainer } from "./styles";
var AnimatedIconComponent = function(_param) {
    var icon = _param.icon, fillIcon = _param.fillIcon, _color = _param.color, color = _color === void 0 ? "textSubtle" : _color, _activeColor = _param.activeColor, activeColor = _activeColor === void 0 ? "secondary" : _activeColor, activeBackgroundColor = _param.activeBackgroundColor, _isActive = _param.isActive, isActive = _isActive === void 0 ? false : _isActive, props = _object_without_properties(_param, [
        "icon",
        "fillIcon",
        "color",
        "activeColor",
        "activeBackgroundColor",
        "isActive"
    ]);
    var IconElement = icon;
    var IconElementFill = fillIcon;
    return IconElement ? /*#__PURE__*/ _jsxs(StyledAnimatedIconComponent, _object_spread_props(_object_spread({
        isActive: isActive,
        hasFillIcon: !!IconElementFill
    }, props), {
        children: [
            /*#__PURE__*/ _jsx(StyledIconContainer, {
                activeBackgroundColor: activeBackgroundColor,
                children: /*#__PURE__*/ _jsx(IconElement, {
                    color: color
                })
            }),
            !!IconElementFill && /*#__PURE__*/ _jsx(StyledIconContainer, _object_spread_props(_object_spread({
                activeBackgroundColor: activeBackgroundColor
            }, props), {
                children: /*#__PURE__*/ _jsx(IconElementFill, {
                    color: activeColor
                })
            }))
        ]
    })) : null;
};
export default AnimatedIconComponent;
