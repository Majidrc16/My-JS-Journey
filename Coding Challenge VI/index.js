function Calctips(Bills){
    return Bills >= 50 && Bills <=300 ? Bills*0.2:Bills*0.5;
}

const Bills=[125,555,44];
const tips =[
    Calctips(Bills[0]), Calctips(Bills[1]), Calctips(Bills[2])
];
const total =[Bills[0] + tips[0], Bills[1] + tips[1], Bills[2] + tips[2]
];
console.log(Bills,tips,total);