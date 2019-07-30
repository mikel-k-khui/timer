// Reference: Working typewriter function. Pairing with @
// // Edge cases:
// press b --> beep right away
// press 1 to 9 --> output "setting timer for x seconds..." and beep after that number of seconds has passed
// press ctrl + c to exit the program and display "Thanks for using me, ciao!" before terminating
//

// set up for stdin and protocol
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // output the unicode value of the key pressed for debugging
  //process.stdout.write(`you pressed ${key} button\n`);

  if (key === '\u0042' || key === '\u0062') {
    // Create the feature for when either upper- or lower-case b is pressed
    setTimeout(() => process.stdout.write('\x07'), 0);
  } else if (key === '\u0003') {
    // Create the feature for outputing a message when end of text is pressed
    // \u0003 maps to ctrl+c input
    // add feature upon termination of the stdin
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key > 0 && key < 10) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => process.stdout.write('\x07'), key * 1000);
  }
});