import _to_consumable_array from "@swc/helpers/src/_to_consumable_array.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useState } from "react";
import kebabCase from "lodash/kebabCase";
import { types as toastTypes } from "../../components/Toast";
export var ToastsContext = /*#__PURE__*/ createContext(undefined);
export var ToastsProvider = function(param) {
    var children = param.children;
    var ref = useState([]), toasts = ref[0], setToasts = ref[1];
    var toast = useCallback(function(param) {
        var title = param.title, description = param.description, type = param.type;
        setToasts(function(prevToasts) {
            var id = kebabCase(title);
            // Remove any existing toasts with the same id
            var currentToasts = prevToasts.filter(function(prevToast) {
                return prevToast.id !== id;
            });
            return [
                {
                    id: id,
                    title: title,
                    description: description,
                    type: type
                }, 
            ].concat(_to_consumable_array(currentToasts));
        });
    }, [
        setToasts
    ]);
    var toastError = useCallback(function(title, description) {
        return toast({
            title: title,
            description: description,
            type: toastTypes.DANGER
        });
    }, [
        toast
    ]);
    var toastInfo = useCallback(function(title, description) {
        return toast({
            title: title,
            description: description,
            type: toastTypes.INFO
        });
    }, [
        toast
    ]);
    var toastSuccess = useCallback(function(title, description) {
        return toast({
            title: title,
            description: description,
            type: toastTypes.SUCCESS
        });
    }, [
        toast
    ]);
    var toastWarning = useCallback(function(title, description) {
        return toast({
            title: title,
            description: description,
            type: toastTypes.WARNING
        });
    }, [
        toast
    ]);
    var clear = useCallback(function() {
        return setToasts([]);
    }, []);
    var remove = useCallback(function(id) {
        setToasts(function(prevToasts) {
            return prevToasts.filter(function(prevToast) {
                return prevToast.id !== id;
            });
        });
    }, []);
    return /*#__PURE__*/ _jsx(ToastsContext.Provider, {
        value: {
            toasts: toasts,
            clear: clear,
            remove: remove,
            toastError: toastError,
            toastInfo: toastInfo,
            toastSuccess: toastSuccess,
            toastWarning: toastWarning
        },
        children: children
    });
};
