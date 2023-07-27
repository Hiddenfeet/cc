import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { isDesktop, isMobile } from "react-device-detect";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import { Link } from "../../components/Link";
import MoreHorizontal from "../../components/Svg/Icons/MoreHorizontal";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
var WalletButton = styled(Button).attrs({
    width: "100%",
    variant: "text",
    py: "16px"
}).withConfig({
    componentId: "sc-8755c33b-0"
})(_templateObject());
export var MoreWalletCard = function(_param) {
    var t = _param.t, props = _object_without_properties(_param, [
        "t"
    ]);
    return /*#__PURE__*/ _jsxs(WalletButton, _object_spread_props(_object_spread({
        variant: "tertiary"
    }, props), {
        children: [
            /*#__PURE__*/ _jsx(MoreHorizontal, {
                width: "40px",
                mb: "8px",
                color: "textSubtle"
            }),
            /*#__PURE__*/ _jsx(Text, {
                fontSize: "14px",
                children: t("More")
            })
        ]
    }));
};
var WalletCard = function(param) {
    var login = param.login, walletConfig = param.walletConfig, onDismiss = param.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon, installed = walletConfig.installed, downloadLink = walletConfig.downloadLink;
    var linkAction = {
        onClick: function() {
            login(walletConfig.connectorId);
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }
    };
    if (installed === false && isDesktop && (downloadLink === null || downloadLink === void 0 ? void 0 : downloadLink.desktop)) {
        linkAction = {
            as: Link,
            href: downloadLink.desktop,
            style: {
                textDecoration: "none"
            },
            target: "_blank",
            rel: "noopener noreferrer"
        };
    }
    if ("object" !== "undefined" && !window.ethereum && walletConfig.href && isMobile) {
        linkAction = {
            style: {
                textDecoration: "none"
            },
            as: Link,
            href: walletConfig.href,
            target: "_blank",
            rel: "noopener noreferrer"
        };
    }
    return /*#__PURE__*/ _jsxs(WalletButton, _object_spread_props(_object_spread({
        variant: "tertiary"
    }, linkAction), {
        id: "wallet-connect-".concat(title.toLowerCase()),
        children: [
            /*#__PURE__*/ _jsx(Icon, {
                width: "40px",
                mb: "8px"
            }),
            /*#__PURE__*/ _jsx(Text, {
                fontSize: "14px",
                children: title
            })
        ]
    }));
};
export default WalletCard;
