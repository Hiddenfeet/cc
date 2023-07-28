import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _define_property from "@swc/helpers/src/_define_property.mjs";
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import { getCreate2Address } from "@ethersproject/address";
import { keccak256, pack } from "@ethersproject/solidity";
import JSBI from "jsbi";
import invariant from "tiny-invariant";
import { Price } from "./fractions/price";
import { FACTORY_ADDRESS_MAP, FIVE, INIT_CODE_HASH_MAP, MINIMUM_LIQUIDITY, ONE, ZERO, _10000, _9975 } from "../constants";
import { InsufficientInputAmountError, InsufficientReservesError } from "../errors";
import { sqrt } from "../utils";
import { CurrencyAmount } from "./fractions";
import { Token } from "./token";
var PAIR_ADDRESS_CACHE = {};
var composeKey = function(token0, token1) {
    return "".concat(token0.chainId, "-").concat(token0.address, "-").concat(token1.address);
};
export var computePairAddress = function(param) {
    var factoryAddress = param.factoryAddress, tokenA = param.tokenA, tokenB = param.tokenB;
    var ref // does safety checks
     = _sliced_to_array(tokenA.sortsBefore(tokenB) ? [
        tokenA,
        tokenB
    ] : [
        tokenB,
        tokenA
    ], 2), token0 = ref[0], token1 = ref[1];
    var key = composeKey(token0, token1);
    if ((PAIR_ADDRESS_CACHE === null || PAIR_ADDRESS_CACHE === void 0 ? void 0 : PAIR_ADDRESS_CACHE[key]) === undefined) {
        PAIR_ADDRESS_CACHE = _object_spread_props(_object_spread({}, PAIR_ADDRESS_CACHE), _define_property({}, key, getCreate2Address(factoryAddress, keccak256([
            "bytes"
        ], [
            pack([
                "address",
                "address"
            ], [
                token0.address,
                token1.address
            ])
        ]), INIT_CODE_HASH_MAP[token0.chainId])));
    }
    return PAIR_ADDRESS_CACHE[key];
};
export var Pair = /*#__PURE__*/ function() {
    "use strict";
    function Pair(currencyAmountA, tokenAmountB) {
        _class_call_check(this, Pair);
        var tokenAmounts = currencyAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
         ? [
            currencyAmountA,
            tokenAmountB
        ] : [
            tokenAmountB,
            currencyAmountA
        ];
        this.liquidityToken = new Token(tokenAmounts[0].currency.chainId, Pair.getAddress(tokenAmounts[0].currency, tokenAmounts[1].currency), 18, "Cake-LP", "Pancake LPs");
        this.tokenAmounts = tokenAmounts;
    }
    var _proto = Pair.prototype;
    /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */ _proto.involvesToken = function involvesToken(token) {
        return token.equals(this.token0) || token.equals(this.token1);
    };
    /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */ _proto.priceOf = function priceOf(token) {
        invariant(this.involvesToken(token), "TOKEN");
        return token.equals(this.token0) ? this.token0Price : this.token1Price;
    };
    _proto.reserveOf = function reserveOf(token) {
        invariant(this.involvesToken(token), "TOKEN");
        return token.equals(this.token0) ? this.reserve0 : this.reserve1;
    };
    _proto.getOutputAmount = function getOutputAmount(inputAmount) {
        invariant(this.involvesToken(inputAmount.currency), "TOKEN");
        if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO)) {
            throw new InsufficientReservesError();
        }
        var inputReserve = this.reserveOf(inputAmount.currency);
        var outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
        var inputAmountWithFee = JSBI.multiply(inputAmount.quotient, _9975);
        var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.quotient);
        var denominator = JSBI.add(JSBI.multiply(inputReserve.quotient, _10000), inputAmountWithFee);
        var outputAmount = CurrencyAmount.fromRawAmount(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0, JSBI.divide(numerator, denominator));
        if (JSBI.equal(outputAmount.quotient, ZERO)) {
            throw new InsufficientInputAmountError();
        }
        return [
            outputAmount,
            new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))
        ];
    };
    _proto.getInputAmount = function getInputAmount(outputAmount) {
        invariant(this.involvesToken(outputAmount.currency), "TOKEN");
        if (JSBI.equal(this.reserve0.quotient, ZERO) || JSBI.equal(this.reserve1.quotient, ZERO) || JSBI.greaterThanOrEqual(outputAmount.quotient, this.reserveOf(outputAmount.currency).quotient)) {
            throw new InsufficientReservesError();
        }
        var outputReserve = this.reserveOf(outputAmount.currency);
        var inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
        var numerator = JSBI.multiply(JSBI.multiply(inputReserve.quotient, outputAmount.quotient), _10000);
        var denominator = JSBI.multiply(JSBI.subtract(outputReserve.quotient, outputAmount.quotient), _9975);
        var inputAmount = CurrencyAmount.fromRawAmount(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0, JSBI.add(JSBI.divide(numerator, denominator), ONE));
        return [
            inputAmount,
            new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))
        ];
    };
    _proto.getLiquidityMinted = function getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
        invariant(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY");
        var tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
         ? [
            tokenAmountA,
            tokenAmountB
        ] : [
            tokenAmountB,
            tokenAmountA
        ];
        invariant(tokenAmounts[0].currency.equals(this.token0) && tokenAmounts[1].currency.equals(this.token1), "TOKEN");
        var liquidity;
        if (JSBI.equal(totalSupply.quotient, ZERO)) {
            liquidity = JSBI.subtract(sqrt(JSBI.multiply(tokenAmounts[0].quotient, tokenAmounts[1].quotient)), MINIMUM_LIQUIDITY);
        } else {
            var amount0 = JSBI.divide(JSBI.multiply(tokenAmounts[0].quotient, totalSupply.quotient), this.reserve0.quotient);
            var amount1 = JSBI.divide(JSBI.multiply(tokenAmounts[1].quotient, totalSupply.quotient), this.reserve1.quotient);
            liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
        }
        if (!JSBI.greaterThan(liquidity, ZERO)) {
            throw new InsufficientInputAmountError();
        }
        return CurrencyAmount.fromRawAmount(this.liquidityToken, liquidity);
    };
    _proto.getLiquidityValue = function getLiquidityValue(token, totalSupply, liquidity) {
        var feeOn = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, kLast = arguments.length > 4 ? arguments[4] : void 0;
        invariant(this.involvesToken(token), "TOKEN");
        invariant(totalSupply.currency.equals(this.liquidityToken), "TOTAL_SUPPLY");
        invariant(liquidity.currency.equals(this.liquidityToken), "LIQUIDITY");
        invariant(JSBI.lessThanOrEqual(liquidity.quotient, totalSupply.quotient), "LIQUIDITY");
        var totalSupplyAdjusted;
        if (!feeOn) {
            totalSupplyAdjusted = totalSupply;
        } else {
            invariant(!!kLast, "K_LAST");
            var kLastParsed = JSBI.BigInt(kLast);
            if (!JSBI.equal(kLastParsed, ZERO)) {
                var rootK = sqrt(JSBI.multiply(this.reserve0.quotient, this.reserve1.quotient));
                var rootKLast = sqrt(kLastParsed);
                if (JSBI.greaterThan(rootK, rootKLast)) {
                    var numerator = JSBI.multiply(totalSupply.quotient, JSBI.subtract(rootK, rootKLast));
                    var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast);
                    var feeLiquidity = JSBI.divide(numerator, denominator);
                    totalSupplyAdjusted = totalSupply.add(CurrencyAmount.fromRawAmount(this.liquidityToken, feeLiquidity));
                } else {
                    totalSupplyAdjusted = totalSupply;
                }
            } else {
                totalSupplyAdjusted = totalSupply;
            }
        }
        return CurrencyAmount.fromRawAmount(token, JSBI.divide(JSBI.multiply(liquidity.quotient, this.reserveOf(token).quotient), totalSupplyAdjusted.quotient));
    };
    Pair.getAddress = function getAddress(tokenA, tokenB) {
        return computePairAddress({
            factoryAddress: FACTORY_ADDRESS_MAP[tokenA.chainId],
            tokenA: tokenA,
            tokenB: tokenB
        });
    };
    _create_class(Pair, [
        {
            key: "token0Price",
            get: /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */ function get() {
                var result = this.tokenAmounts[1].divide(this.tokenAmounts[0]);
                return new Price(this.token0, this.token1, result.denominator, result.numerator);
            }
        },
        {
            key: "token1Price",
            get: /**
   * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
   */ function get() {
                var result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
                return new Price(this.token1, this.token0, result.denominator, result.numerator);
            }
        },
        {
            key: "chainId",
            get: /**
   * Returns the chain ID of the tokens in the pair.
   */ function get() {
                return this.token0.chainId;
            }
        },
        {
            key: "token0",
            get: function get() {
                return this.tokenAmounts[0].currency;
            }
        },
        {
            key: "token1",
            get: function get() {
                return this.tokenAmounts[1].currency;
            }
        },
        {
            key: "reserve0",
            get: function get() {
                return this.tokenAmounts[0];
            }
        },
        {
            key: "reserve1",
            get: function get() {
                return this.tokenAmounts[1];
            }
        }
    ]);
    return Pair;
}();
