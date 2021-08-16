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

//tukar any number to the standard form (ada masalah kalau value < 1)
function StandardForm(value) {

    //the whole exponent, with (berapa2) decimal place
    var expo = value.toExponential(2);
    //nak extract value power of only
    var pow = expo.toString().slice(-1);
    //exponent without value power of
    var expoOnly = expo.toString().slice(0, 4)

    answer = expoOnly + "×" + "10" + "" + "(power of " + pow + ")";

    /* if(value < 1) {

    } */

    return answer
}

/* var num = 0.0052;
console.log(StandardForm(0.0052));
console.log(num.toFixed); */

function gramToKilogram(value) {

    ans = value * (-1000);
    return ans
}

function kilogramToGram(value) {

    ans = value * (1000);
    return ans
}
//END FUNCTION

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

//Question 4:
var x = kilogramToGram(0.0049896);
var y = x * 500;
var z = y * 100;
ans = StandardForm(z);

console.log(ans);

//Question 5

