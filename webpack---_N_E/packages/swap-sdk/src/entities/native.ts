import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import invariant from "tiny-invariant";
import { NativeCurrency } from "./nativeCurrency";
import { WNATIVE, NATIVE } from "../constants";
/**
 *
 * Native is the main usage of a 'native' currency, i.e. for BSC mainnet and all testnets
 */ export var Native = /*#__PURE__*/ function(NativeCurrency) {
    "use strict";
    _inherits(Native, NativeCurrency);
    var _super = _create_super(Native);
    function Native(param) {
        var chainId = param.chainId, decimals = param.decimals, name = param.name, symbol = param.symbol;
        _class_call_check(this, Native);
        return _super.call(this, chainId, decimals, symbol, name);
    }
    var _proto = Native.prototype;
    _proto.equals = function equals(other) {
        return other.isNative && other.chainId === this.chainId;
    };
    Native.onChain = function onChain(chainId) {
        if (chainId in this.cache) {
            return this.cache[chainId];
        }
        invariant(!!NATIVE[chainId], "NATIVE_CURRENCY");
        var _chainId = NATIVE[chainId], decimals = _chainId.decimals, name = _chainId.name, symbol = _chainId.symbol;
        return this.cache[chainId] = new Native({
            chainId: chainId,
            decimals: decimals,
            symbol: symbol,
            name: name
        });
    };
    _create_class(Native, [
        {
            key: "wrapped",
            get: function get() {
                var wnative = WNATIVE[this.chainId];
                invariant(!!wnative, "WRAPPED");
                return wnative;
            }
        }
    ]);
    return Native;
}(NativeCurrency);
Native.cache = {};
