export default function (len=6){
    let s='';
    for(let i=1;i<=len;i++){
        s+=String.fromCharCode(Math.floor(Math.random()*26)+97)
    }
    return s;
}