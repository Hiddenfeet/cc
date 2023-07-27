import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  color: ",
        ";\n  padding: 0 8px;\n  border-radius: 8px;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import Button from "../Button/Button";
var MenuButton = styled(Button).withConfig({
    componentId: "sc-f81265b6-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm"
};
export default MenuButton;
