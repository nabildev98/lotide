const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed. ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion failed. ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (let key in object1) {
    const obj1Value = object1[key];
    const obj2Value = object2[key];
    if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
      if (!eqArrays(obj1Value, obj2Value)) return false;
    } else if (obj1Value !== obj2Value) return false;
  }
  return true;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
console.log(eqObjects(cd, dc));
console.log(eqObjects(cd, cd2));
