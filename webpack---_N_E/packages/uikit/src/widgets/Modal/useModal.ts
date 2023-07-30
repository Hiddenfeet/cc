import React, { useCallback, useContext, useEffect } from "react";
import get from "lodash/get";
import { Context } from "./ModalContext";
var useModal = function(modal) {
    var closeOnOverlayClick = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, updateOnPropsChange = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, modalId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "defaultNodeId";
    var ref = useContext(Context), isOpen = ref.isOpen, nodeId = ref.nodeId, modalNode = ref.modalNode, setModalNode = ref.setModalNode, onPresent = ref.onPresent, onDismiss = ref.onDismiss;
    var onPresentCallback = useCallback(function() {
        onPresent(modal, modalId, closeOnOverlayClick);
    }, [
        modal,
        modalId,
        onPresent,
        closeOnOverlayClick
    ]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is static there is no need for updates, use when you expect props to change
    useEffect(function() {
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            var modalProps = get(modal, "props");
            var oldModalProps = get(modalNode, "props");
            // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
            // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
            // and online diff checker says both objects are identical but lodash isEqual thinks they are different
            // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
            // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
            // would be great to simplify the logic here
            if (modalProps && oldModalProps && JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [
        updateOnPropsChange,
        nodeId,
        modalId,
        isOpen,
        modal,
        modalNode,
        setModalNode
    ]);
    return [
        onPresentCallback,
        onDismiss
    ];
};
export default useModal;
