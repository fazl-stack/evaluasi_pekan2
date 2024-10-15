//HIGHER ORDER FUNCTION
//FUNCTION YANG BEROPRASI PADA FUNCTION YANG LAIN

function belajar(_prKoding,selesai) {
    console.log(`mulai kerjain ${_prKoding} ...`);
    selesai();
}

function selesai() {
    alert('sudah selesai belajar!');
}

belajar('pemrograman function ', selesai);

//CALLBACK


//DESTRUCTURE 
//ARRAY
const buah =['naga', 'anggur' , 'nanas'];

const [a, b , c] = buah;
console.log(a)

//OBJECT
const rumah = new Object();
rumah.tamu = 'tv'
rumah.keluarga = 'sofa'
rumah.dapur = 'panci'

const {keluarga : family, tamu, dapur} = rumah;
console.log(family)


