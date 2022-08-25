const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("hello"));

// console.log(letterPositions("hello"));
// string.split("").forEach((char, index) => {
//   if (char !== " ") {
//     results[char] ? results[char].push(index) : (results[char] = [index]);
//   } //how to get index of a foreach
//   //what to do w index
//   // line 5 use result instead of count,
// });

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Equal!");
  } else {
    console.log("Not Equal");
  }
};

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
