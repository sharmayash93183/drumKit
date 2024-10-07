var all=document.querySelectorAll(".drum").length;
for(var i =0; i<all; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML=this.innerHTML;
      key(buttonInnerHTML);
      animation(buttonInnerHTML);
    });
}


document.addEventListener("keypress",function(e){
    var keys=e.key;
    key(keys);
    animation(keys);

})

function key(keyStrokes){
    switch (keyStrokes) {
        case "q":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
           
        case "w":
            var tom2=new Audio("./sounds/tom-2.mp3");    
            tom2.play();
            break;

        case "e":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "r":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "k":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "l":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        
        default:
            break;
    }
}

function animation(keyStrokes){
  document.querySelector("."+keyStrokes).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+keyStrokes).classList.remove("pressed");
},100)
}