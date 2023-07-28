import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border-radius: 16px;\n  box-shadow: ",
        ";\n  color: ",
        ";\n  display: block;\n  font-size: 16px;\n  height: ",
        ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",
        ";\n\n  &::placeholder {\n    color: ",
        ";\n  }\n\n  &:disabled {\n    background-color: ",
        ";\n    box-shadow: none;\n    color: ",
        ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",
        ";\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { scales } from "./types";
/**
 * Priority: Warning --> Success
 */ var getBoxShadow = function(param) {
    var _isSuccess = param.isSuccess, isSuccess = _isSuccess === void 0 ? false : _isSuccess, _isWarning = param.isWarning, isWarning = _isWarning === void 0 ? false : _isWarning, theme = param.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function(param) {
    var _scale = param.scale, scale = _scale === void 0 ? scales.MD : _scale;
    switch(scale){
        case scales.SM:
            return "32px";
        case scales.LG:
            return "48px";
        case scales.MD:
        default:
            return "40px";
    }
};
var Input = styled.input.withConfig({
    componentId: "sc-c22a9310-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.input;
}, getBoxShadow, function(param) {
    var theme = param.theme;
    return theme.colors.text;
}, getHeight, function(param) {
    var theme = param.theme;
    return theme.colors.inputSecondary;
}, function(param) {
    var theme = param.theme;
    return theme.colors.textSubtle;
}, function(param) {
    var theme = param.theme;
    return theme.colors.backgroundDisabled;
}, function(param) {
    var theme = param.theme;
    return theme.colors.textDisabled;
}, function(param) {
    var theme = param.theme, isWarning = param.isWarning, isSuccess = param.isSuccess;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales.MD,
    isSuccess: false,
    isWarning: false
};
export default Input;
