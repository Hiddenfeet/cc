import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  padding: 0;\n  width: ",
        ";\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import Button from "./Button";
var IconButton = styled(Button).withConfig({
    componentId: "sc-a97aa614-0"
})(_templateObject(), function(param) {
    var scale = param.scale;
    return scale === "sm" ? "32px" : "48px";
});
export default IconButton;
