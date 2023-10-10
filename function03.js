// Evnet / 3.4 =>     / search ->javascript Element

// event 검색시 좋은 방법
// 1. 구글 > 찾고싶은 element name ex)h1 > MDN에 검색 >
// "h1 html element mdn" 검색 후 사이트 > javascript element 확인
// 2. Web APIs이 포함된 페이지 찾기 / property에서 원하는 이벤트 찾기
// 번거로우면 console.dir(element);를 통해서 확인 가능

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() { 
    title.style.color = "blue";
}
function handleMouseEnter() { 
    title.innerText = "mouse is here";
}
function handleMouseLeave() { 
    title.innerText = "mouse is gone";
}
// 3.4
// title.addEventListener('click', handleTitleClick);
// title.addEventListener('mouseenter', handleMouseEnter);
// title.addEventListener('mouseleave', handleMouseLeave);

// Evnet / 3.5 =>  2:16
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);
// .removeEventListener
