const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Welcome to Holberton School, what is your name?\n',
  (input) => {
    console.log(`Your name is: ${input}`);
    readline.close();
  });
