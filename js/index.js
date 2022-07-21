// Iteration 1: Names and Input
let hacker1 = "mohamed";
console.log("The driver's name is", hacker1);
let hacker2 = "naruto";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length[i] > hacker2.length[i]) {
  console.log(`The driver has the longest name, it has ${i} character`);
} else if (hacker2.length[i] > hacker1.length[i]) {
  console.log(`The navigator has the longest name, it has ${i} character`);
} else if (hacker2.length[i] > hacker1.length[i]) {
  console.log(`Wow, you both have equally long names, ${i} characters!`);
}

// Iteration 3: Loops
let hacker1CapitalLetter = ''
for (let i = 0; i < hacker1.length; i++) {
    hacker1CapitalLetter += hacker1[i].toUpperCase() + " "
}
console.log(hacker1CapitalLetter)

let hacker2ReverseOrder = ''
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2ReverseOrder += hacker2[i]
}

console.log(hacker2ReverseOrder)
