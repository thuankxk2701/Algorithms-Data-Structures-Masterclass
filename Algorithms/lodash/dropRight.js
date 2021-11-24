import slice from "./slice";
import toInteger from "./toInteger";

function dropRight(array, n = 1) {
  const length = array == null ? 0 : array.length;
  n = length - toInteger(n);
  return length ? slice(array, 0, n < 0 ? 0 : n) : [];
}

//  dropRight([1, 2, 3])
// => [1, 2]
//
//  dropRight([1, 2, 3], 2)
// => [1]

export default dropRight;
