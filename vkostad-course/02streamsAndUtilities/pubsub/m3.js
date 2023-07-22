const { emitter } = require('./eventBus');

let sum = 0;

emitter.on('message', (data) => {
    sum += data;

    console.log('sum is ' + sum);
});