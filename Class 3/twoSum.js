twoSum = function (inputArray, number) {
    for (let x = 0; x < inputArray.length; x++){
        for (let y = x + 1; y < inputArray.length; y++) {
            if (inputArray[x] + inputArray[y] === number) {
                return [x, y]
            }
        }
    }
}

let array1 = [1, 3, 5, 7]

console.log(twoSum(array1, 10))