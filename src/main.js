const lazyImage = document.getElementById('lazyImage');
lazyImage.onload = function() {
    lazyImage.style.opacity = 1;
    lazyImage.classList.add('kep2');
};

function unHide(){
    document.getElementById("dots").style.display = "none";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("hidden").classList.add("animate-slide-in");
    if(document.getElementById("death")){
        document.getElementById("death").style.backgroundColor = "rgb(31, 0, 0)";
    }
    document.getElementById("asdf").style.backgroundColor = "rgb(0, 31, 0)";
};