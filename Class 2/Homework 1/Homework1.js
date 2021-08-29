//Selection sort
selectionSort = function(inputArray) {
    let i, j, tmp, smallest
    for (i = 0; i < inputArray.length; i++){
        smallest = i;
        for (j = i + 1; j <= inputArray.length; j++){
            if (inputArray[j] < inputArray[smallest]) {
                smallest = j;
            }
        }
        tmp = inputArray[i]
        inputArray[i] = inputArray[smallest]
        inputArray[smallest] = tmp
    }
    return inputArray;
}

array1 = [2, 8, 6, 9, 5, 1, 4]

array2 = selectionSort(array1)

console.log(array2)

//Difference with the Insertion Sort
/*The Selection sort's Worst, Average and Best Case
are the same and they are as fast as the Insertion Sort Worst case.
The worst case for the Insertion Sort if we have the array sorted
in Descending order,
so it's definitely preferable to use Insertion Sort instead of Selection Sort
*/