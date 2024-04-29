
function unHide(){
    document.getElementById("dots").style.display = "none";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("hidden").classList.add("animate-slide-in");
    document.getElementById("death").style.backgroundColor = "rgb(31, 0, 0)";
};