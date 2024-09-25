// LOOPS for, while, do-while
//FOR LOOP

// for (initializer; condition; increment)(line of code)
//infiniteloop

for (let i = 0; i < 10; i++){
    console.log("loop");   
}


//while
//initializer
//while (condition){
//increment
//}

let y = 0
while (y <= 5) {
//perform action
console.log("in the loop");

y++
}

let num = 1;
while (num <= 10) {

console.log("current value of num" + num);



    num++
}


//do-while loop
//perform the action at least once whether condition is true or false 

let x = 5; 
do {
    console.log ("i am in the loop")
    x++;
} while (x <= 6);