var seeMore_Ninfeu = document.getElementById("seeMore_Ninfeu");
var seeLess_Ninfeu = document.getElementById("seeLess_Ninfeu");
var hidden_Ninfeu = document.getElementById("hidden_Ninfeu");

seeMore_Ninfeu.addEventListener("click", function () {
    hidden_Ninfeu.classList.add("open");
    var contentHeight = hidden_Ninfeu.scrollHeight + "px";
    hidden_Ninfeu.classList.remove("open");

    hidden_Ninfeu.style.maxHeight = contentHeight;
    hidden_Ninfeu.classList.add("open");

    seeMore_Ninfeu.style.display = "none";
    seeLess_Ninfeu.style.display = "block";
});

seeLess_Ninfeu.addEventListener("click", function () {
    hidden_Ninfeu.style.maxHeight = "0"; 
    hidden_Ninfeu.classList.remove("open");

    seeMore_Ninfeu.style.display = "block";
    seeLess_Ninfeu.style.display = "none";
});










var seeMore_Hidraul = document.getElementById("seeMore_Hidraul");
var seeLess_Hidraul = document.getElementById("seeLess_Hidraul");
var hidden_Hidraul = document.getElementById("hidden_Hidraul");

seeMore_Hidraul.addEventListener("click", function () {
    hidden_Hidraul.classList.add("open");
    var contentHeight = hidden_Hidraul.scrollHeight + "px";
    hidden_Hidraul.classList.remove("open");

    hidden_Hidraul.style.maxHeight = contentHeight;
    hidden_Hidraul.classList.add("open");

    seeMore_Hidraul.style.display = "none";
    seeLess_Hidraul.style.display = "block";
});

seeLess_Hidraul.addEventListener("click", function () {
    hidden_Hidraul.style.maxHeight = "0"; 
    hidden_Hidraul.classList.remove("open");
    
    seeMore_Hidraul.style.display = "block";
    seeLess_Hidraul.style.display = "none";
});





var seeMore_Escombros = document.getElementById("seeMore_Escombros");
var seeLess_Escombros = document.getElementById("seeLess_Escombros");
var hidden_Escombros = document.getElementById("hidden_Escombros");

seeMore_Escombros.addEventListener("click", function () {
    hidden_Escombros.classList.add("open");
    var contentHeight = hidden_Escombros.scrollHeight + "px";
    hidden_Escombros.classList.remove("open");

    hidden_Escombros.style.maxHeight = contentHeight;
    hidden_Escombros.classList.add("open");

    seeMore_Escombros.style.display = "none";
    seeLess_Escombros.style.display = "block";
});

seeLess_Escombros.addEventListener("click", function () {
    hidden_Escombros.style.maxHeight = "0"; 
    hidden_Escombros.classList.remove("open");
    
    seeMore_Escombros.style.display = "block";
    seeLess_Escombros.style.display = "none";
});




    
    var bibliografia = document.getElementById("bibliografia");
    var hiddenBibliografia = document.getElementById("hidden_Bibliografia");
/** 
    var artigos = document.getElementById("artigos");
    var hiddenArtigos = document.getElementById("hidden_Artigos");

        artigos.addEventListener("click", function () {
            toggleSection(hiddenArtigos);
        });*/

        bibliografia.addEventListener("click", function () {
            toggleSection(hiddenBibliografia);
        });

    function toggleSection(hiddenElement) {
        if (hiddenElement.classList.contains("open")) {
            hiddenElement.style.maxHeight = "0";
            hiddenElement.classList.remove("open");
        } else {
            hiddenElement.classList.add("open");
            var contentHeight = hiddenElement.scrollHeight + "px";
            hiddenElement.style.maxHeight = contentHeight;
        }
    }
