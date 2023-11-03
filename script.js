var menyKnappen = document.getElementById("meny-knapp");
var meny = document.querySelector(".meny");

menyKnappen.addEventListener("click", function() {
    if (meny.classList.contains("visa")) {
        meny.classList.remove("visa");
    } else {
        meny.classList.add("visa");
    }
});
function startTime() {
    let today = new Date();

    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hrs = checkTime(hrs);
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    document.getElementById("date").innerHTML = day + " " + date + " " + month;

    let time = setTimeout(startTime, 1000)
}
function checkTime(i) {
    if (i < 10)
    {
        i = "0" + i;
    }
    return i;

}
startTime()
