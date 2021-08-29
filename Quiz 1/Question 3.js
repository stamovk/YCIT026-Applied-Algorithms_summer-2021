get_array_value = function (inputArray, action) {
    let temp = inputArray[0]
    if (action === "max"){
        for (let i = 1; i < inputArray.length; i++) {
            if (inputArray[i] > temp) {
                temp = inputArray[i]
            }
        }
        if (inputArray.length === 0) {
            return null
        }
        else {
            return temp
        }
    }
    else if (action === "min"){
        for (let i = 1; i < inputArray.length; i++) {
            if (inputArray[i] < temp) {
                temp = inputArray[i]
            }
        }
        if (inputArray.length === 0) {
            return null
        }
        else {
            return temp
        }
    }
    else if (action === "average"){
        for (let i = 1; i < inputArray.length; i++) {
            temp += inputArray[i]
        }
        if (inputArray.length === 0) {
            return null
        }
        else {
            return temp/inputArray.length
        }
    }
    else if (action === "sum"){
        for (let i = 1; i < inputArray.length; i++) {
            temp += inputArray[i]
        }
        if (inputArray.length === 0) {
            return null
        }
        else {
            return temp
        }
    }
    else {
        return "Error"
    }
}

let array1 = [1, 3, 5, 4]

console.log(get_array_value(array1, "average"))