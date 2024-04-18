// Decleration of variables
let country= "india";
console.log(country);

let continent = "Asia";
console.log(continent);

let population = 12000;
console.log(population);

// Declaring the variables by combining them;
let country1, continent1, population1;
country1 = "GERMANY";
continent1 = "ASIA";
population1 = 15000;
console.log(country1, continent1, population1);

// DATA TYPES ASSIGNMENTS
let island = 44;
console.log(typeof island);
island = "Majid";
console.log(typeof island);

// "LET", "VAR", "CONST"
// 1. "LET" :- has been used first when declaring the variables that is the concept of the "LET" to declare a Variable.

// 2. "CONST" :- it is used used when we don't change a variable and makes them to hold on a constant term.

const ageMajid=2023-1998;
console.log(ageMajid);

// Another example to declare the multiple variable
const ageMajid1=2023-1998;
const ageJonas=2028-1992;
console.log(ageMajid, ageJonas);

//Another way to use"CONST"

const now=2023;
const ageMajid2 = now - 1998;
const ageJonas2 = now - 1992;
console.log(ageMajid2, ageJonas2);
console.log(ageMajid2/2,ageJonas*2,2*2*4);

//Another use of "CONST" to add in the "STRINGS"

const firstName="Majid";
const lastName="Razak";
console.log(firstName + ' ' +lastName);

// ASSIGNMENT OPERATORS
let x = 10 +58;
console.log(x);

// Increment in the value by 1
let x1 = 250 + 100;
x1 = x1+=50; // another way is "+=" , "-=", "*=", "/="
 x1++; // increment by 1
console.log(x1);

// COMPARISON OPERATORS

const ageA=58;
const ageB=45;
console.log(ageA > ageB);
console.log(ageA < ageB);
console.log(ageA == ageB);

// Assignments on "BASIC OPERATORS" by using "TEMPELATE LITERALS"

const description="Portugal is in Europe";
const population2= 11;
const descriptionNew=`${description}, having ${population2} million population.`;
console.log(descriptionNew);

// "STRINGS" & "TEMPELATE STRINGS"
// Portugal is in Europe and its 11 million people speak portuguese.
const countryName2="portugal";
const Name="Europe";
const population3=11;
const language="portuguese";
const descriptionNew1=`${countryName2} is in ${Name} and its ${population3} million speak ${language}.`;
console.log(descriptionNew1);

// ASSIGNMENTS ON "IF/ELSE" STATEMENT
const INDIApopulation = 33;
if(INDIApopulation >= 33){
    console.log("portugal population's above average");
}else{
    console.log("Portugal's population 22 million is below average");
}
// Another way to Change the population temperorly

const KASHpopulation=700;
let oldpopulation;
if(KASHpopulation >= 2000){
    oldpopulation =1000;
}else {
     oldpopulation =800;
}
console.log(oldpopulation);

//  Assignment on "TRUTHY AND FALSY" && "EQUALITY OPERATORS"

const numNeighbours=prompt("How many neighbouring countries does your country have");
if(numNeighbours == 1){
    console.log("only Border");
}else if(numNeighbours >= 1){
    console.log("more than one border")
}else if (numNeighbours === 0){
    console.log("No Border");
}else{
    console.log("Nothing in this Border");
}

// Assignment on "SWITCHES"

const day="Monday";
switch(day){
    case "Monday":
        console.log("Plan to have a meeting");
        break;
        case "Tuesday":
            console.log("Plan is going to be in office for meeting");
            break;
            case Wensday:
                console.log("Plan is unchanged");
                break;
                case Thursday:
                    case Friday:
                    console.log("I am busy today");
                    break;
                    case Saturday:
                        case Sunday:
                            console.log("Enjoying A weeked");
                            break;
                            default:
                            console.log("nothing!");
                        
}

// Assignments on "Conditional (TERNARY) OPERATORS"

const ageC=20;
const drink=ageC >= 20? "wine" | "Water":
console.log(drink);

let drink2;
if(ageC >= 20){
    drink2="water";
}else{
    drink2="Wine";
}
console.log(drink2);