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


////////////Recursion /////////////////
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


let obj1 = {
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
  for (let key in obj) {
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
  let stringsArr = [];
  for(let key in obj) {
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
    for( let j=i-1; j>=0 && arr[j]>currentVal; j--){
      arr[j+1]=arr[j]
    
    }

    arr[j+1]=currentVal
  }
  return arr
}

console.log(insertionSort([21,23,41,53,123,41,2,12,42,54]));



////////////// mergeSort///////////////////////////

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



/////////////////// QuickSort //////////////////

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


////////////////////////////// ** Radix SORT//////////////

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


class Point {
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  static distance(a,b){
    const dx=a.x-b.x;
    const dy=a.y-b.y;
    return Math.hypot(dx,dy);
  }
}
const p1=new Point(5,5);
const p2=new Point(10,10)
console.log(Point.distance(p1,p2));





// class Student {
//   #firstName;
//   constructor(firstName, lastName, year) {
//     this.#firstName = firstName;
//     this.lastName = lastName;
//     this.year = year;
//     this.#totalName();
//   }
//   #totalName() {
//     return `hello ${this.firstName} ${this.lastName} years : ${this.year}`;
//   }
//   static data() {
//     console.log(1234);
//   }
// }
// const data = new Student("Thuan", "nguyen", 18);

// data.data();

// class ClassWithStaticMethod {
//   constructor(first,last){
//     this.first=first;
//     this.last=last;
//   }
//   static staticProperty = 'someValue';
//   static staticMethod() {
//     return 'static method has been called.';
//   }
//   static {
//     console.log('Class static initialization block called');
//   }
// }

// console.log(ClassWithStaticMethod.staticProperty);
// // output: "someValue"
// console.log(ClassWithStaticMethod.staticMethod());
// // output: "static method has been called."


///Pushing


//////////////////////Single Linked lists/////////////////////////////////

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let next;
      let prev = null;
      for(let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    print(){
        let arr = [];
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)




////////////////////// DoublyLinkedLis ///////////////////

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}


class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      let newNode = new Node(val);
      if(this.length === 0){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
    if(!this.head)return undefined;
    let poppedNode=this.tail;
    if(this.length===1){
      this.head=null;
      this.tail=null;
      
    }else{
      this.tail=poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev=null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if(!this.tail) return undefined;
    let oldHead=this.head;
    if(this.length===1){
      this.head=null;
      this.tail=null;
    }else {
      this.head=oldHead.next;
      this.head.prev=null;
      oldHead.next=null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val){

    let newNode=new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
  } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
  }
  this.length++;
  return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    let count, current;
    if(index <= this.length/2){
        count = 0;
        current = this.head;
        while(count !== index){
            current = current.next;
            count++;
        }
    } else {
        count = this.length - 1;
        current = this.tail;
        while(count !== index){
            current = current.prev;
            count--;
        }
    }
    return current;
  }
  set(index,value){
    let foundNode=this.get(index);
    if(foundNode!=null){
      foundNode.val=value;
      return true;
    }
    return false;
  }
  insert(index,val){
    if(index < 0 || index > this.length) return false;
    if(index===0)return this.unshift(val);
    if(index===this.length) return this.push(val);
    let newNode=new Node(val);
    let beforeNode=this.get(index-1);
    let   afterNode=beforeNode.next;
    beforeNode.next=newNode;
    newNode.prev=beforeNode;
    newNode.next=afterNode;
    afterNode.prev=newNode;

  this.length++;
  return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index===0) return this.shift();
    if(index===this.length) this.pop();
    let removedNode=this.get(index);
    removedNode.prev.next=removedNode.next;
    removedNode.next.prev=removedNode.prev;
    removedNode.next=null;
    removedNode.prev=null;
     this.length--;
    return removedNode;
  }

}
      
let list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")



///Stack/////////////


class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
      let newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          let temp = this.first;
          this.first = newNode;
          this.first.next = temp;
      }
      return ++this.size;
  }
  pop(){
      if(!this.first) return null;
      let temp = this.first;
      if(this.first === this.last){
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}


/// Queues /////////

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val){
      var newNode = new Node(val);
      if(!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
  }

  dequeue(){
      if(!this.first) return null;

      var temp = this.first;
      if(this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}




////// Binary Search Tree  /// Big O(log n) /////////////////////

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  insert(value){
    let newNode=new Node(value);
    if(this.root===null){
      this.root=newNode;
      return this;
    }else{
      let current=this.root;
      while(true){
        if(value===current.value) return undefined;
        if(value<current.value){
          if(current.left===null){
            current.left=newNode;
            return this;
          } else {
            current=current.left;
          }
           
        }else if(value>current.value){
          if(current.right===null){
            current.right=newNode;
            return this;
          } else{
            current=current.right;
          }

        }
      }
    }
  }
  find(value){
    if(this.root===null) return false;
    let current=this.root,found=false;
    while(current && !found){
      if(value<current.value){
        current=current.left;

      }
      else if(value>current.value){
         current=current.right;
      }else{
        found=true;
        break;
      }
    }
    if(!found) return undefined;
   return current;

   
  }
  contains(value){
    if(this.root===null) return false;
    let current=this.root,found=false;
    while(current && !found){
      if(value<current.value){
        current=current.left;

      }
      else if(value>current.value){
         current=current.right;
      }else{
       return true;
      }
    }
   return false;

   
  }
}
const tree=new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.contains(4));
// tree.root=new Node(10);
// tree.root.right= new Node(10);
// tree.root.left=new Node(7);
// tree.root.left.right=new Node(9);



////////////////// BFS DFS (Breadth First Search and Depth First Search)///////////////////

class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  insert(value){
    let newNode=new Node(value);
    if(this.root===null){
      this.root=newNode;
      return this;
    }else{
      let current=this.root;
      while(true){
        if(value===current.value) return undefined;
        if(value<current.value){
          if(current.left===null){
            current.left=newNode;
            return this;
          } else {
            current=current.left;
          }
           
        }else if(value>current.value){
          if(current.right===null){
            current.right=newNode;
            return this;
          } else{
            current=current.right;
          }

        }
      }
    }
  }
  find(value){
    if(this.root===null) return false;
    let current=this.root,found=false;
    while(current && !found){
      if(value<current.value){
        current=current.left;

      }
      else if(value>current.value){
         current=current.right;
      }else{
        found=true;
        break;
      }
    }
    if(!found) return undefined;
   return current;

   
  }
  contains(value){
    if(this.root===null) return false;
    let current=this.root,found=false;
    while(current && !found){
      if(value<current.value){
        current=current.left;

      }
      else if(value>current.value){
         current=current.right;
      }else{
       return true;
      }
    }
   return false;   
  }
  BFS(){
    var node=this.root,data=[],queue=[];
    queue.push(node);
    while(queue.length){
      node=queue.shift();
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);

    }
    return data;
  }
  DFSPreOrder(){
    let data=[];  
    let current=this.root;
    function traverse(node){
      data.push(node.value);
      if(node.left){
        traverse(node.left)
      }
      if(node.right) traverse(node.right);
    }
    traverse(current);
   return data;
  }
  DFSPostOrder(){
    let data=[];
    let current=this.root;
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  DFSInOrder(){
    let data=[];
    let current=this.root;
    function traverse(node){
      if(node.left) traverse(node.left);       
        
        data.push(node.value);
     if(node.right) traverse(node.right);
    
    }
    traverse(current);
    return data;
  }
}
const tree=new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


*/

