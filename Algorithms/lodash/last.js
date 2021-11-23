function last(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

//  last([1, 2, 3])
//   => 3
export default last;
