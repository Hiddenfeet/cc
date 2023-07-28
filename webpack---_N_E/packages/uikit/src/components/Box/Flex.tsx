import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";
var Flex = styled(Box).withConfig({
    componentId: "sc-32d5f017-0"
})(_templateObject(), flexbox);
export default Flex;
