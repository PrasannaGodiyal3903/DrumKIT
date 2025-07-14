var allbuttons=document.querySelectorAll("button");
for(var i=0; i<allbuttons.length; i++){
    allbuttons[i].addEventListener("click",function(){
        var buttonkey=this.innerHTML;
        makesound(buttonkey);
        buttonanimation(buttonkey);
    });
}

    document.addEventListener("keydown",function(event){
        makesound(event.key);
        buttonanimation(event.key);
    });
        function makesound(buttonkey){
        switch (buttonkey) {
            case "w":
                var crash=new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kickbass=new Audio("./sounds/kick-bass.mp3");
                kickbass.play();
                break;
            case "s":
                var snare=new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1=new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2=new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3=new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4=new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            default:
                break;
        }
        }
 function buttonanimation(buttonkey){
    document.querySelector("."+buttonkey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+buttonkey).classList.remove("pressed");
    },100)
 }
// document.addEventListener("keydown",function(event){
//     alert("Key was pressed");
// })

// var audio =new Audio("./sounds/crash.mp3");
//         audio.play();