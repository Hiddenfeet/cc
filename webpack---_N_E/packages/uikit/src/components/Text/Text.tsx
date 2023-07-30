import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  color: ",
        ";\n  font-weight: ",
        ";\n  line-height: 1.5;\n  ",
        "\n  ",
        "\n\n  ",
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
import { space, typography, layout } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
var getColor = function(param) {
    var color = param.color, theme = param.theme;
    return getThemeValue(theme, "colors.".concat(color), color);
};
var Text = styled.div.withConfig({
    componentId: "sc-c56ebc7d-0"
})(_templateObject(), getColor, function(param) {
    var bold = param.bold;
    return bold ? 600 : 400;
}, function(param) {
    var textTransform = param.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, function(param) {
    var ellipsis = param.ellipsis;
    return ellipsis && "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout, function(param) {
    var small = param.small;
    return small && "font-size: 14px;";
});
Text.defaultProps = {
    color: "text",
    small: false,
    fontSize: "16px",
    ellipsis: false
};
export default Text;
