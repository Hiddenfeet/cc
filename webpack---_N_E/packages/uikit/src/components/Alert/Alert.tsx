import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  background-color: ",
        ";\n  border-radius: 16px 0 0 16px;\n  color: ",
        ";\n  padding: 12px;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ",
        ";\n  padding-top: 12px;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  background-color: ",
        ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import CheckmarkCircleIcon from "../Svg/Icons/CheckmarkCircle";
import ErrorIcon from "../Svg/Icons/Error";
import BlockIcon from "../Svg/Icons/Block";
import InfoIcon from "../Svg/Icons/Info";
import { Text } from "../Text";
import { IconButton } from "../Button";
import { CloseIcon } from "../Svg";
import Flex from "../Box/Flex";
import { variants } from "./types";
var getThemeColor = function(param) {
    var theme = param.theme, _variant = param.variant, variant = _variant === void 0 ? variants.INFO : _variant;
    switch(variant){
        case variants.DANGER:
            return theme.colors.failure;
        case variants.WARNING:
            return theme.colors.warning;
        case variants.SUCCESS:
            return theme.colors.success;
        case variants.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function() {
    var variant = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : variants.INFO;
    switch(variant){
        case variants.DANGER:
            return BlockIcon;
        case variants.WARNING:
            return ErrorIcon;
        case variants.SUCCESS:
            return CheckmarkCircleIcon;
        case variants.INFO:
        default:
            return InfoIcon;
    }
};
var IconLabel = styled.div.withConfig({
    componentId: "sc-c80d62ca-0"
})(_templateObject(), getThemeColor, function(param) {
    var theme = param.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div.withConfig({
    componentId: "sc-c80d62ca-1"
})(_templateObject1(), function(param) {
    var hasHandler = param.hasHandler;
    return hasHandler ? "".concat(withHandlerSpacing, "px") : "12px";
});
var CloseHandler = styled.div.withConfig({
    componentId: "sc-c80d62ca-2"
})(_templateObject2());
var StyledAlert = styled(Flex).withConfig({
    componentId: "sc-c80d62ca-3"
})(_templateObject3(), function(param) {
    var theme = param.theme;
    return theme.alert.background;
});
var Alert = function(param) {
    var title = param.title, children = param.children, variant = param.variant, onClick = param.onClick;
    var Icon = getIcon(variant);
    return /*#__PURE__*/ _jsxs(StyledAlert, {
        children: [
            /*#__PURE__*/ _jsx(IconLabel, {
                variant: variant,
                hasDescription: !!children,
                children: /*#__PURE__*/ _jsx(Icon, {
                    color: "currentColor",
                    width: "24px"
                })
            }),
            /*#__PURE__*/ _jsxs(Details, {
                hasHandler: !!onClick,
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        bold: true,
                        children: title
                    }),
                    typeof children === "string" ? /*#__PURE__*/ _jsx(Text, {
                        as: "p",
                        children: children
                    }) : children
                ]
            }),
            onClick && /*#__PURE__*/ _jsx(CloseHandler, {
                children: /*#__PURE__*/ _jsx(IconButton, {
                    scale: "sm",
                    variant: "text",
                    onClick: onClick,
                    children: /*#__PURE__*/ _jsx(CloseIcon, {
                        width: "24px",
                        color: "currentColor"
                    })
                })
            })
        ]
    });
};
export default Alert;
