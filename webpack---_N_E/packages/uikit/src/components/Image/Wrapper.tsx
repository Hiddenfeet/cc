import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  max-height: ",
        "px;\n  max-width: ",
        'px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: "";\n    display: block;\n    padding-top: ',
        "%;\n  }\n\n  ",
        "\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { space } from "styled-system";
var StyledWrapper = styled.div.withConfig({
    componentId: "sc-c1f44966-0"
})(_templateObject(), function(param) {
    var $height = param.$height;
    return $height;
}, function(param) {
    var $width = param.$width;
    return $width;
}, function(param) {
    var $width = param.$width, $height = param.$height;
    return $height / $width * 100;
}, space);
var Wrapper = /*#__PURE__*/ forwardRef(function(_param, ref) {
    var width = _param.width, height = _param.height, props = _object_without_properties(_param, [
        "width",
        "height"
    ]);
    return /*#__PURE__*/ _jsx(StyledWrapper, _object_spread({
        ref: ref,
        $width: width,
        $height: height
    }, props));
});
export default Wrapper;
