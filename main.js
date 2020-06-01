// Kata 01
function add (x, y) {

    return x + y;
}
console.log('Kata 01:', add (2, 4));


// Kata 02
function multiply (x, y) {

    let Total = 0;

    let multiplyArray = [];    
    
    for (let position = 1; position <= Number(y); position += 1) {

        let newTotal = add (Number(x), Number(Total));

        Total = newTotal;

        multiplyArray.push(newTotal);
    } 

    return Total;
}
console.log ('Kata 02:', multiply (6, 4));


// Kata 03
function power (x, y) {

    let Total = x;

    let multiplyArray = [];    
    
    for (let position = 1; position <= Number(y) - 1; position += 1) {

        let newTotal = multiply (Number(x), Number(Total));

        Total = newTotal;

        multiplyArray.push(newTotal);
    }

    return Total;
}
console.log ('Kata 03:', power (2, 8));


// Kata 04
function factorial (x) {

    let Total = 1;   
    
    for (let position = 2; position <= Number(x); position += 1) {

        let newTotal = multiply (Number(Total), Number(position));

        Total = newTotal;
    }

    return Total;
}
console.log ('Kata 04:', factorial (4));



// Bonus: Fibonacci
function fibonacci (x) { 

    let fiboArray = [0, 1];

    for (let position = fiboArray.length; position < Number(x); position += 1) {

    fiboArray[position] = add (fiboArray[position-2], fiboArray[position-1]);
    // console.log(fiboArray);
    }
    return fiboArray
}
console.log ('Fibonacci Kata:', fibonacci (8));
