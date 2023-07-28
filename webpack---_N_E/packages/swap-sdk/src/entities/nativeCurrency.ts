import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
import { BaseCurrency } from "./baseCurrency";
/**
 * Represents the native currency of the chain on which it resides, e.g.
 */ export var NativeCurrency = /*#__PURE__*/ function(BaseCurrency) {
    "use strict";
    _inherits(NativeCurrency, BaseCurrency);
    var _super = _create_super(NativeCurrency);
    function NativeCurrency() {
        _class_call_check(this, NativeCurrency);
        var _this;
        _this = _super.apply(this, arguments);
        _this.isNative = true;
        _this.isToken = false;
        return _this;
    }
    return NativeCurrency;
}(BaseCurrency);
