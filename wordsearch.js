const wordSearch = (letters, word) => { 
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalJoin = letters.map(ls => ls.join(''))
    
    for (let line of horizontalJoin) {
        if (line.includes(word)) {
            return true;
        }
    }
    for (let line of verticalJoin) {
        if (line.includes(word)) {
            return true;
        }
    }
    return false;
}

const transpose = function(letters) {
    let result = [];
    for (let array of letters[0]) {
      result.push([]);
    }
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
        result[j].push(letters[i][j]);
      }
    
    }
    return result;
};


module.exports = wordSearch;