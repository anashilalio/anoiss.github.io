let images =  document.querySelector(".img");
let currentImage = document.querySelector(".current");
let next = document.querySelector(".next");
let prev = document.querySelector(".previous");
function nexxt(){
    let nextImage = currentImage.nextElementSibling;

    if(!nextImage){
        nextImage = document.querySelector('.img:first-child');
    }
    currentImage.classList.remove('current');
    nextImage.classList.add('current');
    currentImage = nextImage;
}
function prevv(){
    let prevImage = currentImage.previousElementSibling; 
    if(!prevImage){
         prevImage = document.querySelector('.img:last-child');
    }
    currentImage.classList.remove('current');
    prevImage.classList.add('current');
    currentImage = prevImage;
}
next.addEventListener("click" , function(){
    nexxt();
})
prev.addEventListener("click" , function(){
    prevv();
})
setInterval(nexxt , 2000);