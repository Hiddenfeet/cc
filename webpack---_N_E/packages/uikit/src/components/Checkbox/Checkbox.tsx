import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
        ";\n  width: ",
        ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",
        ";\n  box-shadow: ",
        ';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',
        ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
        ";\n  }\n\n  &:checked {\n    background-color: ",
        ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { scales } from "./types";
var getScale = function(param) {
    var scale = param.scale;
    switch(scale){
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({
    type: "checkbox"
}).withConfig({
    componentId: "sc-11bd21f1-0"
})(_templateObject(), getScale, getScale, function(param) {
    var theme = param.theme;
    return theme.colors.input;
}, function(param) {
    var theme = param.theme;
    return theme.shadows.inset;
}, function(param) {
    var theme = param.theme;
    return theme.shadows.focus;
}, function(param) {
    var theme = param.theme;
    return theme.shadows.focus;
}, function(param) {
    var theme = param.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD
};
export default Checkbox;
