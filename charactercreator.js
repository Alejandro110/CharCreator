const readline = require('readline-sync');

let dicerolled = [];
let character1 = {
}


createChar(dicerolled)

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`you rolled a ${roll}!`);
        list.push(roll)
    }
}


function sum(list ){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum+= list[i];
    }
    return sum;
}


function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character,list) {
    character.name = readline.question("Enter character name:");
    console.log("Rolling STR")
    character.strength = rollStat(dicerolled);
    console.log("Rolling STR")
    character.dexterity = rollStat(dicerolled);
    console.log("Rolling STR")
    character.constitution = rollStat(dicerolled);
    console.log("Rolling STR")
    character.intelligence = rollStat(dicerolled);
    console.log("Rolling STR")
    character.wisdom = rollStat(dicerolled);
    console.log("Rolling STR")
    character.charisma = rollStat(dicerolled);
    console.log(character);
    character.weapon = rollStat(dicerolled);
    console.log(character);
    character.luck = rollStat(dicerolled);
    console.log(character);
    character.speed = rollStat(dicerolled);
    displayChar(character);
}

function displayChar(char){
console.log(`Name: ${char.name}`);
console.log(`STR: ${char.strength}`);
console.log(`DEX: ${char.dexterity}`);
console.log(`CON: ${char.constitution}`);
console.log(`INT: ${char.intelligence}`);
console.log(`WIS: ${char.wisdom}`);
console.log(`CHA: ${char.charisma}`);
console.log(`WPN: ${char.weapon}`);
console.log(`LUC: ${char.luck}`);
console.log(`SPD: ${char.speed}`);
}