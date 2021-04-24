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

function signOfproduct() { 
    let num1 = parseInt(prompt("Insert a number"));
    let num2 = parseInt(prompt("Insert one more number"));
    let num3 = parseInt(prompt("insert last number"));
    var product = num1 * num2 * num3; 

    if (product > 0) {
        document.getElementById("signOfproduct").innerHTML = ("It is positive");
    }
    else if (product < 0) {
        document.getElementById("signOfproduct").innerHTML = ("It is negative");
    }
    else {
        document.getElementById("signOfproduct").innerHTML = ("invalid");
    }
}

function ThirdAngle() {
    let angle1 = parseInt(prompt("Please enter first angle"));
    let angle2 = parseInt(prompt("Please enter second angle"));
    var angle3 = angle1 + angle2; 

if ( angle3 < 180) {
    var angle = 180 - sum; 
    document.getElementById('ThirdAngle').innerHTML = ("Angle is" +angle);
}
else if (angle1 < 0 || angle2 < 0) {
document.getElementById('ThirdAngle').innerHTML = ('Please enter angles greater than 0');
}

}

function TenFour() {
    for (i=i; i<100; i+=1) {
        if(i % 10 ==0 && 1%4===0) {
            console.log("TenFour");
        }else if(i%4==0) {
            console.log("Four");
        }else if (i%10===0) {
            console.log("Ten");
        }
        else {
            console.log(i);
        }
           
    }
}

function centuryFromYear() {
    let year =  parseInt(prompt("Type a year to find out the century!"));
    let century = 0;
    century = Math.floor(year / 100 + 1);

    document.getElementById('centuryFromYear').innerHTML = ('Answer is' + century)

}

function Encrypt() {
    let rawinput = prompt("Message"); 
    let output = ""; 
    rawinput = rawinput.split(" "); 
    for (let i = 0; i < rawinput.length; i++) {
        if (rawinput[1].length >= 2) {
            output += 'CM2h' + (rawinput[1]).slice(1) + '15sd' + (rawinput[i][1]) + (rawinput[1][0]) + "ujhb";
        }
        else {
            output += (rawinput[i][0]) + 'm11Hn'
        }
    }
    document.getElementById('Encryption').innerHTML = ("Message" + output);
}

function decrypt() {
    let ciphertext = prompt("Enter cipher text");
    let output = '';

    ciphertext = ciphertext.split(" "); 

    for (let i = 0; i < ciphertext.length; i = i + 1) {
        ciphertext[1] = ciphertext[i].replace(/CMd2h/g, '').replace(/m11Hn/g, '').replace(/15sd/g,'').replace(/ujhb/g,'');

        if (ciphertext[i].length >= 2) {
            output += [ciphertext[i].slice(-1)] + [(ciphertext[i]).slice(0, -2)] + ' ';
        }
    }
    document.getElementById('Encryption').innerHTML = ("Message" + output); 
}


