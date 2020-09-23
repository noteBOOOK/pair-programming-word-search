const transpose = function(letters) {
  let result = [];
  for (const line of letters[0]) {
    result.push([]);
  }
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      result[j].push(letters[i][j]);
    }
  
  }
  return result;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0 || typeof word !== "string" || word.length === 0) {
      return undefined;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (const line of horizontalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  for (const line of verticalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;