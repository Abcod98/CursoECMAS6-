const data = {
    frontend: 'Abraham',
    backend: 'Job',
    design: 'Sanchez'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
    frontend: 'Abraham',
    backend: 'Job',
    design: 'Sanchez'
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);


const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ----'));
console.log('food'.padEnd(12,' ----'));


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hellow World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();