import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
var LangSelector = function(param) {
    var currentLang = param.currentLang, langs = param.langs, color = param.color, setLang = param.setLang, _dropdownPosition = param.dropdownPosition, dropdownPosition = _dropdownPosition === void 0 ? "bottom" : _dropdownPosition, _buttonScale = param.buttonScale, buttonScale = _buttonScale === void 0 ? "md" : _buttonScale, _hideLanguage = param.hideLanguage, hideLanguage = _hideLanguage === void 0 ? false : _hideLanguage;
    /*#__PURE__*/ return _jsx(Dropdown, {
        position: dropdownPosition,
        target: /*#__PURE__*/ _jsx(Button, {
            scale: buttonScale,
            variant: "text",
            startIcon: /*#__PURE__*/ _jsx(LanguageIcon, {
                color: color,
                width: "24px"
            }),
            children: !hideLanguage && /*#__PURE__*/ _jsx(Text, {
                color: color,
                children: currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase()
            })
        }),
        children: langs.map(function(lang) {
            return /*#__PURE__*/ _jsx(MenuButton, {
                fullWidth: true,
                onClick: function() {
                    return setLang(lang);
                },
                // Safari fix
                style: {
                    minHeight: "32px",
                    height: "auto"
                },
                children: lang.language
            }, lang.locale);
        })
    });
};
export default /*#__PURE__*/ React.memo(LangSelector, function(prev, next) {
    return prev.currentLang === next.currentLang;
});
