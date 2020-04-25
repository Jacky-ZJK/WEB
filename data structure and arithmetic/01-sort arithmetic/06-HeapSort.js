function swap(arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

function heapSort (arr) {
  let length = arr.length
  for (let i = Math.floor(length / 2 - 1); i >= 0; i--) {
    heapify(arr, i, length)
  }

  for (let i = length - 1; i >= 0; i--) {
    swap(arr, 0, i)
    length -= 1
    heapify(arr, 0, length)
  }

  return arr
}

function heapify (arr, index, length) {
  let largest = index
  let left = index * 2 + 1
  let right = index * 2 + 2

  if (left < length && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== index) {
    swap(arr, index, largest)
    heapify(arr, largest, length)
  }
}

var arr = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22];
console.log(heapSort(arr));