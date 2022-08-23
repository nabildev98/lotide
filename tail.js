// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑 Assertion failed. ${actual} !== ${expected}`;
  }
  const tail = assertEqual.slice(1);
  console.log(tail);
};

// TEST CODE
assertEqual("Labs", "Labs");
assertEqual(5, 5);
assertEqual(9, 9);
