const marval_heros = ["aaa","bbb","ccc","ddd","eee"]
const dc_heros = ["fff","ggg","hhh","iii","jjj","kkk"]

// const allHeros = marval_heros.concat(dc_heros)
// marval_heros.push(dc_heros)
// console.log("All Heros",allHeros);
// console.log("marval Heros",marval_heros)

//spread operator to create concated array
const allNewHeros = [...marval_heros,...dc_heros]
// console.log("All New Heros",allNewHeros);

const slAll = allNewHeros.slice(0,8)
// console.log("All N H",slAll)

const another_array=[1,2,3,4,[5,6,7],9,0,3, [1,4,5, [0,3,2,1,]], 10,100,30]
const real_array = another_array.flat(Infinity)
// console.log(real_array);

// convert string to array

//array.isArray () return true if array or false if not
console.log(Array.isArray("Sanskruti"))

//array.form () conver string into array
console.log(Array.from("Sanskruti"))

let Score1=100
let Score2=200
let Score3=300
console.log(Array.of(Score1,Score2,Score3)) 