import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: grid;\n  ",
        "\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { grid, flexbox } from "styled-system";
import Box from "./Box";
var Grid = styled(Box).withConfig({
    componentId: "sc-b3fe3fbc-0"
})(_templateObject(), flexbox, grid);
export default Grid;
