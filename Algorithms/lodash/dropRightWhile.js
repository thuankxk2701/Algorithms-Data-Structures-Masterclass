import baseWhile from "./.internal/baseWhile.js";

function dropRightWhile(array, predicate) {
  return array != null && array.length ? baseWhile(array, predicate, true, true) : [];
}

// const users = [
//       { 'user': 'barney',  'active': false },
//      { 'user': 'fred',    'active': true },
//       { 'user': 'pebbles', 'active': true }
//    ]
//
//     dropRightWhile(users, ({ active }) => active)
//     => objects for ['barney']

export default dropRightWhile;
