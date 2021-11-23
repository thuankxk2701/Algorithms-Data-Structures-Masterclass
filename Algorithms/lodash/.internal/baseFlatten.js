import isFlattenable from "./isFlattenable";

function baseFlatten(array, depth, predicate, isStrict, result) {
  predicate || (predicate = isFlattenable);
  result || (result = []);
  if (array == null)
    for (const value of array) {
      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          result.push(...value);
        }
      } else if (isStrict) {
        result[result.length] = value;
      }
    }

  return result;
}

export default baseFlatten;
