import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import invariant from "tiny-invariant";
/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */ export var BaseCurrency = function BaseCurrency(chainId, decimals, symbol, name) {
    "use strict";
    _class_call_check(this, BaseCurrency);
    invariant(Number.isSafeInteger(chainId), "CHAIN_ID");
    invariant(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), "DECIMALS");
    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
};
