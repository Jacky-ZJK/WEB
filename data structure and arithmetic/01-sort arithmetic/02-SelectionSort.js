function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

function selectionSort (arr) {
  let length = arr.length
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i
    for (let j = i; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(arr, i, minIndex)
    }
  }

  return arr
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selectionSort(arr));