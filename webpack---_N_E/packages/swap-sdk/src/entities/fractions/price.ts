import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import JSBI from "jsbi";
import invariant from "tiny-invariant";
import { Fraction } from "./fraction";
import { CurrencyAmount } from "./currencyAmount";
export var Price = /*#__PURE__*/ function(Fraction1) {
    "use strict";
    _inherits(Price, Fraction1);
    var _super = _create_super(Price);
    function Price() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _class_call_check(this, Price);
        var _this;
        var baseCurrency, quoteCurrency, denominator, numerator;
        if (args.length === 4) {
            var ref;
            ref = _sliced_to_array(args, 4), baseCurrency = ref[0], quoteCurrency = ref[1], denominator = ref[2], numerator = ref[3], ref;
        } else {
            var result = args[0].quoteAmount.divide(args[0].baseAmount);
            var ref1;
            ref1 = [
                args[0].baseAmount.currency,
                args[0].quoteAmount.currency,
                result.denominator,
                result.numerator, 
            ], baseCurrency = ref1[0], quoteCurrency = ref1[1], denominator = ref1[2], numerator = ref1[3], ref1;
        }
        _this = _super.call(this, numerator, denominator);
        _this.baseCurrency = baseCurrency;
        _this.quoteCurrency = quoteCurrency;
        _this.scalar = new Fraction(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(quoteCurrency.decimals)));
        return _this;
    }
    var _proto = Price.prototype;
    /**
   * Flip the price, switching the base and quote currency
   */ _proto.invert = function invert() {
        return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
    };
    /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */ _proto.multiply = function multiply(other) {
        invariant(this.quoteCurrency.equals(other.baseCurrency), "TOKEN");
        var fraction = _get(_get_prototype_of(Price.prototype), "multiply", this).call(this, other);
        return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
    };
    /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */ _proto.quote = function quote(currencyAmount) {
        invariant(currencyAmount.currency.equals(this.baseCurrency), "TOKEN");
        var result = _get(_get_prototype_of(Price.prototype), "multiply", this).call(this, currencyAmount);
        return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
    };
    _proto.toSignificant = function toSignificant() {
        var significantDigits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6, format = arguments.length > 1 ? arguments[1] : void 0, rounding = arguments.length > 2 ? arguments[2] : void 0;
        return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
    };
    _proto.toFixed = function toFixed() {
        var decimalPlaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 4, format = arguments.length > 1 ? arguments[1] : void 0, rounding = arguments.length > 2 ? arguments[2] : void 0;
        return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
    };
    _create_class(Price, [
        {
            key: "adjustedForDecimals",
            get: /**
   * Get the value scaled by decimals for formatting
   * @private
   */ function get() {
                return _get(_get_prototype_of(Price.prototype), "multiply", this).call(this, this.scalar);
            }
        }
    ]);
    return Price;
}(Fraction);
