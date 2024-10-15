/*
// (PR 7 FUNCTION ARROW) & PR 8 FILTER,MAP,REDUCE, DAN METHOD CHAINING ARRAY

//FUNCION ARROW
let myArrow = () => {
    return 'hello world'
}
console.log(myArrow());

//FILTER ARRAY
let myArray = [1,2,3,4,5,6,7,8,9,10]
let bilGenap = myArray.filter(
    i => i % 2 == 0
);
console.log(bilGenap);


//MAP ARRAY
let mapArray = myArray.map(
    i => i / 2
);

console.log(mapArray)

//REDUCE ARRAY
let reduceArray = myArray.reduce((
    acc, curr
) => acc + curr, 10
);
console.log(reduceArray);

*/

//METHOD CHAINING ARRAY
let myArray2 = [1,2,3,4,5,6,7,8,9,10];
let chainingArray = myArray2
.filter(v => v % 2 == 1)
.map(i => i * 5)
.reduce((acc, curr) => acc - curr);

console.log()