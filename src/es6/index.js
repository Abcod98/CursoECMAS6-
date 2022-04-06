function newFunction(name, age, country) {
    var name = name || 'Abraham';
    var age = age || 23;
    var country = country || 'Guatemala';
    console.log(name, age, country)
}
// es6
function newFunction2(name = 'Abraham', age = 23, country = 'GT'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Job', '24', 'Solola');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry \n"
+ "continuacion de la frase."
// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Abraham',
    'age': 23,
    'country': 'GT',
}
console.log(person.name, person.age);
// es6
let { name, age, country} = person;
console.log( name, age, country);


let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education)

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
//a = 'a'; esto no se puede hacer
console.log(a)


let nombre = 'Abraham';
let edad = 32;

// es5
obj = { nombre: nombre, edad: edad};
// es6
obj2 = {nombre, edad};
console.log(obj2)

const names = [
    {name: 'Abraham', age: 23},
    {name: 'Job', age: 24}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    // codigo
}

const lisOfNames4 = name => {
    // codigo
}

const square = num => num * num;

// Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(4,-3));

import hello from './module';
console.log(hello());

function* helloWorld () {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);