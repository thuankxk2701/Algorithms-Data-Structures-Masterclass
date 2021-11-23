import baseFindIndex from "./baseFindIndex";
import baseIsNaN from "./baseIsNaN";
import strictIndexOf from "./strictIndexOf";

function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, value, fromIndex);
}

export default baseIndexOf;
