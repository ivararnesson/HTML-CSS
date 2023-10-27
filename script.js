var menyKnappen = document.getElementById("meny-knapp");
var meny = document.querySelector(".meny");

menyKnappen.addEventListener("click", function()
{
    if (meny.style.display === "none" || meny.style.display === "")
    {
        meny.style.display = "block";
    }
    else
    {
        meny.style.display = "none";
    }
});