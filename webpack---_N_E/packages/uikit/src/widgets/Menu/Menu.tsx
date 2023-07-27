import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  width: 50px;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  width: 100%;\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ",
        "px;\n  background-color: ",
        ";\n  border-bottom: 1px solid ",
        ";\n  transform: translate3d(0, 0, 0);\n\n  padding-left: 16px;\n  padding-right: 16px;\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  position: fixed;\n  top: ",
        ";\n  left: 0;\n  transition: top 0.2s;\n  height: ",
        ";\n  width: 100%;\n  z-index: 20;\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  height: ",
        ";\n  min-height: ",
        ";\n  max-height: ",
        ";\n  width: 100%;\n"
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  display: flex;\n"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"
    ]);
    _templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../contexts";
import CakePrice from "../../components/CakePrice/CakePrice";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";
var Logo = styled("img").withConfig({
    componentId: "sc-f1b6084-0"
})(_templateObject());
var Wrapper = styled.div.withConfig({
    componentId: "sc-f1b6084-1"
})(_templateObject1());
var StyledNav = styled.nav.withConfig({
    componentId: "sc-f1b6084-2"
})(_templateObject2(), MENU_HEIGHT, function(param) {
    var theme = param.theme;
    return theme.nav.background;
}, function(param) {
    var theme = param.theme;
    return theme.colors.cardBorder;
});
var FixedContainer = styled.div.withConfig({
    componentId: "sc-f1b6084-3"
})(_templateObject3(), function(param) {
    var showMenu = param.showMenu, height = param.height;
    return showMenu ? 0 : "-".concat(height, "px");
}, function(param) {
    var height = param.height;
    return "".concat(height, "px");
});
var TopBannerContainer = styled.div.withConfig({
    componentId: "sc-f1b6084-4"
})(_templateObject4(), function(param) {
    var height = param.height;
    return "".concat(height, "px");
}, function(param) {
    var height = param.height;
    return "".concat(height, "px");
}, function(param) {
    var height = param.height;
    return "".concat(height, "px");
});
var BodyWrapper = styled(Box).withConfig({
    componentId: "sc-f1b6084-5"
})(_templateObject5());
var Inner = styled.div.withConfig({
    componentId: "sc-f1b6084-6"
})(_templateObject6());
var Menu = function(param) {
    var _linkComponent = param.linkComponent, linkComponent = _linkComponent === void 0 ? "a" : _linkComponent, banner = param.banner, rightSide = param.rightSide, isDark = param.isDark, toggleTheme = param.toggleTheme, currentLang = param.currentLang, setLang = param.setLang, cakePriceUsd = param.cakePriceUsd, links = param.links, subLinks = param.subLinks, footerLinks = param.footerLinks, activeItem = param.activeItem, activeSubItem = param.activeSubItem, langs = param.langs, buyCakeLabel = param.buyCakeLabel, children = param.children;
    var ref = useMatchBreakpoints(), isMobile = ref.isMobile, isMd = ref.isMd;
    var ref1 = useState(true), showMenu = ref1[0], setShowMenu = ref1[1];
    var refPrevOffset = useRef("object" === "undefined" ? 0 : window.pageYOffset);
    var topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;
    var totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;
    useEffect(function() {
        var handleScroll = function() {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            } else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
                    // Has scroll up
                    setShowMenu(true);
                } else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function() {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [
        totalTopMenuHeight
    ]);
    // Find the home link if provided
    var homeLink = links.find(function(link) {
        return link.label === "Home";
    });
    var subLinksWithoutMobile = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function(subLink) {
        return !subLink.isMobileOnly;
    });
    var subLinksMobileOnly = subLinks === null || subLinks === void 0 ? void 0 : subLinks.filter(function(subLink) {
        return subLink.isMobileOnly;
    });
    return /*#__PURE__*/ _jsx(MenuContext.Provider, {
        value: {
            linkComponent: linkComponent
        },
        children: /*#__PURE__*/ _jsxs(Wrapper, {
            children: [
                /*#__PURE__*/ _jsxs(FixedContainer, {
                    showMenu: showMenu,
                    height: totalTopMenuHeight,
                    children: [
                        banner && /*#__PURE__*/ _jsx(TopBannerContainer, {
                            height: topBannerHeight,
                            children: banner
                        }),
                        /*#__PURE__*/ _jsxs(StyledNav, {
                            children: [
                                /*#__PURE__*/ _jsxs(Flex, {
                                    children: [
                                        /*#__PURE__*/ _jsx(Logo, {
                                            src: "/images/tokens/0x679f6863a653251C8C215e77205A7058b5bF676a.png"
                                        }),
                                        !isMobile && /*#__PURE__*/ _jsx(MenuItems, {
                                            items: links,
                                            activeItem: activeItem,
                                            activeSubItem: activeSubItem,
                                            ml: "24px"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Flex, {
                                    alignItems: "center",
                                    height: "100%",
                                    children: [
                                        !isMobile && !isMd && /*#__PURE__*/ _jsx(Box, {
                                            mr: "12px",
                                            children: /*#__PURE__*/ _jsx(CakePrice, {
                                                showSkeleton: false,
                                                cakePriceUsd: cakePriceUsd
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx(Box, {
                                            mt: "4px",
                                            children: /*#__PURE__*/ _jsx(LangSelector, {
                                                currentLang: currentLang,
                                                langs: langs,
                                                setLang: setLang,
                                                buttonScale: "xs",
                                                color: "textSubtle",
                                                hideLanguage: true
                                            })
                                        }),
                                        rightSide
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                subLinks && /*#__PURE__*/ _jsxs(Flex, {
                    justifyContent: "space-around",
                    children: [
                        /*#__PURE__*/ _jsx(SubMenuItems, {
                            items: subLinksWithoutMobile,
                            mt: "".concat(totalTopMenuHeight + 1, "px"),
                            activeItem: activeSubItem
                        }),
                        (subLinksMobileOnly === null || subLinksMobileOnly === void 0 ? void 0 : subLinksMobileOnly.length) > 0 && /*#__PURE__*/ _jsx(SubMenuItems, {
                            items: subLinksMobileOnly,
                            mt: "".concat(totalTopMenuHeight + 1, "px"),
                            activeItem: activeSubItem,
                            isMobileOnly: true
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx(BodyWrapper, {
                    mt: !subLinks ? "".concat(totalTopMenuHeight + 1, "px") : "0",
                    children: /*#__PURE__*/ _jsxs(Inner, {
                        isPushed: false,
                        showMenu: showMenu,
                        children: [
                            children,
                            /*#__PURE__*/ _jsx(Footer, {
                                items: footerLinks,
                                isDark: isDark,
                                toggleTheme: toggleTheme,
                                langs: langs,
                                setLang: setLang,
                                currentLang: currentLang,
                                cakePriceUsd: cakePriceUsd,
                                buyCakeLabel: buyCakeLabel,
                                mb: [
                                    "".concat(MOBILE_MENU_HEIGHT, "px"),
                                    null,
                                    "0px"
                                ]
                            })
                        ]
                    })
                }),
                isMobile && /*#__PURE__*/ _jsx(BottomNav, {
                    items: links,
                    activeItem: activeItem,
                    activeSubItem: activeSubItem
                })
            ]
        })
    });
};
export default Menu;
