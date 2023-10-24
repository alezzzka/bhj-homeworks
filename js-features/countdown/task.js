function timer() {
    let timer = document.getElementById("timer");
    timer.textContent--;

    if(timer.textContent <= 0) {
      clearInterval(timerId);
      alert("Вы победили в конкурсе!");
    }
}

let timerId = setInterval(timer, 1000);
