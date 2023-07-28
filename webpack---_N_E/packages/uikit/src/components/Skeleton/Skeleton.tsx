import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ",
        " 0.3s ease-in-out forwards;\n  }\n  &.disappear {\n    animation: ",
        " 0.3s ease-in-out forwards;\n  }\n"
    ]);
    _templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  position: relative;\n  ",
        "\n  ",
        "\n  overflow: hidden;\n"
    ]);
    _templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n  min-height: 20px;\n  display: block;\n  background-color: ",
        ";\n  border-radius: ",
        ";\n  ",
        "\n  ",
        "\n  ",
        "\n"
    ]);
    _templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n  animation: ",
        " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"
    ]);
    _templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ',
        " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"
    ]);
    _templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence, domAnimation, LazyMotion, m as Motion } from "framer-motion";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { layout, space, borderRadius } from "styled-system";
import { animation as ANIMATION, variant as VARIANT } from "./types";
import { appearAnimation, disappearAnimation, animationVariants, animationMap, animationHandler } from "../../util/animationToolkit";
var waves = keyframes(_templateObject());
var pulse = keyframes(_templateObject1());
var AnimationWrapper = styled(Motion.div).withConfig({
    componentId: "sc-94de765-0"
})(_templateObject2(), appearAnimation, disappearAnimation);
var SkeletonWrapper = styled.div.withConfig({
    componentId: "sc-94de765-1"
})(_templateObject3(), layout, space);
var Root = styled.div.withConfig({
    componentId: "sc-94de765-2"
})(_templateObject4(), function(param) {
    var theme = param.theme;
    return theme.colors.backgroundDisabled;
}, function(param) {
    var variant = param.variant, theme = param.theme;
    return variant === VARIANT.CIRCLE ? theme.radii.circle : theme.radii.small;
}, layout, space, borderRadius);
var Pulse = styled(Root).withConfig({
    componentId: "sc-94de765-3"
})(_templateObject5(), pulse);
var Waves = styled(Root).withConfig({
    componentId: "sc-94de765-4"
})(_templateObject6(), waves);
var Skeleton = function(_param) {
    var _variant = _param.variant, variant = _variant === void 0 ? VARIANT.RECT : _variant, _animation = _param.animation, animation = _animation === void 0 ? ANIMATION.PULSE : _animation, props = _object_without_properties(_param, [
        "variant",
        "animation"
    ]);
    if (animation === ANIMATION.WAVES) {
        return /*#__PURE__*/ _jsx(Waves, _object_spread({
            variant: variant
        }, props));
    }
    return /*#__PURE__*/ _jsx(Pulse, _object_spread({
        variant: variant
    }, props));
};
export var SkeletonV2 = function(_param) {
    var _variant = _param.variant, variant = _variant === void 0 ? VARIANT.RECT : _variant, _animation = _param.animation, animation = _animation === void 0 ? ANIMATION.PULSE : _animation, _isDataReady = _param.isDataReady, isDataReady = _isDataReady === void 0 ? false : _isDataReady, children = _param.children, wrapperProps = _param.wrapperProps, _skeletonTop = _param.skeletonTop, skeletonTop = _skeletonTop === void 0 ? "0" : _skeletonTop, _skeletonLeft = _param.skeletonLeft, skeletonLeft = _skeletonLeft === void 0 ? "0" : _skeletonLeft, width = _param.width, height = _param.height, mr = _param.mr, ml = _param.ml, props = _object_without_properties(_param, [
        "variant",
        "animation",
        "isDataReady",
        "children",
        "wrapperProps",
        "skeletonTop",
        "skeletonLeft",
        "width",
        "height",
        "mr",
        "ml"
    ]);
    var animationRef = useRef(null);
    var skeletonRef = useRef(null);
    return /*#__PURE__*/ _jsx(SkeletonWrapper, _object_spread_props(_object_spread({
        width: width,
        height: height,
        mr: mr,
        ml: ml
    }, wrapperProps), {
        children: /*#__PURE__*/ _jsx(LazyMotion, {
            features: domAnimation,
            children: /*#__PURE__*/ _jsxs(AnimatePresence, {
                children: [
                    isDataReady && /*#__PURE__*/ _jsx(AnimationWrapper, _object_spread_props(_object_spread({
                        ref: animationRef,
                        onAnimationStart: function() {
                            return animationHandler(animationRef.current);
                        }
                    }, animationMap), {
                        variants: animationVariants,
                        transition: {
                            duration: 0.3
                        },
                        children: children
                    }), "content"),
                    !isDataReady && /*#__PURE__*/ _jsx(AnimationWrapper, _object_spread_props(_object_spread({
                        style: {
                            position: "absolute",
                            top: skeletonTop,
                            left: skeletonLeft
                        },
                        ref: skeletonRef,
                        onAnimationStart: function() {
                            return animationHandler(skeletonRef.current);
                        }
                    }, animationMap), {
                        variants: animationVariants,
                        transition: {
                            duration: 0.3
                        },
                        children: animation === ANIMATION.WAVES ? /*#__PURE__*/ _jsx(Waves, _object_spread_props(_object_spread({
                            variant: variant
                        }, props), {
                            width: width,
                            height: height
                        })) : /*#__PURE__*/ _jsx(Pulse, _object_spread_props(_object_spread({
                            variant: variant
                        }, props), {
                            width: width,
                            height: height
                        }))
                    }), "skeleton")
                ]
            })
        })
    }));
};
export default Skeleton;
