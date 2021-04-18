function LargerNumber() {
    //alert("Hello world");
    let num1 = parseInt(prompt("Insert a number"));
    let num2 = parseInt(prompt("Insert another number"));

    if (num1 > num2) {
        document.getElementById('LargerNumber').innerHTML = (num1 + " is bigger");
    }
    else if (num1 < num2) {
        document.getElementById('LargerNumber').innerHTML = (num2 + " is bigger");
    }
    else if (num2 === num1) {
        document.getElementById('LargerNumber').innerHTML = ("This is the same number");
    }
    else {
        document.getElementById('LargerNumber').innerHTML = ("invalid");
    }
}


