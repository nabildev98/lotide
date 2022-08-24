// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed. ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion failed. ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Labs", "Labs");
assertEqual(5, 5);
assertEqual(9, 9);
