function quickSort(array){
    
    var pivot = Math.floor(array.length / 2);
    var less = [];
    var great = [];
    
    if (array.length < 2){
        return array;
    }
  for (var i = 0; i < array.length; i++){
    if(array[i] < array[pivot]){
        less.push(array[i]);
    } else {
        great.push(array[i]);
    }
  }
  return quickSort(less).concat(pivot,quickSort(great));
};

//  function swap(array, i, j){
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//  }

//  function quickSort(array, left, right){
//     left = left || 0;
//     right = right || array.length -1;

//   var pivot = partitionHoare(array , left, right);
//    if (left = pivot - 1) {
//      quickSort(array, left, pivot - 1);
//    }
//    if (right = pivot){
//      quickSort(array, pivot, right);
//    }
//    return array;
//  }

//  function partitionHoare(array, left, right){
//     var pivot = Math.floor((left + right) / 2);
 
//     while (left < right){
//         while(array[left] < array[pivot]){
//             left++;
//         }
//         while(array[right] > array[pivot]){
//             right--;
//         }
//         if (left <= right){
//             swap(array, left, right);
//             left++;
//             right--;
//         }
//     }
//     return left
//  }
// }

const test1 = quickSort([8,7,3,6,9,2,4,5,1]);
console.log(`Should sort a short array of integers: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test1)}`);

const test2 = quickSort([8,7,3,3,9,2,4,5,1]);
console.log(`Should handle duplicates: expected [1,2,3,3,4,5,7,8,9] and got ${JSON.stringify(test2)}`);

const test3 = quickSort([9,8,7,6,5,4,3,2,1]);
console.log(`Should handle reversely sorted array: expected [1,2,3,4,5,6,7,8,9] and got ${JSON.stringify(test3)}`);

const test4 = quickSort([]);
console.log(`Should handle empty array: expected [] and got ${JSON.stringify(test4)}`);

const test5 = quickSort([1]);
console.log(`Should handle array with single element: expected [1] and got ${JSON.stringify(test5)}`);