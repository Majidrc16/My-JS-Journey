const Marks={
    fullName:"MARKS",
    Place:"USA",
    CalcBMImarks:function(mass,height){
        return mass/(height*2);
    }
}
console.log(Marks.CalcBMImarks(78,1.69));

const JOHNS={
    fullName:"JOHNS",
    Place:"USA",
    CalcBMIjohns:function(mass1,height1){
    return(height1*2)/(height1*height1);
}
}
console.log(JOHNS.CalcBMIjohns(92,1.95));
//John's BMI (28.3) is higher than Mark's (23.9)!"
console.log(`Marks BMI ${Marks.CalcBMImarks(78,1.69)} is higher than Johns ${JOHNS.CalcBMIjohns(92,1.95)}.`);
