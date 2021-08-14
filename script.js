//Question 1:

//basic round off function = DONE
function RoundOff(number, decimal) {    

    answer = number.toFixed(decimal);

    //console.log(answer);
}

RoundOff(5.4002, 3)
RoundOff(5.4035, 3)
RoundOff(5.4173, 3)
RoundOff(5.4085, 3)

RoundOff(183.716, 0);

//Question 2: Express 0.01204 in standard form.

// cara untuk solve number times (10 to the power of anything) = DONE
function StandardFormAnswer(number, exponent) {

    exponent = Math.pow(10, exponent);

    answer = number * exponent;

    console.log(answer); //= DONE

}
//cth: Calculate 1.204 times 10 to the power of negative 2:
StandardFormAnswer(0.1204, -2);
StandardFormAnswer(1.204, -2);
StandardFormAnswer(0.1204, -3);
StandardFormAnswer(1.204, -3);

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

