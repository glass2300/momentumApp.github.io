const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // String의 길이가 2가 되지 않는다면 앞에 "0"을  추가해준다.
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// setInterval(sayHello, 5000);  //5초마다 함수를 실행시킴
// setTimeout(sayHello, 5000);  //5초 후 함수를 실행시킴


