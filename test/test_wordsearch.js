const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });


  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'P'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'E'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'P'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'P'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'E'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'R'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PEPPER')

    assert.isTrue(result);
  });
  
  it("should return false if the word is not present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'P'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'E'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'W'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'P'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'E'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'R'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'PEPPER')

    assert.isFalse(result);
  });
  it("should return undefined if the gameboard matrix is empty", function() {
    const result = wordSearch([], 'PEPPER')
    assert.equal(result, undefined);
  });
  it("should return undefined if the word is not provided", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'P'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'E'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'W'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'P'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'E'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'R'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '')

    assert.equal(result, undefined);
  });
  it("should return undefined if the word is not a string", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'P'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'E'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'W'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'P'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'E'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'R'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 10)

    assert.equal(result, undefined);
  });
});