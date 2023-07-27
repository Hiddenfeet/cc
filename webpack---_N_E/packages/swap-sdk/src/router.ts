import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import { validateAndParseAddress } from "./utils";
import { TradeType } from "./constants";
import invariant from "tiny-invariant";
function toHex(currencyAmount) {
    return "0x".concat(currencyAmount.quotient.toString(16));
}
var ZERO_HEX = "0x0";
/**
 * Represents the Pancake Router, and has static methods for helping execute trades.
 */ export var Router = /*#__PURE__*/ function() {
    "use strict";
    function Router() {
        _class_call_check(this, Router);
    }
    /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */ Router.swapCallParameters = function swapCallParameters(trade, options) {
        var etherIn = trade.inputAmount.currency.isNative;
        var etherOut = trade.outputAmount.currency.isNative;
        // the router does not support both ether in and out
        invariant(!(etherIn && etherOut), "ETHER_IN_OUT");
        invariant(!("ttl" in options) || options.ttl > 0, "TTL");
        var to = validateAndParseAddress(options.recipient);
        var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
        var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
        var path = trade.route.path.map(function(token) {
            return token.address;
        });
        var deadline = "ttl" in options ? "0x".concat((Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16)) : "0x".concat(options.deadline.toString(16));
        var useFeeOnTransfer = Boolean(options.feeOnTransfer);
        var methodName;
        var args;
        var value;
        switch(trade.tradeType){
            case TradeType.EXACT_INPUT:
                if (etherIn) {
                    methodName = useFeeOnTransfer ? "swapExactETHForTokensSupportingFeeOnTransferTokens" : "swapExactETHForTokens";
                    // (uint amountOutMin, address[] calldata path, address to, uint deadline)
                    args = [
                        amountOut,
                        path,
                        to,
                        deadline
                    ];
                    value = amountIn;
                } else if (etherOut) {
                    methodName = useFeeOnTransfer ? "swapExactTokensForETHSupportingFeeOnTransferTokens" : "swapExactTokensForETH";
                    // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
                    args = [
                        amountIn,
                        amountOut,
                        path,
                        to,
                        deadline
                    ];
                    value = ZERO_HEX;
                } else {
                    methodName = useFeeOnTransfer ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens";
                    // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
                    args = [
                        amountIn,
                        amountOut,
                        path,
                        to,
                        deadline
                    ];
                    value = ZERO_HEX;
                }
                break;
            case TradeType.EXACT_OUTPUT:
                invariant(!useFeeOnTransfer, "EXACT_OUT_FOT");
                if (etherIn) {
                    methodName = "swapETHForExactTokens";
                    // (uint amountOut, address[] calldata path, address to, uint deadline)
                    args = [
                        amountOut,
                        path,
                        to,
                        deadline
                    ];
                    value = amountIn;
                } else if (etherOut) {
                    methodName = "swapTokensForExactETH";
                    // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
                    args = [
                        amountOut,
                        amountIn,
                        path,
                        to,
                        deadline
                    ];
                    value = ZERO_HEX;
                } else {
                    methodName = "swapTokensForExactTokens";
                    // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
                    args = [
                        amountOut,
                        amountIn,
                        path,
                        to,
                        deadline
                    ];
                    value = ZERO_HEX;
                }
                break;
        }
        return {
            methodName: methodName,
            args: args,
            value: value
        };
    };
    return Router;
}();
