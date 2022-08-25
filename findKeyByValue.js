const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed. ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion failed. ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  const keys = object.keys;
  for (let key of object) {
    if (object[key] === value) return key;
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")
