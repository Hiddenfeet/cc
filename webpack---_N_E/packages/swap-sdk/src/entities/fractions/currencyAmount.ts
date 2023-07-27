import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import invariant from "tiny-invariant";
import JSBI from "jsbi";
import { Fraction } from "./fraction";
import _Big from "big.js";
import toFormat from "toformat";
import { Rounding, MaxUint256 } from "../../constants";
var Big = toFormat(_Big);
export var CurrencyAmount = /*#__PURE__*/ function(Fraction) {
    "use strict";
    _inherits(CurrencyAmount, Fraction);
    var _super = _create_super(CurrencyAmount);
    function CurrencyAmount(currency, numerator, denominator) {
        _class_call_check(this, CurrencyAmount);
        var _this;
        _this = _super.call(this, numerator, denominator);
        invariant(JSBI.lessThanOrEqual(_this.quotient, MaxUint256), "AMOUNT");
        _this.currency = currency;
        _this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals));
        return _this;
    }
    var _proto = CurrencyAmount.prototype;
    _proto.add = function add(other) {
        invariant(this.currency.equals(other.currency), "CURRENCY");
        var added = _get(_get_prototype_of(CurrencyAmount.prototype), "add", this).call(this, other);
        return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
    };
    _proto.subtract = function subtract(other) {
        invariant(this.currency.equals(other.currency), "CURRENCY");
        var subtracted = _get(_get_prototype_of(CurrencyAmount.prototype), "subtract", this).call(this, other);
        return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
    };
    _proto.multiply = function multiply(other) {
        var multiplied = _get(_get_prototype_of(CurrencyAmount.prototype), "multiply", this).call(this, other);
        return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
    };
    _proto.divide = function divide(other) {
        var divided = _get(_get_prototype_of(CurrencyAmount.prototype), "divide", this).call(this, other);
        return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
    };
    _proto.toSignificant = function toSignificant() {
        var significantDigits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6, format = arguments.length > 1 ? arguments[1] : void 0, rounding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rounding.ROUND_DOWN;
        return _get(_get_prototype_of(CurrencyAmount.prototype), "divide", this).call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
    };
    _proto.toFixed = function toFixed() {
        var decimalPlaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.currency.decimals, format = arguments.length > 1 ? arguments[1] : void 0, rounding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rounding.ROUND_DOWN;
        invariant(decimalPlaces <= this.currency.decimals, "DECIMALS");
        return _get(_get_prototype_of(CurrencyAmount.prototype), "divide", this).call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
    };
    _proto.toExact = function toExact() {
        var format = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            groupSeparator: ""
        };
        Big.DP = this.currency.decimals;
        return new Big(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
    };
    /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */ CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
        return new CurrencyAmount(currency, rawAmount);
    };
    /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */ CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
        return new CurrencyAmount(currency, numerator, denominator);
    };
    _create_class(CurrencyAmount, [
        {
            key: "wrapped",
            get: function get() {
                if (this.currency.isToken) return this;
                return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
            }
        }
    ]);
    return CurrencyAmount;
}(Fraction);
