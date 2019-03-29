var myArray = ['1', '2', '3', '4', '5'];

var i, j, k;
for (i = myArray.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray[i - 1];
    myArray[i - 1] = myArray[j];
    myArray[j] = k;
}


document.write("números aleatorios : " + myArray);