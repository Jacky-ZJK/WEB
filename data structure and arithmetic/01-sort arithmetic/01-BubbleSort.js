function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]]
}

//普通的冒泡排序
function bubbleSort (arr) {
  let length = arr.length
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
} 

//带缓存的冒泡排序
function bubbleSort2 (arr) {
  for (let i = arr.length - 1; i > 0;) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        //记录最后一次交换的索引
        pos = j
      }
    }
    i = pos
  }
  
  return arr
}

//二分+缓存
function bubbleSort3 (arr) {
  let start = 0
  let end = arr.length - 1
  while (start < end) {
    let startPos = 0
    let endPos = 0
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        endPos = i
      }
    }
    end = endPos
    
    for (let i = end; i > start; i--) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1)
        startPos = i
      }
    }
    start = startPos
  }

  return arr
}

let arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
console.log(bubbleSort3(arr))