'use strict';

const answer=Math.floor(Math.random()*10+1);
let guess=0;
document.getElementById("submitbutton").onclick=function(){
     guess=document.getElementById("guessfield").Value;
guess+=1;
if(guess===answer){
    console.log(` the ${answer} is the number, it tookyou ${guess} guess`);
}else if(guess<answer){
    console.log("Too Small!");
}else{
    console.log("Too Large!");
}
}

