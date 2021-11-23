import isArgument from "../isArguments";

const spreadableSymbol = Symbol.isConcatSpreadable;

function isFlattenable(value) {
  return Array.isArray(value) || isArgument(value) || !!(value && value[spreadableSymbol]);
}

export default isFlattenable;
