combinations = function (inputArray) {
    let tmp, smallest
    for (let i = 0; i < inputArray.length; i++){
        smallest = i;
        for (let j = i + 1; j <= inputArray.length; j++) {
            if (inputArray[j] < inputArray[smallest]) {
                smallest = j;
            }
        }
        tmp = inputArray[i]
        inputArray[i] = inputArray[smallest]
        inputArray[smallest] = tmp
    }
    let arrayNew = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i-1] !== inputArray[i]){
            arrayNew.push(inputArray[i])
        }
    }
    for (let i = 0; i < arrayNew.length - 1; i++){
        for (let j = i + 1; j < arrayNew.length; j++){
            if (arrayNew[i] !== arrayNew[j]) {
                console.log([arrayNew[i], arrayNew[j]])
            }
        }
    }
}

let array1 = [2, 3, 4, 5, 3]

console.log(combinations(array1))