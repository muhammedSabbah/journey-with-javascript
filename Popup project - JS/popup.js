var btnModel = document.querySelector(".btn-model");
var parentModel = document.querySelector(".model-parent");
var homeSection = document.querySelector(".home-section");
var btnClode = document.querySelector(".x-close");

btnModel.addEventListener("click", appearModel);
btnClode.addEventListener("click", hideModel);

function appearModel(){
    parentModel.style.display = "block";
    homeSection.style.filter = "blur(10px)";
}

function hideModel(){
    parentModel.style.display = "none";
    homeSection.style.filter = "none"
}