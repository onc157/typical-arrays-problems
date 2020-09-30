
exports.min = function min (array) {
  let result = 0;
  if (array === ('' || undefined)) return 0;
  array.sort(function(a, b) {
    return a - b;
  });

  array.reverse().forEach(function(element, index, array) {
    if (element < array[index - 1]) {
      result = element
    }
  });
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if (array === ('' || undefined)) return 0;
  array.sort(function(a, b) {
    return a - b;
  });

  array.forEach(function(element, index, array) {
    if (element > array[index - 1]) {
      result = element
    }
  });
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if ((!array) || (array.length === 0)) return 0;

  array.forEach(function(element, index, array) {
      result = result + +element.toFixed(2);
  });

  result = result / array.length;
  return +result.toFixed(2);
}
