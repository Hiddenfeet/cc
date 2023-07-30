import _extends from "@swc/helpers/src/_extends.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import { socials } from "../config";
var SocialLinks = function(_param) /*#__PURE__*/ {
    var props = _extends({}, _param);
    return _jsx(Flex, _object_spread_props(_object_spread({}, props), {
        "data-theme": "dark",
        children: socials.map(function(social, index) {
            var iconProps = {
                width: "20px",
                color: "textSubtle",
                style: {
                    cursor: "pointer"
                }
            };
            var Icon = social.icon;
            var mr = index < socials.length - 1 ? "24px" : 0;
            return /*#__PURE__*/ _jsx(Link, {
                external: true,
                href: social.href,
                "aria-label": social.label,
                mr: mr,
                children: /*#__PURE__*/ _jsx(Icon, _object_spread({}, iconProps))
            }, social.label);
        })
    }));
};
export default /*#__PURE__*/ React.memo(SocialLinks, function() {
    return true;
});
