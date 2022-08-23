// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion passed. ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑 Assertion failed. ${actual} !== ${expected}`;
  }
};

const head = function (array) {
  return array[0];
};

assertEqual(head)[5];
