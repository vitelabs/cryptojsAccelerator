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
        return scryptsy(...data.args);
    }
}