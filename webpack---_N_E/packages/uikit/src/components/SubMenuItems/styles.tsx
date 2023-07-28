import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  ",
        " {\n    ",
        ";\n  }\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  display: block;\n  white-space: nowrap;\n  scroll-behavior: smooth;\n  ",
        " {\n    width: auto;\n    display: flex;\n  }\n  flex-grow: 1;\n  background-color: ",
        ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  position: absolute;\n  z-index: 2;\n  width: 48px;\n  height: 100%;\n  top: 0px;\n  display: flex;\n  justify-content: center;\n  opacity: 1;\n  will-change: opacity;\n  transition: 0.25s ease-in opacity;\n  &.hide {\n    pointer-events: none;\n    opacity: 0;\n    transition: 0.25s ease-out opacity;\n  }\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  ",
        "\n  left: 0px;\n  background: ",
        ";\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  ",
        "\n  right: 0px;\n  background: ",
        ";\n"
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  display: inline-block;\n  vertical-align: top;\n  scroll-snap-align: start;\n"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
import styled, { css } from "styled-components";
import { Flex, Box } from "../Box";
export var SubMenuItemWrapper = styled(Flex).withConfig({
    componentId: "sc-22a2e93a-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.mediaQueries.sm;
}, function(param) {
    var $isMobileOnly = param.$isMobileOnly;
    return $isMobileOnly ? "display:none" : "";
});
var StyledSubMenuItems = styled(Flex).withConfig({
    componentId: "sc-22a2e93a-1"
})(_templateObject1(), function(param) {
    var theme = param.theme;
    return theme.mediaQueries.md;
}, function(param) {
    var theme = param.theme;
    return "".concat(theme.colors.backgroundAlt2);
});
var maskSharedStyle = css(_templateObject2());
export var LeftMaskLayer = styled.div.withConfig({
    componentId: "sc-22a2e93a-2"
})(_templateObject3(), maskSharedStyle, function(param) {
    var theme = param.theme;
    return theme.isDark ? "linear-gradient(90deg, #27262c 29.76%, rgba(39,38,44, 0) 100%)" : "linear-gradient(90deg, #ffffff 29.76%, rgba(255, 255, 255, 0) 100%)";
});
export var RightMaskLayer = styled.div.withConfig({
    componentId: "sc-22a2e93a-3"
})(_templateObject4(), maskSharedStyle, function(param) {
    var theme = param.theme;
    return theme.isDark ? "linear-gradient(270deg, #27262c 0%, rgba(39,38,44, 0) 87.5%)" : "linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 87.5%)";
});
export var StyledSubMenuItemWrapper = styled(Box).withConfig({
    componentId: "sc-22a2e93a-4"
})(_templateObject5());
export default StyledSubMenuItems;
