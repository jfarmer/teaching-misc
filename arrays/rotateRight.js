function rotateRight(array) {
  if (array.length === 0) {
    return array;
  }

  let lastElement = array[array.length - 1];
  for(let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1]; // Shift each element to the right
  }
  array[0] = lastElement; // Set the first element to the last element

  return array;
}

console.log(rotateRight([-10, 20, 30, 40]))

// Ava
function rotateRight(arr) {
  let counter = 0
  let temp = arr[arr.length-1]
  while (counter < arr.length) {
    arr[counter] = temp
    temp = arr[counter+1]
    counter++
  }
  return arr
}

// def rotate_right(array):
//     array_len = len(array)
//     if array_len == 0:
//         return array
//     else:
//         new_array = [0]*array_len
//         new_array[0] = array[-1]
//         for i in range(1, array_len):
//             new_array[i] = array[i-1]

//     return new_array

console.log(rotateRight([10,20,30,40]))
