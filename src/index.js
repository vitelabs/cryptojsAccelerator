import scryptsyWorker from './scryptsy.worker.js';
import random from './random';
//     pwdBuff, salt, +scryptParams.n, +scryptParams.r, +scryptParams.p, +scryptParams.keylen
const w = new scryptsyWorker();
export default function asyncScryptsy(...args) {
    const id=Date.now()+random();
    w.postMessage({
        cmd: 'scryptsy',
        id: 'any',
        args,
        id
    });
    const timeout = 30000;
    return new Promise((res, rej) => {
        const timer = setTimeout(() => {
            rej(new Error('timeout'));
        }, timeout);
        w.addEventListener('message', (event) => {
            if(event.data&&event.data.id&&event.data.id===id){
            clearTimeout(timer)
            const data = event.data;
            res(data.result);
            }

        });
        w.addEventListener('error', function (e) {
            if(event.data&&event.data.id&&event.data.id===id){
                            clearTimeout(timer)
            console.log([
                'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
            ].join(''));
            rej(e);
            }
        });
    });
}