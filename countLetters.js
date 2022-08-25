const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed. ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion failed. ${actual} !== ${expected}`);
  }
};

function countLetters(string) {
  const count = {};
  string.split("").forEach((char) => {
    if (char !== " ") {
      count[char] = count[char] ? count[char] + 1 : 1;
    }
  });
  return count;
}
console.log(countLetters("lighthouse in the house"));
