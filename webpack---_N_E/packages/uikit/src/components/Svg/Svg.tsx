import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  animation: ",
        " 2s linear infinite;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  align-self: center; // Safari fix\n  fill: ",
        ";\n  flex-shrink: 0;\n  ",
        ";\n  ",
        ";\n\n  // Safari fix\n  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {\n    filter: none !important;\n  }\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
import styled, { css, keyframes } from "styled-components";
import { space } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
var rotate = keyframes(_templateObject());
var spinStyle = css(_templateObject1(), rotate);
var Svg = styled.svg.withConfig({
    componentId: "sc-4ba21b47-0"
})(_templateObject2(), function(param) {
    var theme = param.theme, color = param.color;
    return getThemeValue(theme, "colors.".concat(color), color);
}, function(param) {
    var spin = param.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false
};
export default Svg;
