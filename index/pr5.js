//SCOPE . HOISTING . OBJECT !!!!!

//local
let global = 'ini adalah contoh global scope'

function myfunction(){
    let local = 'ini adalah lokal scope'
console.log(global);
console.log(local);
}

myfunction();
console.log(global);


//HOISTING
console.log(x);
var x ="aku adalah hoisting";

console.log(hoistingFunction());
function hoistingFunction() {
    return "aku adalah hoistin function";
}


//literal
let orang = {
    nama : 'ayam',
    umur : 14,
    greet : function() {
        console.log('hello im ' + this.nama);
    }
}
orang.greet();
console.log(orang.umur);


//new word