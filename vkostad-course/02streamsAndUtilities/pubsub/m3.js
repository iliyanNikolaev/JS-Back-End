const { subscribe } = require('./eventBus');

let sum = 0;

subscribe('message', (data) => {
    sum += data;

    console.log('sum is ' + sum);
});