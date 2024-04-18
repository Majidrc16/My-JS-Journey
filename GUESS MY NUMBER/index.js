'use strict';
const btnagain=Math.trunc(Math.random()*20) + 1;
document.querySelector(".btnagain").textContent=btnagain;
let score=0;
let highscore=0;


const displaymessage=function(message){
    const guess=MAth.trunc(Math.random()*5)+2;
    document.querySelector(".message").textContent="message";
}
const chkbtn=function(guess){
    document.querySelector(".guess").textContent=guess;
}
console.log(guess);
//if(guess != btnagain){
  //  displaymessage("No Number!");
//}else if(guess===btnagain){
 //   displaymessage("correct Number!");
   // if(score>highscore){
     //   highscore=score;
       // document.querySelector(".highscore").textContent=highscore;
    //}
//}else if(guess!==btnagain){
  //  if(score>1){
    //    document.querySelector(".message").textContent=guess>btnagain?"Too High":"Too Low";
      //  document.querySelector(".score").textContent=score;
    //}else{
      //  displaymessage("You lost the Game")
    //}
//}