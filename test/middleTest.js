const assertEqual = require("../assertEqual");

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Equal!");
  } else {
    console.log("Not Equal");
  }
};
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3]));