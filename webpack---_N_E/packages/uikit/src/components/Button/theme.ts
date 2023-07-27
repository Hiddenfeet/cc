import _define_property from "@swc/helpers/src/_define_property.mjs";
import { scales, variants } from "./types";
var _obj;
export var scaleVariants = (_obj = {}, _define_property(_obj, scales.MD, {
    height: "48px",
    padding: "0 24px"
}), _define_property(_obj, scales.SM, {
    height: "32px",
    padding: "0 16px"
}), _define_property(_obj, scales.XS, {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px"
}), _obj);
var _obj1;
export var styleVariants = (_obj1 = {}, _define_property(_obj1, variants.PRIMARY, {
    backgroundColor: "primary",
    color: "white"
}), _define_property(_obj1, variants.SECONDARY, {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
        backgroundColor: "transparent"
    }
}), _define_property(_obj1, variants.TERTIARY, {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary"
}), _define_property(_obj1, variants.SUBTLE, {
    backgroundColor: "textSubtle",
    color: "backgroundAlt"
}), _define_property(_obj1, variants.DANGER, {
    backgroundColor: "failure",
    color: "white"
}), _define_property(_obj1, variants.SUCCESS, {
    backgroundColor: "success",
    color: "white"
}), _define_property(_obj1, variants.TEXT, {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none"
}), _define_property(_obj1, variants.LIGHT, {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none"
}), _obj1);
