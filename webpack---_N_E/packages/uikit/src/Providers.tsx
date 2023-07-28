import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from "styled-components";
import { MatchBreakpointsProvider } from "./contexts/MatchBreakpoints/Provider";
import { ToastsProvider } from "./contexts/ToastsContext/Provider";
export var UIKitProvider = function(param) {
    var theme = param.theme, children = param.children;
    return /*#__PURE__*/ _jsx(ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ _jsx(MatchBreakpointsProvider, {
            children: /*#__PURE__*/ _jsx(ToastsProvider, {
                children: children
            })
        })
    });
};
