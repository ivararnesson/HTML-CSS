var menyKnappen = document.getElementById("meny-knapp");
var meny = document.querySelector(".meny");

menyKnappen.addEventListener("click", function()
{
    var computedStyle = window.getComputedStyle(meny);
    if (computedStyle.display === "none" || computedStyle === "")
    {
        meny.style.display = "none";
    }
    else
    {
        meny.style.display = "block";
    }
});