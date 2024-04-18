// "TEST 1 "
CalcAverage=(a,b,c)=>(a + b +c)/3;
let scoreDolphins=CalcAverage(44,23,71);
let scoreKoalas=CalcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);
function CheckWinner(avgDolphins,avgKoalas){
    if(avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins team wins the "Trophy", with (${avgDolphins} vs ${avgKoalas})`);
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas team wins the "Trophy", with (${avgKoalas} VS ${avgDolphins})`);
    }else{
        console.log(`Noteam Wins`);
    }
}
 WINNER=CheckWinner(570,111);
 console.log(WINNER);

 //"TEST 2"
 scoreDolphins=CalcAverage(85,54,41);
 scoreKoalas=CalcAverage(23,34,27);
 console.log(scoreDolphins,scoreKoalas);
 WINNER=CheckWinner(245,111);
 console.log(WINNER);
 