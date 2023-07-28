import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import observerOptions from "./options";
import Wrapper from "./Wrapper";
import Placeholder from "./Placeholder";
var StyledImage = styled.img.withConfig({
    componentId: "sc-9e9837e7-0"
})(_templateObject());
var Image = function(_param) {
    var src = _param.src, alt = _param.alt, width = _param.width, height = _param.height, fallbackSrc = _param.fallbackSrc, props = _object_without_properties(_param, [
        "src",
        "alt",
        "width",
        "height",
        "fallbackSrc"
    ]);
    var imgRef = useRef(null);
    var ref = useState(false), isLoaded = ref[0], setIsLoaded = ref[1];
    var ref1 = useState(false), error = ref1[0], setError = ref1[1];
    useEffect(function() {
        var observer;
        var isSupported = "object" === "object" && window.IntersectionObserver;
        if (imgRef.current && isSupported) {
            observer = new window.IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        if (typeof (observer === null || observer === void 0 ? void 0 : observer.disconnect) === "function") {
                            observer.disconnect();
                        }
                    }
                });
            }, observerOptions);
            observer.observe(imgRef.current);
        }
        return function() {
            if (typeof (observer === null || observer === void 0 ? void 0 : observer.disconnect) === "function") {
                observer.disconnect();
            }
        };
    }, [
        src
    ]);
    return /*#__PURE__*/ _jsx(Wrapper, _object_spread_props(_object_spread({
        ref: imgRef,
        height: height,
        width: width
    }, props), {
        children: isLoaded ? /*#__PURE__*/ _jsx(StyledImage, {
            src: error && fallbackSrc ? fallbackSrc : src,
            alt: alt,
            onError: function() {
                return setError(true);
            }
        }) : /*#__PURE__*/ _jsx(Placeholder, {})
    }));
};
export default Image;
