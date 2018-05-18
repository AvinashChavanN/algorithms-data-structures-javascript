// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let characters = {};
  let max = 0;
  let maxChar = '';
  for(let char of str){
    characters[char] = characters[char]+1||1;
  }

  for(let character in characters){
    if(characters[character]>max){
      max = characters[character];
      maxChar = character;
    }
  }

  return maxChar;
}

module.exports = maxChar;
