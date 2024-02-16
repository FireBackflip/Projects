const prompt = require('prompt-sync')();

console.log('Pick a number between 1 and 10');
if (prompt() == 9) {
    console.log('haha loser you  got it wrong');
} else {
    console.log('haha loser you got in wrong');
}

function test() {
    console.log("test failed");
}

test();