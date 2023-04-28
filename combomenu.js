const readline = require('readline-sync');


let sandwhich=readline.question('enter beef,tofu, or chicken: ');
console.log(sandwhich);

let beverageChoice=readline.question('Do you want a drink? Enter yes or no: ');
if (beverageChoice == "yes"){
    let beverageSize=readline.question('small,medium, or large:');
    console.log(beverageSize);
}