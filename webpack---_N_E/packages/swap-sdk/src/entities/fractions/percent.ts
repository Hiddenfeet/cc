import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _get from "@swc/helpers/src/_get.mjs";
import _get_prototype_of from "@swc/helpers/src/_get_prototype_of.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import JSBI from "jsbi";
import { Fraction } from "./fraction";
var ONE_HUNDRED = new Fraction(JSBI.BigInt(100));
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */ function toPercent(fraction) {
    return new Percent(fraction.numerator, fraction.denominator);
}
export var Percent = /*#__PURE__*/ function(Fraction) {
    "use strict";
    _inherits(Percent, Fraction);
    var _super = _create_super(Percent);
    function Percent() {
        _class_call_check(this, Percent);
        var _this;
        _this = _super.apply(this, arguments);
        /**
   * This boolean prevents a fraction from being interpreted as a Percent
   */ _this.isPercent = true;
        return _this;
    }
    var _proto = Percent.prototype;
    _proto.add = function add(other) {
        return toPercent(_get(_get_prototype_of(Percent.prototype), "add", this).call(this, other));
    };
    _proto.subtract = function subtract(other) {
        return toPercent(_get(_get_prototype_of(Percent.prototype), "subtract", this).call(this, other));
    };
    _proto.multiply = function multiply(other) {
        return toPercent(_get(_get_prototype_of(Percent.prototype), "multiply", this).call(this, other));
    };
    _proto.divide = function divide(other) {
        return toPercent(_get(_get_prototype_of(Percent.prototype), "divide", this).call(this, other));
    };
    _proto.toSignificant = function toSignificant() {
        var significantDigits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 5, format = arguments.length > 1 ? arguments[1] : void 0, rounding = arguments.length > 2 ? arguments[2] : void 0;
        return _get(_get_prototype_of(Percent.prototype), "multiply", this).call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
    };
    _proto.toFixed = function toFixed() {
        var decimalPlaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 2, format = arguments.length > 1 ? arguments[1] : void 0, rounding = arguments.length > 2 ? arguments[2] : void 0;
        return _get(_get_prototype_of(Percent.prototype), "multiply", this).call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
    };
    return Percent;
}(Fraction);
