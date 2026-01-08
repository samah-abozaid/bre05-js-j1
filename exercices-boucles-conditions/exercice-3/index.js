//La boucle parcourt les nombres de 0 à 100

//0 à 50 → on affiche uniquement les nombres pairs (un sur deux)

//51 à 100 → on affiche uniquement les multiples de 3 (un sur trois)

//Chaque nombre affiché est marqué Pair ou Impair

let i=0;

while(i<=100){
    if(i<=50 && i%2===0){
        console.log(`the nombre ${i} is even`)
    }else if(i>50 &&i%3===0){
        if(i%2===0){
            console.log(`the nombre ${i} is even`)
        }else{
            console.log(`the nombre ${i} is odd`)
        }
    }
    i++
      }
