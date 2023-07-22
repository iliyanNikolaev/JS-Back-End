const events = require('events')

const subscribers = {};

const subscribe = (type, callback) => {
    if(subscribers[type] == undefined){
        subscribers[type] = [];
    }

    subscribers[type].push(callback);
}


const publish = (type, data) => {
    const currentSubscribers = subscribers[type];
    
    if(currentSubscribers != undefined) {
        currentSubscribers.forEach(handler => {
            handler(data);
        });
    }
}

const emitter = new events.EventEmitter();

module.exports = {
    subscribe,
    publish,
    emitter
}