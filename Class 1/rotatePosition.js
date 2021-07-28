//Rotate elements position by one

rotateArr = function(inputArray) {
    let newArr = [inputArray[inputArray.length - 1]]
    for (let currentValue in inputArray) {
        if (currentValue < inputArray.length - 1) {
            newArr.push(inputArray[currentValue])
        }

    }
    return newArr;
}

sampleList = [1, 2, 3, 4]

//Expected result = [4, 1, 2, 3]
console.log(rotateArr(sampleList))