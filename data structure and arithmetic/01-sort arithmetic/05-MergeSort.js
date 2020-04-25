function mergeSort (arr) {
  const len = arr.length
  if (len < 2) { 
    return arr
  }

  let mid = Math.floor(len / 2)
  let left = arr.splice(0, mid)
  let right = arr

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift())
  }

  return result.concat(left, right)
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(mergeSort(arr));