import _instanceof from "@swc/helpers/src/_instanceof.mjs";
import invariant from "tiny-invariant";
import warning from "tiny-warning";
import JSBI from "jsbi";
import { getAddress } from "@ethersproject/address";
import { ZERO, ONE, TWO, THREE, SolidityType, SOLIDITY_TYPE_MAXIMA } from "./constants";
import { Percent } from ".";
export function validateSolidityTypeInstance(value, solidityType) {
    invariant(JSBI.greaterThanOrEqual(value, ZERO), "".concat(value, " is not a ").concat(solidityType, "."));
    invariant(JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]), "".concat(value, " is not a ").concat(solidityType, "."));
}
// warns if addresses are not checksummed
export function validateAndParseAddress(address) {
    try {
        var checksummedAddress = getAddress(address);
        warning(address === checksummedAddress, "".concat(address, " is not checksummed."));
        return checksummedAddress;
    } catch (error) {
        invariant(false, "".concat(address, " is not a valid address."));
    }
}
export function parseBigintIsh(bigintIsh) {
    return _instanceof(bigintIsh, JSBI) ? bigintIsh : JSBI.BigInt(bigintIsh);
}
// mock the on-chain sqrt function
export function sqrt(y) {
    validateSolidityTypeInstance(y, SolidityType.uint256);
    var z = ZERO;
    var x;
    if (JSBI.greaterThan(y, THREE)) {
        z = y;
        x = JSBI.add(JSBI.divide(y, TWO), ONE);
        while(JSBI.lessThan(x, z)){
            z = x;
            x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO);
        }
    } else if (JSBI.notEqual(y, ZERO)) {
        z = ONE;
    }
    return z;
}
// given an array of items sorted by `comparator`, insert an item into its sort index and constrain the size to
// `maxSize` by removing the last item
export function sortedInsert(items, add, maxSize, comparator) {
    invariant(maxSize > 0, "MAX_SIZE_ZERO");
    // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize
    invariant(items.length <= maxSize, "ITEMS_SIZE");
    // short circuit first item add
    if (items.length === 0) {
        items.push(add);
        return null;
    } else {
        var isFull = items.length === maxSize;
        // short circuit if full and the additional item does not come before the last item
        if (isFull && comparator(items[items.length - 1], add) <= 0) {
            return add;
        }
        var lo = 0, hi = items.length;
        while(lo < hi){
            var mid = lo + hi >>> 1;
            if (comparator(items[mid], add) <= 0) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        items.splice(lo, 0, add);
        return isFull ? items.pop() : null;
    }
}
/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */ export function computePriceImpact(midPrice, inputAmount, outputAmount) {
    var quotedOutputAmount = midPrice.quote(inputAmount);
    // calculate price impact := (exactQuote - outputAmount) / exactQuote
    var priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount);
    return new Percent(priceImpact.numerator, priceImpact.denominator);
}
