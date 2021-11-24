import baseWhile from "./.internal/baseWhile";

function dropWhile(array, predicate) {
  return array != null && array.length ? baseWhile(array, predicate, true) : [];
}

// const users = [
//      { 'user': 'barney',  'active': true },
//     { 'user': 'fred',    'active': true },
//      { 'user': 'pebbles', 'active': false }
//                 ]
// dropWhile(users, ({ active }) => active)
//   => objects for ['pebbles']

export default dropWhile;
