//FILTER =>fungsinya utk memfilter data array
//FILTER ini termasuk hig order value
const myArray = [1, 2,3,4,5,6,7,8,9,10]
let filterArray = myArray.filter(i => i % 2 === 0 );
console.log(filterArray);

//MAP => fungsinya utk memetakan data array
//MAP ini termasuk high order value
let mapArray = myArray.map(v => v + 1)
console.log(mapArray);

//REDUCE => fungsinya utk mengakumulasikan dan menampilkan nilai akhir dari sebuah operasi ARITMATIKA
//wajib pakai params  2 biji sbg (Accumulator dan Current Value)
//REDUCE ini termasuk high order value
let reduceArray = myArray.reduce((accumulator, currentValue) => accumulator + currentValue )
console.log(reduceArray);

//opsional utk menentukan nilai awal bisa ditambah koma (,)
//jadi nilai bisa ditambah dengan nilai awal setelah koma
//ex
let reduceArray2 = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 10 )
console.log(reduceArray2);

//METHOD CHAINING =>utk menggabungkan kesuluruhan method diatas
let chainArrayMethod = myArray
.map(v => v * 3)
.filter(i => i % 2 !== 0)
.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(chainArrayMethod);

//FOREACH => fungsinya utk memanggil isian array dgn nama elemen 
myArray.forEach(element => {
    console.log(element);
    
});