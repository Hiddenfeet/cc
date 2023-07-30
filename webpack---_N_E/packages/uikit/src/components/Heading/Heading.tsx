import _define_property from "@swc/helpers/src/_define_property.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  font-size: ",
        ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ",
        " {\n    font-size: ",
        ";\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import Text from "../Text/Text";
import { tags, scales } from "./types";
var _obj;
var style = (_obj = {}, _define_property(_obj, scales.MD, {
    fontSize: "20px",
    fontSizeLg: "20px"
}), _define_property(_obj, scales.LG, {
    fontSize: "24px",
    fontSizeLg: "24px"
}), _define_property(_obj, scales.XL, {
    fontSize: "32px",
    fontSizeLg: "40px"
}), _define_property(_obj, scales.XXL, {
    fontSize: "48px",
    fontSizeLg: "64px"
}), _obj);
var Heading = styled(Text).attrs({
    bold: true
}).withConfig({
    componentId: "sc-4eb7e0a9-0"
})(_templateObject(), function(param) {
    var scale = param.scale;
    return style[scale || scales.MD].fontSize;
}, function(param) {
    var theme = param.theme;
    return theme.mediaQueries.lg;
}, function(param) {
    var scale = param.scale;
    return style[scale || scales.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2
};
export default Heading;
