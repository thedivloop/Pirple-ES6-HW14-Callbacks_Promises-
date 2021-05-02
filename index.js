// ================= USING CALLBACKS ==============

function squarePrimedCallback(num) {
    var timerOn = new Date();
    var result = num * num;
    console.log(`the square of ${num} is ${result}`);
    const data = [num,timerOn];
    setTimeout(() => {
        squareRoot(num,timerOn);
    }, num);
}

function squareRoot(num,timerOn) {
    console.log(`the square root of ${num} is ${Math.sqrt(num)}`);
    console.log(`The closest prime number to ${num} is ${primed(num)}`);
    const timerOff = new Date();
    const elapsedTime = timerOff.getTime()-timerOn.getTime();
    console.log(`Total duration: ${elapsedTime} ms`);
}

squarePrimedCallback(1000);


// ================= USING PROMISES ==============

function squarePrimed(num) {
    var timerOn = new Date();
    return new Promise ((resolve,reject) => {
        var result = num * num;
        console.log(`the square of ${num} is ${result}`);
        const data = [num,timerOn];
        setTimeout(() => {
            resolve(data);
        }, num);
    });
}

function prime(num) {
    var output = true;
    if (num == 1) {
            return false;
    }
    for (x = 2; x<Math.floor(num/2)+1; x++) {
            if ((num%x) == 0) {
                output = false;
            }
    }
    return output;
}

function primed(number) {
    for (i=number-1; i>0; i--) {
        if (prime(i)) {
            return i;
        }
    }
    return 0;
}

squarePrimed(555)
    .then((data) => {
        console.log(`The square root of ${data[0]} is ${Math.sqrt(data[0])}`);
        return data;
    })
    .then((data) => {
        console.log(`The closest prime number to ${data[0]} is ${primed(data[0])}`);
        return data[1];
    })
    .then((timerOn) => {
        const timerOff = new Date();
        const elapsedTime = timerOff.getTime()-timerOn.getTime();
        console.log(`Total duration: ${elapsedTime} ms`);
    });