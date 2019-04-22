const EventEmitter = require('events');

var url = 'http://mylogger.io/log';


class Logger extends EventEmitter{
    log(message) {
        console.log(message);

        //raised an event
        this.emit('messageLogged', {id: 1, ulr: 'http://' });
    }
}

module.exports = Logger;