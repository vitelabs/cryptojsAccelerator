const scryptsy = require('scryptsy');
self.addEventListener('message', (event) => {
    const data = event.data;
    const result = exec(data);
    self.postMessage({
        name: data.cmd,
        id: data.id,
        result: result
    });
});

function exec(data) {
    switch (data.cmd) {
    case 'scryptsy':
        data[1]=Buffer.from(data[1]);
        return scryptsy(...data.args);
    }
}