import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  border-bottom: 1px solid ",
        ";\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Grid from "../../components/Box/Grid";
import Heading from "../../components/Heading/Heading";
import getThemeValue from "../../util/getThemeValue";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import { walletLocalStorageKey } from "./config";
import WalletCard, { MoreWalletCard } from "./WalletCard";
var WalletWrapper = styled(Box).withConfig({
    componentId: "sc-f196d15e-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
});
var getPriority = function(priority) {
    return typeof priority === "function" ? priority() : priority;
};
/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */ function getPreferredConfig(walletConfig) {
    var sortedConfig = walletConfig.sort(function(a, b) {
        return getPriority(a.priority) - getPriority(b.priority);
    });
    var preferredWalletName = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(walletLocalStorageKey);
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function(sortedWalletConfig) {
        return sortedWalletConfig.title === preferredWalletName;
    });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return [
        preferredWallet, 
    ].concat(_to_consumable_array(sortedConfig.filter(function(sortedWalletConfig) {
        return sortedWalletConfig.title !== preferredWalletName;
    })));
}
function ConnectModal(param) {
    var login = param.login, _onDismiss = param.onDismiss, onDismiss = _onDismiss === void 0 ? function() {
        return null;
    } : _onDismiss, _displayCount = param.displayCount, displayCount = _displayCount === void 0 ? 3 : _displayCount, t = param.t, connectors = param.wallets;
    var ref, ref1;
    var ref2 = useState(false), showMore = ref2[0], setShowMore = ref2[1];
    var theme = useTheme();
    var sortedConfig = getPreferredConfig(connectors);
    // Filter out WalletConnect if user is inside TrustWallet built-in browser
    var walletsToShow = ((ref = window.ethereum) === null || ref === void 0 ? void 0 : ref.isTrust) && // @ts-ignore
    !(window === null || window === void 0 ? void 0 : (ref1 = window.ethereum) === null || ref1 === void 0 ? void 0 : ref1.isSafePal) ? sortedConfig.filter(function(wallet) {
        return wallet.title !== "WalletConnect";
    }) : sortedConfig;
    var displayListConfig = showMore ? walletsToShow : walletsToShow.slice(0, displayCount);
    return /*#__PURE__*/ _jsxs(ModalContainer, {
        $minWidth: "320px",
        children: [
            /*#__PURE__*/ _jsxs(ModalHeader, {
                background: getThemeValue(theme, "colors.gradientCardHeader"),
                children: [
                    /*#__PURE__*/ _jsx(ModalTitle, {
                        children: /*#__PURE__*/ _jsx(Heading, {
                            children: t("Connect Wallet")
                        })
                    }),
                    /*#__PURE__*/ _jsx(ModalCloseButton, {
                        onDismiss: onDismiss
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(ModalBody, {
                minWidth: [
                    "320px",
                    null,
                    "340px"
                ],
                children: /*#__PURE__*/ _jsx(WalletWrapper, {
                    py: "24px",
                    maxHeight: "453px",
                    overflowY: "auto",
                    children: /*#__PURE__*/ _jsxs(Grid, {
                        gridTemplateColumns: "1fr 1fr",
                        children: [
                            displayListConfig.map(function(wallet) {
                                return /*#__PURE__*/ _jsx(Box, {
                                    children: /*#__PURE__*/ _jsx(WalletCard, {
                                        walletConfig: wallet,
                                        login: login,
                                        onDismiss: onDismiss
                                    })
                                }, wallet.title);
                            }),
                            !showMore && walletsToShow.length > 4 && /*#__PURE__*/ _jsx(MoreWalletCard, {
                                t: t,
                                onClick: function() {
                                    return setShowMore(true);
                                }
                            })
                        ]
                    })
                })
            })
        ]
    });
}
export default ConnectModal;
