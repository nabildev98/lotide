// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return "✅ Assertion Passed: [actual] === [expected]";
  } else if (actual !== expected) {
    return "🛑 Assertion Failed: [actual] !== [expected]";
  }
};

// TEST CODE
assertEqual("Labs", "Labs");
assertEqual(5, 5);
assertEqual(9, 9);
