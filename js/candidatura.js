var seeMore_Social = document.getElementById("seeMore_Social");
var seeLess_Social = document.getElementById("seeLess_Social");
var hidden_Social = document.getElementById("hidden_Social");

seeMore_Social.addEventListener("click", function () {
    hidden_Social.classList.add("open");
    var contentHeight = hidden_Social.scrollHeight + "px";
    hidden_Social.classList.remove("open");

    hidden_Social.style.maxHeight = contentHeight;
    hidden_Social.classList.add("open");

    seeMore_Social.style.display = "none";
    seeLess_Social.style.display = "block";
});

seeLess_Social.addEventListener("click", function () {
    hidden_Social.style.maxHeight = "0"; 
    hidden_Social.classList.remove("open");

    seeMore_Social.style.display = "block";
    seeLess_Social.style.display = "none";
});





var seeMore_Imperios = document.getElementById("seeMore_Imperios");
var seeLess_Imperios  = document.getElementById("seeLess_Imperios");
var hidden_Imperios  = document.getElementById("hidden_Imperios");

seeMore_Imperios.addEventListener("click", function () {
    hidden_Imperios.classList.add("open");
    var contentHeight = hidden_Imperios.scrollHeight + "px";
    hidden_Imperios.classList.remove("open");

    hidden_Imperios.style.maxHeight = contentHeight;
    hidden_Imperios.classList.add("open");

    seeMore_Imperios.style.display = "none";
    seeLess_Imperios.style.display = "block";
});

seeLess_Imperios.addEventListener("click", function () {
    hidden_Imperios.style.maxHeight = "0"; 
    hidden_Imperios.classList.remove("open");

    seeMore_Imperios.style.display = "block";
    seeLess_Imperios.style.display = "none";
});
