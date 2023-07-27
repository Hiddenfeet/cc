// see https://stackoverflow.com/a/41102306
import _assert_this_initialized from "@swc/helpers/src/_assert_this_initialized.mjs";
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _instanceof from "@swc/helpers/src/_instanceof.mjs";
import _wrap_native_super from "@swc/helpers/src/_wrap_native_super.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var CAN_SET_PROTOTYPE = "setPrototypeOf" in Object;
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */ export var InsufficientReservesError = /*#__PURE__*/ function _target(Error1) {
    "use strict";
    _inherits(InsufficientReservesError, Error1);
    var _super = _create_super(InsufficientReservesError);
    function InsufficientReservesError() {
        _class_call_check(this, InsufficientReservesError);
        var _this;
        _this = _super.call(this);
        _this.isInsufficientReservesError = true;
        _this.name = _this.constructor.name;
        if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assert_this_initialized(_this), (_instanceof(this, InsufficientReservesError) ? this.constructor : void 0).prototype);
        return _this;
    }
    return InsufficientReservesError;
}(_wrap_native_super(Error));
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */ export var InsufficientInputAmountError = /*#__PURE__*/ function _target(Error1) {
    "use strict";
    _inherits(InsufficientInputAmountError, Error1);
    var _super = _create_super(InsufficientInputAmountError);
    function InsufficientInputAmountError() {
        _class_call_check(this, InsufficientInputAmountError);
        var _this;
        _this = _super.call(this);
        _this.isInsufficientInputAmountError = true;
        _this.name = _this.constructor.name;
        if (CAN_SET_PROTOTYPE) Object.setPrototypeOf(_assert_this_initialized(_this), (_instanceof(this, InsufficientInputAmountError) ? this.constructor : void 0).prototype);
        return _this;
    }
    return InsufficientInputAmountError;
}(_wrap_native_super(Error));
