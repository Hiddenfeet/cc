import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import styled from "styled-components";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import Text from "../Text/Text";
var StyledLink = styled(Text).withConfig({
    componentId: "sc-2d8b3c99-0"
})(_templateObject());
var Link = function(_param) {
    var external = _param.external, props = _object_without_properties(_param, [
        "external"
    ]);
    var internalProps = external ? EXTERNAL_LINK_PROPS : {};
    return /*#__PURE__*/ _jsx(StyledLink, _object_spread({
        as: "a",
        bold: true
    }, internalProps, props));
};
/* eslint-disable react/default-props-match-prop-types */ Link.defaultProps = {
    color: "primary"
};
export default Link;
