const character = "Legolas";
console.log(character);

// let character = "gimli";--> ici tu va trouver un error car charchter est un constant

let name="Legolas";
console.log(name);

name="gimili";
console.log(name);


// Très grand nombre entier
let bigInteger = 12345678901234567890;
console.log(bigInteger);

// Nombre avec beaucoup de décimales
let bigDecimal = 12345.67890123456789;
console.log(bigDecimal);

// Nombre négatif
let negativeNumber = -42;
console.log(negativeNumber);

// Booléens
let yes = true;
let no = false;
console.log(yes);
console.log(no);

//comprison  +  logique condtion

let age= 24;
if(age>18)
{
    console.log("major");
}
else
{
   console.log("mineur") 
}

// Les boucles
let i=0;
while(i<5)
{
    console.log(i);
    i++;
}
