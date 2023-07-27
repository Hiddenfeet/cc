import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _define_property from "@swc/helpers/src/_define_property.mjs";
import _instanceof from "@swc/helpers/src/_instanceof.mjs";
import JSBI from "jsbi";
import invariant from "tiny-invariant";
import _Decimal from "decimal.js-light";
import _Big from "big.js";
import toFormat from "toformat";
import { Rounding } from "../../constants";
var Decimal = toFormat(_Decimal);
var Big = toFormat(_Big);
var _obj;
var toSignificantRounding = (_obj = {}, _define_property(_obj, Rounding.ROUND_DOWN, Decimal.ROUND_DOWN), _define_property(_obj, Rounding.ROUND_HALF_UP, Decimal.ROUND_HALF_UP), _define_property(_obj, Rounding.ROUND_UP, Decimal.ROUND_UP), _obj);
var RoundingMode;
(function(RoundingMode) {
    RoundingMode[RoundingMode[/**
   * Rounds towards zero.
   * I.e. truncate, no rounding.
   */ "RoundDown"] = 0] = "RoundDown";
    RoundingMode[RoundingMode[/**
   * Rounds towards nearest neighbour.
   * If equidistant, rounds away from zero.
   */ "RoundHalfUp"] = 1] = "RoundHalfUp";
    RoundingMode[RoundingMode[/**
   * Rounds towards nearest neighbour.
   * If equidistant, rounds towards even neighbour.
   */ "RoundHalfEven"] = 2] = "RoundHalfEven";
    RoundingMode[RoundingMode[/**
   * Rounds away from zero.
   */ "RoundUp"] = 3] = "RoundUp";
})(RoundingMode || (RoundingMode = {}));
var _obj1;
var toFixedRounding = (_obj1 = {}, _define_property(_obj1, Rounding.ROUND_DOWN, 0), _define_property(_obj1, Rounding.ROUND_HALF_UP, 1), _define_property(_obj1, Rounding.ROUND_UP, 3), _obj1);
export var Fraction = /*#__PURE__*/ function() {
    "use strict";
    function Fraction(numerator) {
        var denominator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : JSBI.BigInt(1);
        _class_call_check(this, Fraction);
        this.numerator = JSBI.BigInt(numerator);
        this.denominator = JSBI.BigInt(denominator);
    }
    var _proto = Fraction.prototype;
    _proto.invert = function invert() {
        return new Fraction(this.denominator, this.numerator);
    };
    _proto.add = function add(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        if (JSBI.equal(this.denominator, otherParsed.denominator)) {
            return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
        }
        return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
    };
    _proto.subtract = function subtract(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        if (JSBI.equal(this.denominator, otherParsed.denominator)) {
            return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
        }
        return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
    };
    _proto.lessThan = function lessThan(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
    };
    _proto.equalTo = function equalTo(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
    };
    _proto.greaterThan = function greaterThan(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
    };
    _proto.multiply = function multiply(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
    };
    _proto.divide = function divide(other) {
        var otherParsed = Fraction.tryParseFraction(other);
        return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
    };
    _proto.toSignificant = function toSignificant(significantDigits) {
        var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            groupSeparator: ""
        }, rounding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rounding.ROUND_HALF_UP;
        invariant(Number.isInteger(significantDigits), "".concat(significantDigits, " is not an integer."));
        invariant(significantDigits > 0, "".concat(significantDigits, " is not positive."));
        Decimal.set({
            precision: significantDigits + 1,
            rounding: toSignificantRounding[rounding]
        });
        var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
        return quotient.toFormat(quotient.decimalPlaces(), format);
    };
    _proto.toFixed = function toFixed(decimalPlaces) {
        var format = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            groupSeparator: ""
        }, rounding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rounding.ROUND_HALF_UP;
        invariant(Number.isInteger(decimalPlaces), "".concat(decimalPlaces, " is not an integer."));
        invariant(decimalPlaces >= 0, "".concat(decimalPlaces, " is negative."));
        Big.DP = decimalPlaces;
        Big.RM = toFixedRounding[rounding];
        return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
    };
    Fraction.tryParseFraction = function tryParseFraction(fractionish) {
        if (_instanceof(fractionish, JSBI) || typeof fractionish === "number" || typeof fractionish === "string") return new Fraction(fractionish);
        if ("numerator" in fractionish && "denominator" in fractionish) return fractionish;
        throw new Error("Could not parse fraction");
    };
    _create_class(Fraction, [
        {
            key: "quotient",
            get: // performs floor division
            function get() {
                return JSBI.divide(this.numerator, this.denominator);
            }
        },
        {
            key: "remainder",
            get: // remainder after floor division
            function get() {
                return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
            }
        },
        {
            key: "asFraction",
            get: /**
   * Helper method for converting any super class back to a fraction
   */ function get() {
                return new Fraction(this.numerator, this.denominator);
            }
        }
    ]);
    return Fraction;
}();
