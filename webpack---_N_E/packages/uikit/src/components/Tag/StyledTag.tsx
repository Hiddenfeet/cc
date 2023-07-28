import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
        "\n\n  ",
        "\n  ",
        "\n  ",
        "\n  ",
        "\n\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { space, variant, typography } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { variants } from "./types";
var getOutlineStyles = function(param) {
    var outline = param.outline, theme = param.theme, tmp = param.variant, variantKey = tmp === void 0 ? variants.PRIMARY : tmp;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: ".concat(color, ";\n      background: ").concat(theme.colors.background, ";\n      border: 2px solid ").concat(color, ";\n    ");
    }
    return "";
};
export var StyledTag = styled.div.withConfig({
    componentId: "sc-26d88be7-0"
})(_templateObject(), function(param) {
    var textTransform = param.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, variant({
    prop: "scale",
    variants: scaleVariants
}), variant({
    variants: styleVariants
}), space, typography, getOutlineStyles);
export default null;
