/*
// Learn Algorithms 1
function minSubArrayLen(arr, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

///
function findLongestSubstring(str) {
  let start = 0;

  let intermediary = {};
  let longest = 0;
  if (str.length === 0) return longest;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (intermediary[char]) {
      start = Math.max(start, intermediary[char]);
    }
    longest = Math.max(longest, i - start + 1);
    intermediary[char] = i + 1;
  }
  return longest;
}
console.log(findLongestSubstring("aaaaaa"));
*/


/////////Recursion ////////
/*
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(2));

function power(value, hat) {
  if (hat === 1) return ;
  return value * power(value, hat - 1);
}
console.log(power(2, 4));

function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
  }

console.log(productOfArray([1, 2, 3, 10]));


function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(6));

function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(28));

function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}
console.log(reverse("1234"));


function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
console.log(isPalindrome("12321"));

function someRecursive(arr, func) {
  if (arr.length === 0) return false;
  if (func(arr[0])) return true;

  return someRecursive(arr.slice(1), func);
}


function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


function capitalizeFirst(arr) {
const result=[];
for(let value of arr ){
  result.push((value[0].toUpperCase()+value.slice(1)))
}
return result;
}
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  console.log(res);
  res.push(string);
  return res;
}
console.log(capitalizeFirst(['car','taco','banana']));

*/



