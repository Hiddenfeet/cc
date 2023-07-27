import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      animation: ",
        " 3s ease infinite;\n      background-size: 400% 400%;\n    "
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  background: ",
        ";\n  border-radius: ",
        ";\n  color: ",
        ";\n  overflow: hidden;\n  position: relative;\n\n  ",
        "\n\n  padding: 1px 1px 3px 1px;\n\n  ",
        "\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  width: 100%;\n  height: 100%;\n  overflow: ",
        ";\n  background: ",
        ";\n  border-radius: ",
        ";\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import styled, { keyframes, css } from "styled-components";
import { space } from "styled-system";
import { Box } from "../Box";
var PromotedGradient = keyframes(_templateObject());
/**
 * Priority: Warning --> Success --> Active
 */ var getBorderColor = function(param) {
    var isActive = param.isActive, isSuccess = param.isSuccess, isWarning = param.isWarning, borderBackground = param.borderBackground, theme = param.theme;
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return "linear-gradient(180deg, ".concat(theme.colors.primaryBright, ", ").concat(theme.colors.secondary, ")");
    }
    return theme.colors.cardBorder;
};
export var StyledCard = styled.div.withConfig({
    componentId: "sc-eecfaa46-0"
})(_templateObject2(), getBorderColor, function(param) {
    var theme = param.theme;
    return theme.radii.card;
}, function(param) {
    var theme = param.theme, isDisabled = param.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, function(param) {
    var isActive = param.isActive;
    return isActive && css(_templateObject1(), PromotedGradient);
}, space);
export var StyledCardInner = styled(Box).withConfig({
    componentId: "sc-eecfaa46-1"
})(_templateObject3(), function(param) {
    var hasCustomBorder = param.hasCustomBorder;
    return hasCustomBorder ? "initial" : "inherit";
}, function(param) {
    var theme = param.theme, background = param.background;
    return background !== null && background !== void 0 ? background : theme.card.background;
}, function(param) {
    var theme = param.theme;
    return theme.radii.card;
});
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false
};
