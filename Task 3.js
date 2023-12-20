//Task3 
//Scenario 1 
//  Initializing an array 
let cats = ['Angel', 'Jolly', 'Kitty'];
//using the 'push' method to add a new cat to the array
console.log(`The following array add a new cat ' Brownie ' to the end of array and returns the new length of the array : \n NEW LENTGH = ${cats.push('Brownie')}
\n New Array = ${cats}`);
//using the pop method to remove the cat'Brownie' from the array
console.log(`Name of the cat removed : ${cats.pop()} \n New Array = ${cats}`);
//using the 'shift method ' to remove the cat 'Angel' from the array
console.log(`Name of the cat removed = ${cats.shift()} \n New Array : ${cats}`);
//using the 'unshift ' method to add'Angel' and 'Brownie' to the beginning of the array
console.log(`New length of array :${cats.unshift('Angel', 'Brownie')} \n New Array = ${cats}`);
//Scenario 2 
//Creating Subarrays
//Using splice
let subCats = cats.splice(0, 2, 'Pinky', 'Charlie');
console.log(`Deleted Cats = ${subCats} \n New Array = ${cats}`);
//Using slice 
let newCats = cats.slice(0);
console.log(`This is a new array , without modifying the original array : \n ${newCats}`);
export {};
