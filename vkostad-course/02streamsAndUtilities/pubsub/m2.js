const { publish } = require('./eventBus');

let counter = 0;

setInterval(() => {
    console.log('sended data ' + counter);
    
    publish('message', counter);
    counter++;
}, 3000);
