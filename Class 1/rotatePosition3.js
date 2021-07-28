//Rotate elements position by one

rotateArr = function(inputArray) {
    let lastElement = inputArray[inputArray.length -1]

    for(let i = inputArray.length - 1; i > 0; i--) {
        inputArray[i] = inputArray[i - 1]
    }
    inputArray[0] = lastElement

    return inputArray
}

sampleList = [1, 2, 3, 4]

//console.log(rotateArr(sampleList))

//Expected result = [4, 3, 1, 2]

rotateArrNew = function (inputArray, position) {
    for (let x = 0; x < position; x++) {
        rotateArr(inputArray)
    }
    return inputArray
}

console.log(rotateArrNew(sampleList, 1))