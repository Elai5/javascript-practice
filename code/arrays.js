let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.pop());
//removing the last element and cheking length
console.log(secretMessage.length);
//adding new elements
secretMessage.push('to', 'program');
// console.log(secretMessage);
//changing an elemetn name to a diffrent 
secretMessage[7] = 'right';
// console.log(secretMessage);
//remove first string
console.log(secretMessage.shift())
// console.log(secretMessage)
secretMessage.unshift('Programming');
// console.log(secretMessage)
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));
