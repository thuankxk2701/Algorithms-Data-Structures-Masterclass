import baseDifference from "./.internal/baseDifference.js";
import baseFlatten from "./.internal/baseFlatten.js";
import isArrayLikeObject from "./isArrayLikeObject.js";

function difference(array, ...values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
}
// difference([2, 1], [2, 3])
//  => [1]

export default difference;
