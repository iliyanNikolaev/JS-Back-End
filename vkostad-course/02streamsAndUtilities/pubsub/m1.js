const { subscribe } = require('./eventBus');

subscribe('message', (data) => {
    console.log('received data ' + data);
});