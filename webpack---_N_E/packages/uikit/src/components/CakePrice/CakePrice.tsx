import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
var PriceLink = styled.a.withConfig({
    componentId: "sc-777c9bae-0"
})(_templateObject());
var CakePrice = function(param) {
    var cakePriceUsd = param.cakePriceUsd, _color = param.color, color = _color === void 0 ? "textSubtle" : _color, _showSkeleton = param.showSkeleton, showSkeleton = _showSkeleton === void 0 ? true : _showSkeleton;
    return cakePriceUsd ? /*#__PURE__*/ _jsxs(PriceLink, {
        href: "https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56",
        target: "_blank",
        children: [
            /*#__PURE__*/ _jsx(LogoRound, {
                width: "24px",
                mr: "8px"
            }),
            /*#__PURE__*/ _jsx(Text, {
                color: color,
                bold: true,
                children: "$".concat(cakePriceUsd.toFixed(3))
            })
        ]
    }) : showSkeleton ? /*#__PURE__*/ _jsx(Skeleton, {
        width: 80,
        height: 24
    }) : null;
};
export default /*#__PURE__*/ React.memo(CakePrice);
