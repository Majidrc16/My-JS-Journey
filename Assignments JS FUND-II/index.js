'use strict'; // Activating Strict Mode

//"FUNCTIONS":- Can genrrate that that type of code that we over and over again
function logger() {
    console.log("My name is Majid");
}
logger();
logger();
logger();

// Now Declaring in a argument in the function.

function fruitProcessor(apple, orange){
    const juice= `juice with ${apple} apples and ${orange} oranges`;
    return juice;
}
const applejuice=fruitProcessor(5,3);
console.log(applejuice);

const orangejuice=fruitProcessor(7,8);
console.log(orangejuice);

// "ASSIGNMENT" on "FUNCTIONS"
// Also declaring the "values", "variables", "string", "Boolean type"

function description(country, population, capacity){
    const finland=`World has ${country} country with ${population} million population and its ${capacity} capacity will exist`;
    return finland;
}
const indiafinland=description("USA", 11, 11000);
console.log(indiafinland);

const Indiafinland=description("UK", 189, 18000);
console.log(Indiafinland);

const INdiafinland=description("BR", 899, 1800020);
console.log(INdiafinland);

// "FUNCTION EXPRESSION"
// HOW "FUNCTION EXPRESSION" AND "FUNCTION DECLARATION"
// The major difference in the "Function declartion is "We can cause declaration" before defining the code.

function CalcAge1(bithyear){
    return 2037 - bithyear;
}
const Age1=CalcAge1(1991); // Declaring the Function
console.log(Age1);

//"FUNCTION EXPRESSION"
const CalcAge2=function(birthyear){
    return 2038 - birthyear;
}
const Age2=CalcAge2(1992);
console.log(Age2);

// Another Example on "Function Declaration" && "Function expression"
function CalcNum(Number){
    return 4000 + Number;
}
const Num=CalcNum(45);
console.log(Num);

// "Function Expression"
const Calcnum1=function(Number1){
    return 5222 - Number1;
}
const num1=Calcnum1(456);
console.log(num1);

// Another Example on "Function Declaration" && "Function Expression"
function Sum(x,y){
    return x +y;
}
const Sum1=Sum(2,4);
console.log(Sum1);

// "Function Expression"
const Sum2=function(SUM){
    return 789+SUM;
}
const Sum3=Sum2(8);
console.log(Sum3);

// "ASSIGNMENT", ON "FUNCTION DECLARATION" & "FUNCTION EXPRESSION" 
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
    }
    const percPortugal1 = percentageOfWorld1(10);
    const percChina1 = percentageOfWorld1(1441);
    const percINDIA1 = percentageOfWorld1(332);
    console.log(percPortugal1, percChina1, percINDIA1);
    
    // "FUNCTION EXPRESSION"
    const percentageOfWorld2 = function (population) {
        return (population / 7900) * 100;
        }
        const percPortugal2 = percentageOfWorld1(1055);
    const percChina2 = percentageOfWorld1(1851);
    const percINDIA2= percentageOfWorld1(2362);
    console.log(percPortugal1, percChina1, percINDIA2);

// "ASSIGNMENT", ON "ARROW FUNCTION"

const percentageOfWorld3=population1=>(population1/7900)*100;
const percChina3=percentageOfWorld3(456);
const percRussia3=percentageOfWorld3(895);
const percGermany3=percentageOfWorld3(654);
console.log(percGermany3, percChina3, percRussia3);

// "ASSIGNMENT", ON "FUNCTION CALLING FUNCTION" && "REVIEWING FUNCTION"
function describePopulation(population2){
    return population2;
}
function percentageOfWorld4(country, population2){
    const percMARDIA=describePopulation(country, population2);
    const percSAUDI=describePopulation(country,population2);
    return `MARDIA has ${country}, which is about ${population2}`;
}
console.log(percentageOfWorld4("CHINA" , 4500));
console.log(percentageOfWorld4("YAMAN" , 745));

// "ARRAYS" are first type of "DATA STRUCTURES"
// "Arrays are "Big Containers" in which we can add values and then later reference them.
// "Arrays" atre zero based.
const friends =["Majid", "Faizan", "Shahid", "Jeeran"];
console.log(friends);
// Another way to console individually
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
// Also,(BRACKETS)
console.log(friends[friends.length]);

// Changing Element in the Array
friends[2]="Jonas";
console.log(friends);

// Adding Array in the array
// in other words, Array can hold value with different types all at the same time
const firstName="Jonas";
const Jonas=["Micheal", "Steve", "JASIR", friends];
console.log(Jonas);

// Exercise IST on ARRAYS
const CalcAGE=function(BIRTHYEAR){
    return 2037 - BIRTHYEAR;
}
const Years =[2000, 2001, 2002, 2003];
const AGE1=CalcAGE(Years[0]);
const AGE2=CalcAGE(Years[1]);
const AGE3=CalcAGE(Years[2]);
const AGE4=CalcAGE(Years[3]);
const AGES=[CalcAGE(Years[0]), CalcAGE(Years[1]), CalcAGE(Years[2]), CalcAGE(Years[3])];
console.log(AGES);

// BASIC "ARRAY" OPERATIONS AND METHODS
 const FRIENDS=["MAJID", "FAIXAN", "SHAHID", "JONAS"];
 //PUSH METHOD(ADDING AN ELEMENT)
 FRIENDS.push("JAY");
 console.log(FRIENDS);
 const newlength=FRIENDS.push("JAY");
console.log(newlength);

// UNSHIFT METHOD
FRIENDS.unshift("JOHN");
console.log(FRIENDS);

// REMOVING ELEMENT IN THE ARRAY
FRIENDS.pop();
FRIENDS.pop();
FRIENDS.pop();
FRIENDS.pop();
FRIENDS.pop();
console.log(FRIENDS);
// INDEX OF METHOD
console.log(FRIENDS.indexOf("JOHN"));
// INCLUDES OF METHOD
console.log(FRIENDS.includes("JOHN")); //TRUE Becoz "JOHN" Exists in the ARRAY
console.log(FRIENDS.includes("SHAHID"));// FALSE Becoz that does not exiSt in ARRAY
// USING "IF?ELSE STATEMENTS
if(FRIENDS.includes("MAJID")){
    console.log("Ahlem will be SBI Employee");
}else if(FRIENDS.includes("SHAHID")){
    console.log("Ahlem will not an SBI employee");
}else{
    console.log("Ahlem Will Die");
}
// Assigments on "Arrays"

const populations=[10,20,30,40];
console.log(populations[0]);
console.log(populations[1]);
console.log(populations[2]);
console.log(populations[3]);
// Also, checking conditions
console.log(populations.length === 4);

// ASSIGNMENTS on "BASIC METHODS ON ARRAYS"

const Neighbours=["INDIA", "RUSSIA", "PORTUGAL"];
console.log(Neighbours);
// ADD an Element to the ARRAY
Neighbours.push("BERMINGGAM");
console.log(Neighbours);
// Remove the Element from the array
Neighbours.pop();
console.log(Neighbours);
// Using "IF/ELSE" STATEMENTS
if(Neighbours != ("GERMANY")){
    console.log("Probably not a central european country");
}else if(Neighbours.includes("RUSSIA")){
    console.log("MAJID IS AN FRONT-END-DEVELOPER");
}else{
    console.log("Everything is GGOD");
}

// Changing the "ELEMENT" in the ARRAY
Neighbours[Neighbours.indexOf("INDIA")]="REPUBLIC OF INDIA";
console.log(Neighbours);

// Introduction to "OBJECTS" && "DOT VS BRACKET NOTATION"
// OBJECTS:- are second "DATA SYRUCTURES", which combine multiple values

const Buddy={
    firstname:"Majid",
    age:21,
    place:"Ang",
    neighbours: ["faizan","shahid","jeeran"]
}
console.log(Buddy);
// Also,
console.log(
    `${Buddy.firstname}is a man,he is ${Buddy.age} years old,he livesin ${Buddy.place},and his neigbours
    ${Buddy.neighbours}.`);
//Also, Using "DOT" NOTATION
Buddy.age+=4;
console.log(Buddy.age);
//Also, Using "BRACKET" NOTATION
Buddy["age"]+=8;
console.log(Buddy.age);

//"OBJECT MODELS" && DOT && BRACKET NOTATION
const Majid={
    firstname:"Majid Razak Chasballi",
    birthplace:"Anantnag",
    birthyear:1998,
    job:"Software Engineer",
    friends:["a","b","c"],
    calcage:function(birthyear){
        return 2023 - birthyear;
    }

};
console.log(Majid.calcage(1998));

// "LOOPS"
// Loops are fundamental languages og programming language
// TAsks that we perform over and over again

// "FOR LOOP" :- Keep running while the cndition is "True"

for(let i=0; i<=10; i++){
    console.log(`Majid is a Software Engineer ${i}`);
}

// ASSIGNMENTS on "LOOPS"
for(let voter=1; voter<=50; voter++){  
    console.log(`voter number ${voter} is currently voting`);
}
// Reverse of Above Programm
for(let voter1=50; voter1>=1; voter1--){
    console.log(`voter1 is ${voter1} is currently voting`);
}


// "LOOPING ARRAYS", "BREAKING", "CONTINUING"
// one of the most features of "FOR LOOP" is "LOOPING ARRAYS" 

const Numearray=[
    "MAJID","RAZAK",2023-1998,"Software Engineer",["FAIZAN","SHAHID","JEERAN"]
];
for(let i=0; i<=Numearray.length; i++){
    console.log("Nume[i], typeof Nume[i]"); // ALl elements and check type of elements in the array
}
// reading from ARRAY

 const jacks=[
   "MAJID","RAZAK",2023-1998,"Software Engineer",["FAIZAN","SHAHID","JEERAN"]
];
const type=[];
for(let i=0; i<=jacks.length; i++){
    console.log("jacks[i], typeof jacks[i]");
    type.push(typeof jacks[i]);
console.log(type);
}


// Calculate "Ages" and store them in a new array
const years=[2023, 2024, 2025, 2026, 2027];
const ages=[];
for(let i=0; i<=years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

// "CONTINUE" & "BREAK"
const rocks=[
    "majid", "razak",25, "anantnag"
];
console.log(".........ONLY STRINGS.......");
for (let i=0; i<rocks.length; i++){
    if(typeof rocks[i] !== "string") continue;

console.log(rocks[i], typeof rocks[i]);
}

//BREAK STATEMENT
const jack=["ABC", "EFG", 2023-1998, "XYZ" ];
for(let i=0; i<jack.length; i++){
    if(typeof jack[i] !== "number") break;
    console.log(jack[i], typeof jack[i]);
}

// "CONTINUE STATEMENT"

const rack=["ABC", "XYZ", "MJK", "LKK", 78];
const Nume=[];
for(let i=0; i<rack.length; i++){
    console.log(rack[i],typeof [i]);
    Nume.push(typeof rack[i]);
    console.log(Nume);
}

// "BREAK" & "CONTINUE" STATEMENTS
const kaif=["Majid","Razak","Chasballi",25,"Anantnag"];
console.log(".........ONLY STRING..........");
for(let i=0; i<kaif.length; i++){
    if(typeof kaif[i] === "string") continue;
    console.log(kaif[i], typeof kaif[i]);
}

//"WHILE LOOP"
// First we use "INITIALIZATION"
// Second we use "CONDITION"
// Third we use "CONSOLE"
// Fourth we use "INCREMENT"
// Example on "WHILE LOOP"

let rep=1;
while(rep <=10){
    console.log(`lifting weight ${rep}`);// "FORWARD CONDITION"
    rep ++;
}
// "REVERSE CONDITION"
let hep=12;
while(hep>=1){
    console.log(`AI is an revolution ${hep}`);
    hep--;
}

// EXAMPLE ON "WHILE LOOP"
// GAME "ROLL A DICE"

let dice=Math.trunc(Math.random() * 6) +1;
console.log(dice);
while(dice !== 6){
    console.log("you rolled a dice");
    dice=Math.trunc(Math.random() *6) +1;
    if(dice === 6) console.log("loop is about to end........");
}

// "EXAMPLE ON "WHILE LOOP" ON "ARRAYS"
const time=[20.30,40,50];
let calctym=45;
while(calctym==45){
    console.log("time is 12:00 am");
    calctym=time[length];
    if (calctym !== 15) console.log("Time is not defined");
}

// EXAMPLE ON "OBJECT MODEL"

const JS={
    fullname:"Majid",
    job:"Engineer",
    spent:function(birthyear){
        return 2023-birthyear
    }
};
console.log(JS.spent(1998));

// Another Example on "OBJECT MODEL"

const MS={
    fullname:"MAJID",
    lastname:"RAZAK",
    kind:function(workingtime){
        return 24 - workingtime; 
    }
};
console.log(`the working time  of ${MS.fullname} is ${kind.workingtime(8)}`);