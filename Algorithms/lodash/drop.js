import slice from "./slice";
import toInteger from "./toInteger";

function drop(array, n = 1) {
  const length = array == null ? 0 : array.length;
  return length ? slice(array, n < 0 ? 0 : toInteger(n), length) : [];
}

//  drop([1, 2, 3])
//   // => [2, 3]
//
//   drop([1, 2, 3], 2)
//   => [3]

export default drop;
