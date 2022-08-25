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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `Assertion Success: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(`Assertion Fail: ${inspect(actual)} === ${inspect(expected)}`);
  }
};
assertObjectsEqual({ a: "1", b: 2 }, { b: 2, a: "1" }, true);
// console.log(`Example label: ${inspect(actual)}`);
