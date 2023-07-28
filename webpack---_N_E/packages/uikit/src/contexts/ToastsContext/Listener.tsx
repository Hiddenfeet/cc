import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { ToastContainer } from "../../components/Toast";
import { useToast } from "./useToast";
var ToastListener = function() {
    var ref = useToast(), toasts = ref.toasts, remove = ref.remove;
    var handleRemove = useCallback(function(id) {
        return remove(id);
    }, [
        remove
    ]);
    return /*#__PURE__*/ _jsx(ToastContainer, {
        toasts: toasts,
        onRemove: handleRemove
    });
};
export default ToastListener;
