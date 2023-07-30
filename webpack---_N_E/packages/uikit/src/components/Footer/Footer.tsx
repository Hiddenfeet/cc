import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Flex } from "../Box";
import { StyledFooter, StyledSocialLinks, StyledToolsContainer } from "./styles";
import LangSelector from "../LangSelector/LangSelector";
import { ThemeSwitcher } from "../ThemeSwitcher";
var MenuItem = function(_param) {
    var items = _param.items, isDark = _param.isDark, toggleTheme = _param.toggleTheme, currentLang = _param.currentLang, langs = _param.langs, setLang = _param.setLang, cakePriceUsd = _param.cakePriceUsd, buyCakeLabel = _param.buyCakeLabel, props = _object_without_properties(_param, [
        "items",
        "isDark",
        "toggleTheme",
        "currentLang",
        "langs",
        "setLang",
        "cakePriceUsd",
        "buyCakeLabel"
    ]);
    return /*#__PURE__*/ _jsx(StyledFooter, _object_spread_props(_object_spread({
        p: [
            "0px 16px",
            null,
            "15px 40px 12px 40px"
        ]
    }, props), {
        justifyContent: "center",
        children: /*#__PURE__*/ _jsx(Flex, {
            flexDirection: "column",
            width: [
                "100%",
                null,
                "1200px;"
            ],
            children: /*#__PURE__*/ _jsxs(StyledToolsContainer, _object_spread_props(_object_spread({}, props), {
                order: [
                    1,
                    null,
                    3
                ],
                flexDirection: [
                    "row",
                    null,
                    "row-reverse"
                ],
                justifyContent: "space-between",
                alignItems: "center",
                style: {
                    gap: "20px"
                },
                children: [
                    /*#__PURE__*/ _jsx(Flex, {
                        order: [
                            2,
                            null,
                            1
                        ],
                        alignItems: "center",
                        children: /*#__PURE__*/ _jsx(StyledSocialLinks, {
                            pb: [
                                "0",
                                null,
                                "0"
                            ],
                            mb: [
                                "0",
                                null,
                                "0"
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs(Flex, {
                        order: [
                            1,
                            null,
                            1
                        ],
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ _jsx(ThemeSwitcher, {
                                isDark: isDark,
                                toggleTheme: toggleTheme
                            }),
                            /*#__PURE__*/ _jsx(LangSelector, {
                                currentLang: currentLang,
                                langs: langs,
                                setLang: setLang,
                                color: "textSubtle",
                                dropdownPosition: "top-right"
                            })
                        ]
                    })
                ]
            }))
        })
    }));
};
export default MenuItem;
