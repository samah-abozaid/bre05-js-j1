const secretNumber = 42; // nombre à deviner (entre 0 et 100)
let userNumber = null;

while (userNumber !== secretNumber) {

    userNumber = parseInt(
        window.prompt("Devinez le nombre (entre 0 et 100) :"),
        10
    );

    if (userNumber < secretNumber) {
        window.alert("C'est plus");
    } 
    else if (userNumber > secretNumber) {
        window.alert("C'est moins");
    } 
    else {
        window.alert("Bravo, vous avez gagné !");
    }
}