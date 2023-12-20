import inquirer from 'inquirer';
let answers = await inquirer.prompt([{
    type:'input',
    name:'userchoice',
    message:'IF YOU WANT TO BUY FRUITS, PRESS 1 ,IF YOU WANT TO BUY VEGETABLES , PRESS 2'  
}
]);
async function shopping(){
    console.log('WELCOME TO OUR GROCERIES SHOP');
    console.log('What would you like to buy?');
    console.log('Choose your favourite choice:');
    console.log('1.Fruits');
    console.log('2.Vegetables');
    console.log(answers);
    let fruits = ['\n 1.Orange \n 2.Apple \n 3.Banana \n 4.Pineapple'];
    let fruitprices = ['\n1.PKR50', '\n2.PKR60', '\n3.PKR70', '\n4.PKR80'];
    let vegetables = ['\n1.Cabbage', '\n2.Cauliflower', '\n3.Tomato'];
    let vegPrices = ['\n1.PKR50', '\n2.PKR60', '\n3.PKR70'];
    if (Number(answers.userChoice == 1)) {
        console.log(`These are the fruits available :\n  
        ${fruits} \n and their prices are : \n
         ${fruitprices}`);
    }}
    const answer1 = await inquirer.prompt([{
        type: 'input',
        name: 'userChoice1',
        message: 'Enter the fruit you want to buy and we will also display its price and your total bill  '
    }]);
    if (Number(answer1.userChoice1) == 1) {
        console.log(`${'fruits'[0]} is of price ${'fruitPrices'[0]} \n So your total bill is ${'fruitPrices'[0]} \n THANK YOU FOR SHOPPING!`);
    } else if (Number(answer1.userChoice1) == 2) {
        console.log(`${'fruits'[1]} is of price ${'fruitPrices'[1]} \n  So your total bill is ${'fruitPrices'[1]} \n THANK YOU FOR SHOPPING!`);
    } else if (Number(answer1.userChoice1) == 3) {
        console.log(`${'fruits'[2]} is of price ${'fruitPrices'[2]} \n  So your total bill is ${'fruitPrices'[2]} \n THANK YOU FOR SHOPPING!`);
    } else if (Number(answer1.userChoice1) == 4) {
        console.log(`${'fruits'[3]} is of price ${'fruitPrices'[3]} \n So your total bill is ${'fruitPrices'[3]} \n THANK YOU FOR SHOPPING!`);
    } else if (Number(answer1.userChoice1) == 2) {
        console.log(`These are the veggies available:\n ${'vegetables'} \n and these are their prices \n ${'vegPrices'}`);
    } else {
        console.log('INVALID! PLEASE SELECT SOMETHING');
    }
    const answer2 = await inquirer.prompt([{
        type: 'input',
        name: 'userChoice2',
        message: 'Enter your choice'
    }]);
    if (Number(answer2.userChoice2 == 1)) {
        console.log(`${'vegetables'[0]} is of price ${'vegPrices'[0]} \n So your total bill is ${'vegPrices'[0]} `);
    }
    else if (Number(answer2.userChoice2 == 2)) {
        console.log(`${'vegetables'[1]} is of price ${'vegPrices'[1]} \n  So your total bill is ${'vegPrices'[1]} `);
    }
    else if (Number(answer2.userChoice2 == 3)) {
        console.log(`${'vegetables'[2]} is of price ${'vegPrices'[2]} 
            \nSo your total bill is ${'vegPrices'[2]} `);
    }
    else{
        console.log('INVALID !,PLEASE SELECT SOMETHING');
    }
    //Total bill and discount 
async function bill() {
    let a = await inquirer.prompt([{
            type: 'input',
            name: 'totalbill',
            message: 'Enter your totalbill :'
        }]);
    if (Number(a.totalbill < 60)) {
        console.log(`This is your total bill ${a} and youve got no discount`);
    }
    else if (Number(a.totalbill > 60)) {
        a = 0.1 * a;
        console.log(`PKR ${a} is your total bill and you've got 10% discount `);
    }
    else
        console.log('INVALID!PLEASE SELECT SOMETHING');
}
 //Checkout Process
async function payment() {
    console.log('1.Credit Card');
    console.log('2.Cash Payment');
    console.log('3.Easypaisa Payment');
    const b = await inquirer.prompt([{
            type: 'input',
            name: 'paymentMeth',
            message: 'Enter your payment method'
        }]);
        if (Number(b.paymentMeth == 1)) {
            //Start processing the credit card method payment
            const d = await inquirer.prompt([{
                    type: 'input',
                    name: 'cardNum',
                    message: 'Enter your cardNum'
                }]);
            console.log(d);
            console.log('Your payment is done , THANKYOU FOR SHOPPING !');
        }
        else if (Number(b.paymentMeth == 2)) {
            //Start processing the Cash Payment procedure
            console.log('Your payment is done , THANKYOU FOR SHOPPING !');
        }
        else if (Number(b.paymentMeth == 3)) {
            //Start processing the Easypaisa payment
}
else{
    console.log('INVALID!PLEASE SELECT SOMETHING');
}

    let c = await inquirer.prompt([{
            type: 'input',
            name: 'phoneNum',
            message: 'Enter your Phone Number'
        }]);
    console.log(c.phoneNum);
    console.log('Your payment is done , THANKYOU FOR SHOPPING !');
}
async function main() {
    await shopping();
    await bill();
    await payment();
}
main();