const myArray = [0,1,2,3,4,5];
let myFavourates = ["aaa","bbb","ccc","ddd","eee","fff","ggg"]
let myFavourates2 = ["hhhh","iiii","jjjj","kkkk","llll","mmmm","nnnn"]
const myArray2=new Array(1,2,3,4,5,6,7)
// console.log(myFavourates.slice(2,5))
// console.log(myFavourates.push("xxx")); //add value to the last position of an array
// console.log(myFavourates.pop()); // delete value from last

// push X pop

//unshift add value to start of an array ----------------------
// console.log(myFavourates.unshift("zzz"));
// console.log(myFavourates)
// console.log(myFavourates[0])

// shift delete first value of array -------------------
// console.log(myFavourates.shift())
// console.log(myFavourates)



//inclues() check wheter value present in an array or not
// console.log(myFavourates.includes("zzz"))

//indexOf() retern the position of an element present in an array
// console.log(myFavourates.indexOf("ddd"))

// const newArray = myFavourates2.join();
// console.log(myFavourates2)
// console.log("NEW ARRAY",newArray)

// const sliceArr = myFavourates2.slice(0,5)
// console.log("full Array",myFavourates2)
// console.log("sliced array",sliceArr)

splice operation change the array (it will return range and trim other values from array and change array)
console.log("A",myFavourates2)
const spArray = myFavourates2.splice(0,5);
console.log("spliced array", spArray)
console.log("c",myFavourates2)
