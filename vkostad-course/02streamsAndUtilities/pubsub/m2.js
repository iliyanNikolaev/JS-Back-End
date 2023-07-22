const { emitter } = require('./eventBus');

let counter = 0;

setInterval(() => {
    console.log('sended data ' + counter);

    emitter.emit('message', counter);
    counter++;
}, 3000);
