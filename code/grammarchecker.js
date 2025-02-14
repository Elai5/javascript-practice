let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
let longWord = "breathtaking";
// console.log(storyWords);
let count = 0;
storyWords.forEach((word) => {
  count++;
});

storyWords = storyWords.filter((word) => word !== unnecessaryWord);
storyWords = storyWords.map((word) =>
  word === misspelledWord ? "beautiful" : word
);

let badWordIndex = storyWords.findIndex((word) =>
  word === badWord ? true : false
);
let longWordIndex = storyWords.findIndex((word) =>
  word === longWord ? true : false
);
console.log(badWordIndex);
console.log(longWordIndex);

longWord = "glorious";
storyWords[78] = "really";
console.log(storyWords[78]);

let lengthCheck = storyWords.every((word) =>
  word.length <= 10 ? true : false
);
// storyWords = storyWords.find((word) => word.length > 10);
console.log(lengthCheck);
console.log(count);
console.log(storyWords.join());

if (badWordIndex !== -1) {
  storyWords[badWordIndex] = "really";
}


// This code snippet is used to replace a specific word in the `storyWords` array with the word "really". Here's how it works:

// 1. **Check the Index**: The condition `if (badWordIndex !== -1)` checks whether the `badWordIndex` variable holds a valid index. The `.findIndex()` method returns `-1` if the word is not found in the array. So, this condition ensures that the word was found.

// 2. **Replace the Word**: If the condition is true (meaning the word was found), the code `storyWords[badWordIndex] = "really";` accesses the element at the `badWordIndex` position in the `storyWords` array and replaces it with the string "really".

// This ensures that the "bad" word is replaced only if it exists in the array.

// Task 11: Find and replace the long word.

// let longWordIndex = storyWords.findIndex(word => word.length > 10);
// if (longWordIndex !== -1) {
//   storyWords[longWordIndex] = "glorious"; // or another shorter word
// }
