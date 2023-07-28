import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from "react";
import { SunIcon, MoonIcon } from "../Svg";
import { Toggle } from "../Toggle";
var ThemeSwitcher = function(param) {
    var isDark = param.isDark, toggleTheme = param.toggleTheme;
    return /*#__PURE__*/ _jsx(Toggle, {
        checked: isDark,
        defaultColor: "textDisabled",
        checkedColor: "textDisabled",
        onChange: function() {
            return toggleTheme(!isDark);
        },
        scale: "md",
        startIcon: function() {
            var isActive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return /*#__PURE__*/ _jsx(SunIcon, {
                color: isActive ? "warning" : "backgroundAlt"
            });
        },
        endIcon: function() {
            var isActive = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            return /*#__PURE__*/ _jsx(MoonIcon, {
                color: isActive ? "secondary" : "backgroundAlt"
            });
        }
    });
};
export default /*#__PURE__*/ memo(ThemeSwitcher, function(prev, next) {
    return prev.isDark === next.isDark;
});
