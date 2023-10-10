// 조건문 conditional, if !! else !!
// prompt > message & default
// & function을 멈추게 함 그래서 잘 안씀
// const age = prompt("How old are you?");

// console.log(typeof "15", typeof parseInt("15"));
// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));

// console.log(age);


//isNaN() => 입력한 값을 Boolean으로 알려줌
// const age = parseInt(prompt("How old are you?"));
//age가 숫자가 아닌 것이지?라는 응답에 대한 Boolean
// console.log(isNaN(age));



const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
    console.log("please write a number");
} else { 
    console.log("Thank you for writing your age")
}

// console.log(isNaN(age));