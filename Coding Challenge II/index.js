const marksmass=78;
const marksheight=1.69;
const johnsmass=92;
const johnsheight=1.95;

const BMImarks=marksmass/(marksheight** 2);
const BMIjohns=johnsmass/(johnsheight* johnsheight);
console.log(BMImarks, BMIjohns);

// Using "TEMPELATE STRING"
const string=`Marks BMI ${BMImarks} is higher than johns ${BMIjohns}`;
console.log(string);

// Another Values

const marksmass1=95;
const marksheight1=1.88;
const johnsmass1=85;
const johnsheight1=1.76;

const BMImarks1=marksmass1/(marksheight1** 2);
const BMIjohns1=johnsmass1/(johnsheight1* johnsheight1);
console.log(BMImarks1, BMIjohns1);

// Using "TEMPELATE STRING"
const string1=`Marks BMI ${BMImarks1} is less than johns ${BMIjohns1}`;
console.log(string1);