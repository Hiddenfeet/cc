import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ",
        ";\n  left: ",
        ";\n  position: absolute;\n  top: ",
        ";\n  transition: left 200ms ease-in;\n  width: ",
        ";\n  z-index: 1;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ",
        " {\n    left: ",
        ";\n  }\n\n  &:focus + ",
        " {\n    box-shadow: ",
        ";\n  }\n\n  &:hover + ",
        ":not(:disabled):not(:checked) {\n    box-shadow: ",
        ";\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  background-color: ",
        ";\n  border-radius: 24px;\n  box-shadow: ",
        ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ",
        ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ",
        ";\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { scales } from "./types";
var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px"
    },
    md: {
        handleHeight: "26px",
        handleWidth: "26px",
        handleLeft: "3px",
        handleTop: "3px",
        checkedLeft: "calc(100% - 30px)",
        toggleHeight: "32px",
        toggleWidth: "56px"
    },
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px"
    }
};
var getScale = function(property) {
    return function(param) {
        var _scale = param.scale, scale = _scale === void 0 ? scales.LG : _scale;
        return scaleKeyValues[scale][property];
    };
};
export var Handle = styled.div.withConfig({
    componentId: "sc-4d215cc-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
export var Input = styled.input.withConfig({
    componentId: "sc-4d215cc-1"
})(_templateObject1(), Handle, getScale("checkedLeft"), Handle, function(param) {
    var theme = param.theme;
    return theme.shadows.focus;
}, Handle, function(param) {
    var theme = param.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div.withConfig({
    componentId: "sc-4d215cc-2"
})(_templateObject2(), function(param) {
    var theme = param.theme, $checked = param.$checked, $checkedColor = param.$checkedColor, $defaultColor = param.$defaultColor;
    return theme.colors[$checked ? $checkedColor : $defaultColor];
}, function(param) {
    var theme = param.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
export default StyledToggle;
