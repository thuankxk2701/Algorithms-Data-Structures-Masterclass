import getTag from "./.internal/getTag";
import isObjectLike from "./isObjectLike";

function isArgument(value) {
  return isObjectLike(value) && getTag(value) == "[object Argument]";
}

export default isArgument;
