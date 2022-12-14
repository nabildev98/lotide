const assertEqual = require("../assertArraysEqual");
const assert = require("chai").assert;
const tail = require("../tail");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(["5"]), "5");
  });
});

// TEST CODE
assertEqual("Labs", "Labs");
assertEqual(5, 5);
assertEqual(9, 9);
