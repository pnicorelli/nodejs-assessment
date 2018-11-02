let caesar = require('./src/caesar');
let vigenere = require('./src/vigenere');

const cypher = {
  caesar: caesar,
  vigenere: vigenere,
};

module.exports = cypher;
