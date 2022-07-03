var sounds=["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"];
var i;
for(i=0;i<7;i++){
    var j=i;
    document.getElementsByTagName("button")[i].addEventListener("click",function (){
        var ch=this.innerHTML;
        makesound(ch);
        animationBtn(ch);
        
    });
}
document.addEventListener("keypress",function(event){
    var ch=event.key;
    makesound(ch);
    animationBtn(ch);
})
function makesound(ch){
switch(ch){
    case "w":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    case "s":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "j":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "l":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

}
}
function animationBtn(ch){
    document.querySelector("."+ch).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+ch).classList.remove("pressed");
},100);}