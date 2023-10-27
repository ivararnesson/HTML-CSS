var menyKnappen = document.getElementById("meny-knapp");
var meny = document.querySelector(".meny");

menyKnappen.addEventListener("click", function() {
    if (meny.classList.contains("visa")) {
        meny.classList.remove("visa");
    } else {
        meny.classList.add("visa");
    }
});
