//FUNCTIONS or FORMULAS

//basic round off function = DONE
function RoundOff(number, decimal) {    

    return answer = number.toFixed(decimal);
}

// cara untuk solve number times (10 to the power of anything) = DONE
function StandardFormAnswer(number, exponent) {

    exponent = Math.pow(10, exponent);

    return answer = number * exponent;
}

//function tukar whole number to exponential form
function exponentialForm(value, decimal) {
    var x = value.toExponential(decimal);

    //bawah ni optional, tak letak pun akan jalan macam biasa jugak
    if(decimal == '') {
        var x = value.toExponential()
    }
    return x
}

function StandardForm(value) {
    //5900 in standard form = 5.9 x 10(3)

    var x = value.toExponential();
    //var y = 

    answer = x.toString() + "x" + Math.pow(10, 2).toString();
    return answer
}
//END FUNCTION

console.log(StandardForm(5900));


//Question 1:
console.log(RoundOff(5.4002, 3));
console.log(RoundOff(5.4035, 3));
console.log(RoundOff(5.4173, 3));
console.log(RoundOff(5.4085, 3));

//Question 2: Express 0.01204 in standard form.
console.log(StandardFormAnswer(0.1204, -2));
console.log(StandardFormAnswer(1.204, -2));
console.log(StandardFormAnswer(0.1204, -3));
console.log(StandardFormAnswer(1.204, -3));

//#region nak buat function untuk dapatkan equation drpd answer
/*function StandardForm(value) {

    answer = Math.pow(10, 2) + "x" + value.toString();

    console.log(answer);
}

StandardForm(0.01204);*/

//target:
// StandardForm (0.01204) = 1.204 * 0.01 
//fck xleh sial
//#endregion

//Question 3: 59020000 = 𝑝 × 10�.  State the value of p and of q.
console.log(exponentialForm(59020000));
