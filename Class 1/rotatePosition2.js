//Rotate elements position by one

rotateArr = function(inputArray) {
    let lastElement = sampleList[sampleList.length -1]

    for(let i = inputArray.length - 1; i > 0; i--) {
        inputArray[i] = inputArray[i - 1]
    }
    inputArray[0] = lastElement

    return inputArray
}

sampleList = [1, 2, 3, 4]

//Expected result = [4, 1, 2, 3]
console.log(rotateArr(sampleList))