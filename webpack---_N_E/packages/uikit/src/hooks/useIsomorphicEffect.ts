import { useEffect, useLayoutEffect } from "react";
export var useIsomorphicEffect = "object" === "undefined" ? useEffect : useLayoutEffect;
