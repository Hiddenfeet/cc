import _define_property from "@swc/helpers/src/_define_property.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import _tagged_template_literal from "@swc/helpers/src/_tagged_template_literal.mjs";
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ",
        " {\n    max-width: 400px;\n  }\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert, alertVariants } from "../Alert";
import { types } from "./types";
var _obj;
var alertTypeMap = (_obj = {}, _define_property(_obj, types.INFO, alertVariants.INFO), _define_property(_obj, types.SUCCESS, alertVariants.SUCCESS), _define_property(_obj, types.DANGER, alertVariants.DANGER), _define_property(_obj, types.WARNING, alertVariants.WARNING), _obj);
var StyledToast = styled.div.withConfig({
    componentId: "sc-eff9dc52-0"
})(_templateObject(), function(param) {
    var theme = param.theme;
    return theme.mediaQueries.sm;
});
export var Toast = function(_param) {
    var toast = _param.toast, onRemove = _param.onRemove, style = _param.style, ttl = _param.ttl, props = _object_without_properties(_param, [
        "toast",
        "onRemove",
        "style",
        "ttl"
    ]);
    var timer = useRef();
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type;
    var handleRemove = useCallback(function() {
        return onRemove(id);
    }, [
        id,
        onRemove
    ]);
    var handleMouseEnter = function() {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function() {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function() {
            handleRemove();
        }, ttl);
    };
    useEffect(function() {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function() {
            handleRemove();
        }, ttl);
        return function() {
            clearTimeout(timer.current);
        };
    }, [
        timer,
        ttl,
        handleRemove
    ]);
    return /*#__PURE__*/ _jsx(CSSTransition, _object_spread_props(_object_spread({
        timeout: 250,
        style: style
    }, props), {
        children: /*#__PURE__*/ _jsx(StyledToast, {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /*#__PURE__*/ _jsx(Alert, {
                title: title,
                variant: alertTypeMap[type],
                onClick: handleRemove,
                children: description
            })
        })
    }));
};
