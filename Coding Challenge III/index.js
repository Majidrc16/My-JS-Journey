// To Find the Average Score of the "Two Teams" and find the "Winner"
// Also, given Bonus Condition that is if any tean has Score > 100 then, that Team Wins
// Similar, is the second Condition given with Bonus

    
let DolphinsScore;
let koalasScore;
DolphinsScore = (96 + 208 + 89);
koalasScore = (88 + 91 + 110);
const averageDScore= (DolphinsScore)/3;
const averageKScore= (koalasScore)/3;
console.log(averageDScore, averageKScore);

if(averageDScore > averageKScore && averageDScore >=100){
    console.log("Winner is Dolphins Team");
}else if(averageDScore < averageKScore && averageKScore >= 100){
    console.log("Winner is Koalas Team");
}else if (averageDScore == averageKScore){
    console.log("Match is Draw");
}