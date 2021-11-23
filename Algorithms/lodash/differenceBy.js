import baseDifference from "./.internal/baseDifference.js";
import baseFlatten from "./.internal/baseFlatten.js";
import isArrayLikeObject from "./isArrayLikeObject.js";
import last from "./last.js";

function differenceBy(array, ...values) {
  let iteratee = last(array);

  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
    : [];
}

// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
// => [1.2]
//

export default differenceBy;
