const checkMonotonic = function (array) {
  const first = array[0];
  const last = array[array.length - 1];
  // 1.......10
  if (first === last) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] !== array[i]) return false;
    }
  } else if (first < last) {
    // non decreasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] < array[i]) {
        console.log('false');
        return false;
      }
    }
  } else {
    // non increasing
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] > array[i]) {
        console.log('false');
        return false;
      }
    }
  }
  console.log('true');
  return true;
};

checkMonotonic([9]);
