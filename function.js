// function
// argument
// 2.7 => 7:28 ~ 다시 듣기

function sayHello(nameOfPerson, age) { 
    // console.log(nameOfPerson, age);
    console.log("Hello my name is" + nameOfPerson + "and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

console.log("lalala");

// NaN = Not a Number (숫자없음)
function plus(firstNumber, secondNumber) { 
    console.log(firstNumber + secondNumber);
}
// console.log(firstNumber); -> plus 안에만 존재에서 에러가 뜸 defined

function divide(a, b) { 
    console.log(a / b);
}

plus(8, 60);
plus(4, 20);
divide(8, 4);

const player = {
    name: "nico",
    sayHello: function (otherPersonName) { 
        console.log("hello! " + otherPersonName + " nice to meet you ");
    },
}
console.log(player.name);
player.sayHello("lynn");


