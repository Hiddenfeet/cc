import _define_property from "@swc/helpers/src/_define_property.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useState } from "react";
import { breakpoints } from "@pancakeswap/ui";
import { useIsomorphicEffect } from "../../hooks/useIsomorphicEffect";
/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */ var mediaQueries = function() {
    var prevMinWidth = 0;
    return Object.keys(breakpoints).reduce(function(accum, size, index) {
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpoints).length - 1) {
            return _object_spread_props(_object_spread({}, accum), _define_property({}, size, "(min-width: ".concat(prevMinWidth, "px)")));
        }
        var minWidth = prevMinWidth;
        // @ts-ignore
        var breakpoint = breakpoints[size];
        // Min width for next iteration
        prevMinWidth = breakpoint;
        return _object_spread_props(_object_spread({}, accum), _define_property({}, size, "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint - 1, "px)")));
    }, {});
}();
var getKey = function(size) {
    return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1));
};
var getState = function() {
    var s = Object.keys(mediaQueries).reduce(function(accum, size) {
        var key = getKey(size);
        if ("object" === "undefined") {
            return _object_spread_props(_object_spread({}, accum), _define_property({}, key, false));
        }
        var mql = typeof (window === null || window === void 0 ? void 0 : window.matchMedia) === "function" ? window.matchMedia(mediaQueries[size]) : null;
        var ref;
        return _object_spread_props(_object_spread({}, accum), _define_property({}, key, (ref = mql === null || mql === void 0 ? void 0 : mql.matches) !== null && ref !== void 0 ? ref : false));
    }, {});
    return s;
};
export var MatchBreakpointsContext = /*#__PURE__*/ createContext({
    isMobile: false,
    isTablet: false,
    isDesktop: false
});
export var getBreakpointChecks = function(state) {
    return _object_spread_props(_object_spread({}, state), {
        isMobile: state.isXs || state.isSm,
        isTablet: state.isMd || state.isLg,
        isDesktop: state.isXl || state.isXxl
    });
};
export var MatchBreakpointsProvider = function(param) {
    var children = param.children;
    var ref = useState(function() {
        return getBreakpointChecks(getState());
    }), state = ref[0], setState = ref[1];
    useIsomorphicEffect(function() {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function(size) {
            var mql;
            var handler;
            if (typeof (window === null || window === void 0 ? void 0 : window.matchMedia) === "function") {
                mql = window.matchMedia(mediaQueries[size]);
                handler = function(matchMediaQuery) {
                    var key = getKey(size);
                    setState(function(prevState) {
                        return getBreakpointChecks(_object_spread_props(_object_spread({}, prevState), _define_property({}, key, matchMediaQuery.matches)));
                    });
                };
                // Safari < 14 fix
                if (mql.addEventListener) {
                    mql.addEventListener("change", handler);
                }
            }
            return function() {
                // Safari < 14 fix
                if (mql === null || mql === void 0 ? void 0 : mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        setState(getBreakpointChecks(getState()));
        return function() {
            handlers.forEach(function(unsubscribe) {
                unsubscribe();
            });
        };
    }, []);
    return /*#__PURE__*/ _jsx(MatchBreakpointsContext.Provider, {
        value: state,
        children: children
    });
};
