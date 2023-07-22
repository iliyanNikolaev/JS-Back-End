const { emitter } = require('./eventBus');

emitter.on('message', (data) => {
    console.log('received data ' + data);
});