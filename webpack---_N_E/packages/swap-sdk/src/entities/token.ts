import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import invariant from "tiny-invariant";
import { validateAndParseAddress } from "../utils";
import { BaseCurrency } from "./baseCurrency";
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */ export var Token = /*#__PURE__*/ function(BaseCurrency) {
    "use strict";
    _inherits(Token, BaseCurrency);
    var _super = _create_super(Token);
    function Token(chainId, address, decimals, symbol, name, projectLink) {
        _class_call_check(this, Token);
        var _this;
        _this = _super.call(this, chainId, decimals, symbol, name);
        _this.isNative = false;
        _this.isToken = true;
        _this.address = validateAndParseAddress(address);
        _this.projectLink = projectLink;
        return _this;
    }
    var _proto = Token.prototype;
    /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */ _proto.equals = function equals(other) {
        return other.isToken && this.chainId === other.chainId && this.address === other.address;
    };
    /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */ _proto.sortsBefore = function sortsBefore(other) {
        invariant(this.chainId === other.chainId, "CHAIN_IDS");
        invariant(this.address !== other.address, "ADDRESSES");
        return this.address.toLowerCase() < other.address.toLowerCase();
    };
    _create_class(Token, [
        {
            key: "wrapped",
            get: /**
   * Return this token, which does not need to be wrapped
   */ function get() {
                return this;
            }
        },
        {
            key: "serialize",
            get: function get() {
                return {
                    address: this.address,
                    chainId: this.chainId,
                    decimals: this.decimals,
                    symbol: this.symbol,
                    name: this.name,
                    projectLink: this.projectLink
                };
            }
        }
    ]);
    return Token;
}(BaseCurrency);
