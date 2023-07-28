import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
function useWalletModal(login, t, wallets) {
    var ref = _sliced_to_array(useModal(/*#__PURE__*/ _jsx(ConnectModal, {
        login: login,
        t: t,
        wallets: wallets
    })), 1), onPresentConnectModal = ref[0];
    return {
        onPresentConnectModal: onPresentConnectModal
    };
}
export default useWalletModal;
