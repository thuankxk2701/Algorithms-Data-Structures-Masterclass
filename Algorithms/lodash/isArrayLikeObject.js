import isArrayLike from "./isArrayLike.js";
import isObjectLike from "./isObjectLike.js";

function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

export default isArrayLikeObject;
