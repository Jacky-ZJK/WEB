function quickSort (arr) {
  let length = arr.length
  if (length < 2) {
    return arr
  }

  let pivot = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  
  return quickSort(left).concat(pivot, quickSort(right))
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));