// #3 차례

// console 창에 document or console.dir(document)검색하면 html 나옴
// document.title => 제목 나옴 / javascript는 HTML을 불러온다.


//object화
// const title = document.getElementById("something");

// 아이디값
// title.innerText = (" Got you !");

// console.dir(title);
// console.log(title.id)
// console.log(title.className);

// 3-2 getElementsByClassName,getElementsByTagNam
// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");


//3-3 querySelector  -> element를 css방식으로 검색 가능 / 06:58
// getElementsByClass
// querySelector 은 id,class 까지 모든걸 담을 수 있음 / querySelectorAll은모든것들

// const title = document.querySelector(".hello h1");
// title.innerText = "Hello"
// console.log(title);
//내부가 궁금하면
// console.dir(title);
// title.style.color = "blue";

// event
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() { 
    // console.log("title was clicked!");
    title.style.color = "blue";
}

// title.addEventListener('click', function () { });
title.addEventListener('click', handleTitleClick);

// handleTitleClick();
//뒤에 실행되게 하면 행동을 해야 이벤트 작동이 됨