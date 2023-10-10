// console.log 는 결과를 보여주기 위한 것 = alert
// return시, funtion은 작동을 멈추고 결과값을 도출해서 끝남 
// funtion을 return뒤에 하면 작동 X
const calculator = {
    plus: function (a, b) {
        // console.log("gg");
        return a + b;
        // console.log("hello");
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) { 
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
     },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);