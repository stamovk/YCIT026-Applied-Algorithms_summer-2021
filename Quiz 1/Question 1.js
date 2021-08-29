/*Question #1 (5 points)
Create a function which returns true or false, which tells us if an array is sorted.
    If it is sorted, return true.
    Therefore: [1, 2, 3, 4, 3, 6] would return “false”.
If it is not sorted, return the index of the first element where it’s not sorted.
    Tip: A for loop will help you compare the previous and current number*/

is_sorted = function (inputArray){
    for (let i = 0; i < inputArray.length - 1; i++){
            if (inputArray[i] > inputArray[i+1]){
                return i + 1;
            }
    }
    return true;
}

let array1 = [1, 2, 3, 4, 6]

console.log(is_sorted(array1))