import _define_property from "@swc/helpers/src/_define_property.mjs";
import { scales, variants } from "./types";
var _obj;
export var scaleVariants = (_obj = {}, _define_property(_obj, scales.MD, {
    height: "28px",
    padding: "0 8px",
    fontSize: "14px"
}), _define_property(_obj, scales.SM, {
    height: "24px",
    padding: "0 4px",
    fontSize: "12px"
}), _obj);
var _obj1;
export var styleVariants = (_obj1 = {}, _define_property(_obj1, variants.PRIMARY, {
    backgroundColor: "primary"
}), _define_property(_obj1, variants.SECONDARY, {
    backgroundColor: "secondary"
}), _define_property(_obj1, variants.SUCCESS, {
    backgroundColor: "success"
}), _define_property(_obj1, variants.TEXTDISABLED, {
    backgroundColor: "textDisabled"
}), _define_property(_obj1, variants.TEXTSUBTLE, {
    backgroundColor: "textSubtle"
}), _define_property(_obj1, variants.BINANCE, {
    backgroundColor: "binance"
}), _define_property(_obj1, variants.FAILURE, {
    backgroundColor: "failure"
}), _define_property(_obj1, variants.WARNING, {
    backgroundColor: "warning"
}), _obj1);
