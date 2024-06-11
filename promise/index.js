//this is weather station
const weather = new Promise((resolve,reject) => {
    // resolve('79deg');
    reject('Weather station down');
});

console.log('Hello World!');
//call to weather station
weather.then((data) => { //this is the callback function
    console.log(data);
}).catch((error) => console.log(error));

