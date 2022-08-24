const without = function (source, itemsToRemove) {
  let resultSource = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      resultSource.push(item);
    }
  }
  return resultSource;
};
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion passed. ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑 Assertion failed. ${actual} !== ${expected}`);
//   }
// };
