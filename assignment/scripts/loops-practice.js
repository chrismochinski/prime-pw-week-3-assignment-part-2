console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++){
  console.log(i); //change to i<6 so the loop stops before it hits 6
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for (let i=3; i<6; i++){ //change i to 3 so it starts at 3
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// i starts at 2, must be less than 11, add (+=) 2 per loop
for (let i=2; i<11; i+=2){
  console.log(i);
}

//or this, via my wacky Google research...

// for (let i=2; i<11; i++){
//   if(i % 2 === 0){
//     console.log(i);
//   }
// }

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i>=0; i--){
  console.log(i);
}


// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for (list of stars){
  console.log(list);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

//explanations are for my reference
let zero = 0 // zero is 0 ...yep
while (zero < stars.length){ //as long as the number 0 is less than the number of stars
  console.log(stars[zero]); //log out a star
  zero++; // add 1 to the whatever zero is, head back up to the top of the loop
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let number = 0 // the number is 0
while (number < 6){ //while it's less than 6, which it is for now...
  console.log(number) //...log it
  number++; //...and then add one and start over!
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
