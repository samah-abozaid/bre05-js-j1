//************Créez une boucle qui fait défiler 
//les chiffres de 0 à 10. Si le chiffre est pair : affichez "Pair".
//i le chiffre est impair : affichez "Impair".


let i = 0;

while (i <= 10) {
    if (i % 2 === 0) {
        console.log(`the number ${i} is an even number`);
    } else {
        console.log(`the number ${i} is an odd number`);
    }
    i++;
}