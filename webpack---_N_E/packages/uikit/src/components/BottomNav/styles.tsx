import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  padding: 5px 8px;\n  background: ",
        ";\n  border-top: 1px solid ",
        ';\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*="TokenPocket_iOS"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 20;\n'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { Flex } from "../Box";
var StyledBottomNav = styled(Flex).withConfig({
    componentId: "sc-760c5199-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.backgroundAlt;
}, function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
});
export default StyledBottomNav;
