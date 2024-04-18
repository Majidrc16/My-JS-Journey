"use srict";

const calcTempAmplitude= function(temps){

    let max = temps[0];
    let min = temps[0];
  
    for( let i=0; i<temps.lenth; i++){
        const currentTemp = temps[i];
        if(currentTemp > max) max = temp[i];
        if(currentTemp< min) min =temps[i];
    }
    console.log(max);
};
calcTempAmplitude([3,7,4]);


