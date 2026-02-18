let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Task 1 and 2
console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);

//Task 3
secretMessage.push('to', 'Program');
console.log(secretMessage.length);

//Task 4
const easily_index = secretMessage.indexOf('easily');
secretMessage[easily_index] = 'right';
console.log(secretMessage[easily_index]);

//Task 5
secretMessage.shift();
console.log(secretMessage.length);
