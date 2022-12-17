function compareArrays(arr1, arr2) {
  let result;
result = arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
  return result;
}

function advancedFilter(arr) {
  let resultArr = arr
    .filter((element) => element > 0)
    .filter((element) => element % 3 === 0)
    .map((element) => element * 10);

  return resultArr; // array
}
