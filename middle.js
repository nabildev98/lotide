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

const middle = function (array) {
  if (array.length < 3) return [];
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  }
  return [array[mid]];

  // return array.length % 2;

  // array.slice(mid, mid + 1);
  // array.slice(mid - 1, mid + 1);
};
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3]));
