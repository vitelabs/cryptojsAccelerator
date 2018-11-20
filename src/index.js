import  scryptsyWorker from 'worker-loader?{"inline":true,"fallback":false}!./scryptsy.worker.js';
import random from './random';

const w =scryptsyWorker();
module.exports= function asyncScryptsy(...args) {
    const id = Date.now() + random();
    w.postMessage({
        cmd: 'scryptsy',
        args,
        id
    });
    const timeout = 30000;
    return new Promise((res, rej) => {
        const timer = setTimeout(() => {
            rej(new Error('timeout'));
        }, timeout);
        w.addEventListener('message', (event) => {
            if (event.data && event.data.id && event.data.id === id) {
                clearTimeout(timer)
                const data = event.data;
                res(data.result);
            }

        });
        w.addEventListener('error', function (e) {
            if (event.data && event.data.id && event.data.id === id) {
                clearTimeout(timer)
                console.log([
                    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
                ].join(''));
                rej(e);
            }
        });
    });
}
module.exports.default = module.exports;