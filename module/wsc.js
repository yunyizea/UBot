const WebSocket = require('ws');
const config = require('../config');

const wsc = new WebSocket(config.server);
module.exports = {
    sender: (command, parameter) => {
        wsc.send(JSON.stringify({
            action: command,
            params: parameter
        }));
    },

    listener: (callback) => {
        try {
            wsc.on('message', (evt) => {
                callback(JSON.parse(evt));
            })
        } catch (error) {
            console.log(`[UBot ERROR]: ${error}`)
        }
    }
}