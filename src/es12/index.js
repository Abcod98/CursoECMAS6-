// Reemplaza 
const string = "JavaScript es un lenguaje de programacion JavaScript es GOOD";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2)

class Message {
    #show(val){
        console.log(val)
    };
    get #add(val){
        ...
    }
}

const message = new Message();
message.show('Hola!');


const promise1 = new Promise ((resolve, reject) => reject("1"));
const promise2 = new Promise ((resolve, reject) => resolve("2"));
const promise3 = new Promise ((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))


class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse)

//TC39
// Stage 0 IDEA, Stage 1 PROPOSAL, Stage 2 DRAFT, Stage 3 CANDIDATE, Stage 4 READY