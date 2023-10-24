const cookie = document.getElementById("cookie");
let countOfClicks = 0;

cookie.onclick = function() {
    countOfClicks += 1;
    document.getElementById("clicker__counter").textContent = countOfClicks.toString();
    cookie.width = (cookie.width == 200 ? 180 : 200);
};
