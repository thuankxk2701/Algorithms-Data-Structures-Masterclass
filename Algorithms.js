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
  res.push(string);
  return res;
}
console.log(capitalizeFirst(['car','taco','banana']));


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(nestedEvenSum(obj1)); 


function capitalizeWords (array) {
  
  if(array.length===1) return [array[0].toUpperCase()];

   const res=capitalizeWords(array.slice(0,-1));
  const string=array[array.length-1].toUpperCase()
  res.push(string);
  return res;
}

console.log(capitalizeWords(['a','b','c']));

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

function stringifyNumbers(obj,newObj={}){
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}


console.log(stringifyNumbers(obj));


const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}


function collectStrings(obj,newArr=[]){
   for (let key in obj){
     if(typeof obj[key]==='string'){
       newArr.push(obj[key])
     } else
     if(typeof obj[key]==='object' && !Array.isArray(obj[key])){
      newArr.push(...collectStrings(obj[key]))
     } else{
       newArr.push(obj[key])
     }
   }
   return newArr;
  
}
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}

console.log(collectStrings(obj));



function linearSearch(arr,value){
  // c1
  for(let i=0; i< arr.length; i++)if(arr[i]===value) return i;
  return -1
  //c2
   return arr.indexOf(value)

  }
console.log(linearSearch([10,15,20,25,30],15));


function binarySearch(arr,value){
 let start=0;
 let end=arr.length-1;
 let mid=0;
 while(start<end){
   mid=Math.floor((start+end)/2);
   if(arr[mid]===value) return mid;
   else if(arr[mid]<value) start+=1;else end-=1;
 }
 return -1
}
console.log(binarySearch([1,2,3,4,5],10));

function bubbleSort(arr){
  let noSwap;
  for(let i=arr.length-1; i>0; i--){
    noSwap=true;
    for(let j=0; j<i-1; j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        noSwap=false;
      }
    }
    if(noSwap) break;
  }
  return arr
}
console.log(bubbleSort([21,23,41,53,123,41,2,12,42,54]));

//insertionSort

function insertionSort(arr){
  for( let i=1; i<arr.length; i++)
  {
    let currentVal=arr[i];
    for( var j=i-1; j>=0 && arr[j]>currentVal; j--){
      arr[j+1]=arr[j]
    
    }

    arr[j+1]=currentVal
  }
  return arr
}

console.log(insertionSort([21,23,41,53,123,41,2,12,42,54]));

// mergeSort
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([21, 23, 41, 53, 123, 41, 2, 12, 42]));


// quickSort
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);


/// ** Radix SORT

function  getDigit(num,i){
  return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}
function digitCount(num){
  if(num===0) return 1;
  return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigits(nums,maxDigits=0){
   if(nums.length===1) return digitCount(nums[nums.length-1]);
    maxDigits=(mostDigits(nums.slice(0,-1)));
   maxDigits=Math.max(maxDigits,digitCount(nums[nums.length-1]));
   return maxDigits    
}


function radixSort(nums){
  let maxDigitsCount=mostDigits(nums);
  for(let k =0 ; k<maxDigitsCount; k++){
    let digitBuckets=Array.from({length:10},()=>[]);
    for(let i =0; i<nums.length; i++){
      const digit=getDigit(nums[i],k)
      digitBuckets[digit].push(nums[i])
    }  
     nums=[].concat(...digitBuckets)
  
  }
  return nums
}
console.log(radixSort([1,2,3,3123,231,14234]));
*/
