import baseDifference from "./.internal/baseDifference.js";
import baseFlatten from "./.internal/baseFlatten.js";
import isArrayLikeObject from "./isArrayLikeObject.js";
import last from "./last.js";

function differenceWith(array, ...values) {
  let comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
    : [];
}

// const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
//
//  differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
//   => [{ 'x': 2, 'y': 1 }]
//
export default differenceWith;
