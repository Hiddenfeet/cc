import { useEffect } from "react";
var useOnClickOutside = function(htmlNode, handler) {
    useEffect(function() {
        if (htmlNode) {
            var listener = function(event) {
                // Do nothing if clicking ref's element or descendent elements
                if (htmlNode.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return function() {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }
        return undefined;
    }, // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [
        htmlNode,
        handler
    ]);
};
export default useOnClickOutside;
