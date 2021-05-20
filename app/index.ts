// importer un element d'un autre ficher (avec le mot clé import, from indique le fichier depuis lequel importer)
import {trier} from "./helper";
// types en TS (primitifs)
let message: string;
let nombre: number = 42;
let verif: boolean = true;

// les tableaux en TS
const messages: string[]= [
    "Bonjour",
    "Poulet",
    "truc"
];

let numbers: number[] = [2,4,3,5]
console.log(numbers);
const nbTriee = trier(numbers);

console.log(nbTriee);

message = "Bonjour";
// non respect du typage
// message = 2;

// typage de fonction (ici la valeur de retour attendue est un string)
function direBonjour(): string {
    return "Bonjour";
}
// void est le type vide
function ecrireMessage(message: string): void{
    console.log(message);
}
let key = 2;

switch (key) {
    case 2:
        console.log("Key =", 2)
    case 3:
        console.log("Key =", 3)
        break;
    default:
        break;
}

ecrireMessage("Coucou");