const images=["https://i.pinimg.com/736x/5c/1f/e7/5c1fe78bfff96ddae63bc636c5ceaaf9.jpg","https://i.pinimg.com/600x315/a7/42/aa/a742aa6db25eed6096922fafc6783cdc.jpg","https://thumbs.dreamstime.com/z/cat-playing-dog-isolated-white-background-57339195.jpg?w=768","https://thumbs.dreamstime.com/z/kitten-puppy-sleeping-40476783.jpg?w=992"];


const caraousel=document.querySelector(".caraousel");
const interval=setInterval(function(){
    startCaraousel();
},3000)
var index=1;

startCaraousel=()=>{
    caraousel.style.backgroundImage=`url(${images[index++]})`;
    caraousel.classList.remove("fade");
    void caraousel.offsetWidth;
    caraousel.classList.add("fade");
    if(index>images.length-1) index=0;
}
