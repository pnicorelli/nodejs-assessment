const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const cypher = require('../index');


describe('Vigenere encryption:', ()=>{

  it('should have encrypt a text using Caesar Algorithm', function(){
    let enc = typeof cypher.vigenere.encrypt;
    let dec = typeof cypher.vigenere.decrypt;
    enc.should.equal('function')
    dec.should.equal('function')
  });

  it('should encrypt a text using Vigenere Algorithm', function(){
    let result = cypher.vigenere.encrypt('this is a simple message', 'secret key');
    result.should.equal('llkj ml k wgetnv qxcwyyi');
  });

  it('should decrypt a text with Vigenere Algorithm', function(){
    let result = cypher.vigenere.decrypt('llkj ml k wgetnv qxcwyyi', 'secret key');
    result.should.equal('this is a simple message');
  });
});
