//Return the sum of all negative numbers
// Return 0 if there are NO negative numbers
getSumNegative = function(inputList) {
    let result = 0
    for (let currentElement of inputList) {
        if (currentElement < 0) {
            result += currentElement
        }
    }
    return result;
}

sampleList = [-1, -2, 0, 2, 4]

console.log(getSumNegative(sampleList))