import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  from { opacity:0 }\n  to { opacity:1 }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  from { opacity:1 }\n  to { opacity:0 }\n"
    ]);
    _templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
import { keyframes } from "styled-components";
export var appearAnimation = keyframes(_templateObject());
export var disappearAnimation = keyframes(_templateObject1());
export var animationHandler = function(element) {
    if (!element) return;
    if (element.classList.contains("appear")) {
        element.classList.remove("appear");
        element.classList.add("disappear");
    } else {
        element.classList.remove("disappear");
        element.classList.add("appear");
    }
};
export var animationVariants = {
    initial: {
        transform: "translateX(0px)"
    },
    animate: {
        transform: "translateX(0px)"
    },
    exit: {
        transform: "translateX(0px)"
    }
};
export var animationMap = {
    initial: "initial",
    animate: "animate",
    exit: "exit"
};
