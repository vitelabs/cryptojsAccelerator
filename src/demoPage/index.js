// file node-add.js
const m_scrpty = require('../wasm/wasm-module-scrpty.js');

function onRuntimeInitialized(){
const wasm_scrpty=m_scrpty.cwrap('scrypt_1024_1_1_256', 'string', ['string']);
let a=wasm_scrpty("jkgfhfxl");
window.result=a;

}
m_scrpty['onRuntimeInitialized'] = onRuntimeInitialized;