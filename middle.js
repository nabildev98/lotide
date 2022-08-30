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
module.exports = middle;
