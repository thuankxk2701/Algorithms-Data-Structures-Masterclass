/*
// Object prototype
// ///////////////////forEach/////////////////
Array.prototype.forEach2 = function (callback) {
  for (let index in this)
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
};

const arr = ["javascript", "php", "ruby"];

console.log(arr);

arr.forEach2((value, index, array) => {
  console.log(value, index, array);
});




// //////////Filter////////////////

Array.prototype.filter2 = function (callback) {
  let output = [];
  for (let index in this)
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) output.push(this[index]);
    }
  return output;
};

const sources = [
  {
    name: "javascript",
    coin: 100,
  },
  {
    name: "Php",
    coin: 0,
  },
  {
    name: "Nodejs",
    coin: 120,
  },
];

let filterCourses = sources.filter2(function (source, index, array) {
  return source.coin >= 100;
});

console.log(filterCourses);



////////Some //////////////////////////////

Array.prototype.some2 = function (callback) {
  for (let index in this)
    if (this.hasOwnProperty(index)) {
      if (callback(this[index], index, this)) return true;
    }
  return false;
};

const sources = [
  {
    name: "javascript",
    coin: 100,
  },
  {
    name: "Php",
    coin: 0,
  },
  {
    name: "Nodejs",
    coin: 120,
  },
];

let result = sources.some2(function (source, index, array) {
  return source.coin >= 12;
});

console.log(result);



////////////// Every//////////////////////////////

Array.prototype.every2 = function (callback) {
  for (let index in this)
    if (this.hasOwnProperty(index)) {
      if (!callback(this[index], index, this)) return false;
    }
  return true;
};

const sources = [
  {
    name: "javascript",
    coin: 0,
  },
  {
    name: "Php",
    coin: 0,
  },
  {
    name: "Nodejs",
    coin: 0,
  },
];

let result = sources.every2(function (source, index, array) {
  return source.coin === 0;
});

console.log(result);



Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'


*/
