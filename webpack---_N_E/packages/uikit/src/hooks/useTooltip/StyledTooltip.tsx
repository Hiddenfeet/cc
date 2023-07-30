import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        '\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: "";\n    transform: rotate(45deg);\n    background: ',
        ";\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ",
        ";\n  color: ",
        ";\n  box-shadow: ",
        ';\n\n  &[data-popper-placement^="top"] > ',
        ' {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^="bottom"] > ',
        ' {\n    top: -4px;\n  }\n\n  &[data-popper-placement^="left"] > ',
        ' {\n    right: -4px;\n  }\n\n  &[data-popper-placement^="right"] > ',
        " {\n    left: -4px;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { m as Motion } from "framer-motion";
export var Arrow = styled.div.withConfig({
    componentId: "sc-3db373e4-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.tooltip.background;
});
export var StyledTooltip = styled(Motion.div).withConfig({
    componentId: "sc-3db373e4-1"
})(_templateObject1(), function(param) {
    var theme = param.theme;
    return theme.tooltip.background;
}, function(param) {
    var theme = param.theme;
    return theme.tooltip.text;
}, function(param) {
    var theme = param.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
