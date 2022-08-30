const eqArrays = require("./eqArrays");
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Equal!");
  } else {
    console.log("Not Equal");
  }
};
module.exports = assertArraysEqual;
