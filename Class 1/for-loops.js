array1 = ["A", "B", "C", "D"]

// By Index
for (let currentLetter in array1) {

    //console.log(currentLetter)

    console.log(array1[currentLetter]);
}

//By Object
for (let currentItem of array1) {

    console.log(currentItem);

}