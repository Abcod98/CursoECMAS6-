const objt = {
    name: 'Abraham',
    age: 23,
    country: 'GT'
};

let { country, ...all } = obj;
console.log(all);

const obj = {
    name: 'Abraham',
    age: 32
}

const obj1 = {
    ...obj,
    contry: 'GT',
}

console.log(obj1);


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hellow World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2022-04-05');
    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(year, month, day);