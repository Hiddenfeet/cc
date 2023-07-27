import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: block;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  height: 44px;\n  padding: 4px 12px;\n  &:hover {\n    border-radius: 16px;\n  }\n  &:hover,\n  &:hover div {\n    background: ",
        ";\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  display: -webkit-box;\n  overflow: hidden;\n  user-select: none;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import styled from "styled-components";
import { Text } from "../Text";
export var StyledBottomNavItem = styled.button.withConfig({
    componentId: "sc-7b8c54f4-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.tertiary;
});
export var StyledBottomNavText = styled(Text).withConfig({
    componentId: "sc-7b8c54f4-1"
})(_templateObject1());
