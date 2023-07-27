import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
import invariant from "tiny-invariant";
import { Price } from "./fractions/price";
export var Route = /*#__PURE__*/ function() {
    "use strict";
    function Route(pairs, input, output) {
        _class_call_check(this, Route);
        this._midPrice = null;
        invariant(pairs.length > 0, "PAIRS");
        var chainId = pairs[0].chainId;
        invariant(pairs.every(function(pair) {
            return pair.chainId === chainId;
        }), "CHAIN_IDS");
        var wrappedInput = input.wrapped;
        invariant(pairs[0].involvesToken(wrappedInput), "INPUT");
        invariant(typeof output === "undefined" || pairs[pairs.length - 1].involvesToken(output.wrapped), "OUTPUT");
        var path = [
            wrappedInput
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = pairs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _value = _sliced_to_array(_step.value, 2), i = _value[0], pair = _value[1];
                var currentInput = path[i];
                invariant(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), "PATH");
                var _$output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;
                path.push(_$output);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        this.pairs = pairs;
        this.path = path;
        this.input = input;
        this.output = output;
    }
    _create_class(Route, [
        {
            key: "midPrice",
            get: function get() {
                if (this._midPrice !== null) return this._midPrice;
                var prices = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.pairs.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _value = _sliced_to_array(_step.value, 2), i = _value[0], pair = _value[1];
                        prices.push(this.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var reduced = prices.slice(1).reduce(function(accumulator, currentValue) {
                    return accumulator.multiply(currentValue);
                }, prices[0]);
                return this._midPrice = new Price(this.input, this.output, reduced.denominator, reduced.numerator);
            }
        },
        {
            key: "chainId",
            get: function get() {
                return this.pairs[0].chainId;
            }
        }
    ]);
    return Route;
}();
