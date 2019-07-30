// Reference: Working typewriter function. Pairing with @
// // Edge cases:
// No numbers: end immediately with no beeps scheduled.
// negative number: Ignore/skip any numbers that are negative.
// not a number: Ignore/skip these as well.
// Example:
// node timer1.js 10 3 5 15 9 

//take argument subset of CLI
let input = process.argv.slice(2); //[0] - node [1] - program [2+] arugments

// filter through the array for only positive numbers
let filteredInput = input.filter((value) => value > 0);

// loop through the checked array and translate seconds into milli-seconds
for (const time of filteredInput) setTimeout(() => process.stdout.write('\x07'), time * 1000);