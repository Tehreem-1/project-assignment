//Scenario 1 
function add (x:number,y:number):Number{
    return x + y
}
let x = add(5,3)
console.log(x)


//scenario 2 
    function checkEvenOrOdd(x:number):string {
        if (Number.isInteger(x)) {
            if (x % 2 === 0) {
                return 'The entered integer is an even number'
            }else
                return 'The entered integer is an odd number'
        }else
            return 'Please enter a valid integer'
    }let y = checkEvenOrOdd(3)
    console.log(y)


//Scenario 3 
function calculateArea(width:number,height:number):number{
    return width * height
}
let u = calculateArea(3,2)
console.log(u)


//Scenario 4 
function reverseString(str:string):string{
    return str.split('').reverse().join('')
}
let m = reverseString('sabeen')
console.log(m)
//Scenario 5 
function convertCelsiusToFahrenheit(TempC:number):number{
    let conversion = (TempC * 9/5)+32
    return conversion
}
let  h = convertCelsiusToFahrenheit(9)
