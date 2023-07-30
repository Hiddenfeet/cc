import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  background-color: ",
        ";\n  border-color: ",
        ";\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  display: flex;\n  height: 32px;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 32px;\n  z-index: 102;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  left: 0;\n  position: absolute;\n  top: 0;\n  z-index: 102;\n\n  & > img {\n    border-radius: 50%;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import { variants } from "./types";
import { Image } from "../../../../components/Image";
import { RefreshIcon, WalletFilledIcon, WarningIcon } from "../../../../components/Svg";
var MenuIconWrapper = styled.div.withConfig({
    componentId: "sc-e5a41a22-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.background;
}, function(param) {
    var theme = param.theme, borderColor = param.borderColor;
    return theme.colors[borderColor];
});
var ProfileIcon = styled(Image).withConfig({
    componentId: "sc-e5a41a22-1"
})(_templateObject1());
export var NoProfileMenuIcon = function() {
    return /*#__PURE__*/ _jsx(MenuIconWrapper, {
        borderColor: "primary",
        children: /*#__PURE__*/ _jsx(WalletFilledIcon, {
            color: "primary",
            width: "24px"
        })
    });
};
export var PendingMenuIcon = function() {
    return /*#__PURE__*/ _jsx(MenuIconWrapper, {
        borderColor: "secondary",
        children: /*#__PURE__*/ _jsx(RefreshIcon, {
            color: "secondary",
            width: "24px",
            spin: true
        })
    });
};
export var WarningMenuIcon = function() {
    return /*#__PURE__*/ _jsx(MenuIconWrapper, {
        borderColor: "warning",
        children: /*#__PURE__*/ _jsx(WarningIcon, {
            color: "warning",
            width: "24px"
        })
    });
};
export var DangerMenuIcon = function() {
    return /*#__PURE__*/ _jsx(MenuIconWrapper, {
        borderColor: "failure",
        children: /*#__PURE__*/ _jsx(WarningIcon, {
            color: "failure",
            width: "24px"
        })
    });
};
var MenuIcon = function(param) {
    var avatarSrc = param.avatarSrc, variant = param.variant;
    if (variant === variants.DANGER) {
        return /*#__PURE__*/ _jsx(DangerMenuIcon, {});
    }
    if (variant === variants.WARNING) {
        return /*#__PURE__*/ _jsx(WarningMenuIcon, {});
    }
    if (variant === variants.PENDING) {
        return /*#__PURE__*/ _jsx(PendingMenuIcon, {});
    }
    if (!avatarSrc) {
        return /*#__PURE__*/ _jsx(NoProfileMenuIcon, {});
    }
    return /*#__PURE__*/ _jsx(ProfileIcon, {
        src: avatarSrc,
        height: 32,
        width: 32
    });
};
export default MenuIcon;
