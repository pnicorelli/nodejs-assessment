const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const cypher = require('../index');


describe('Vigenere encryption:', ()=>{

  it('should have encrypt a text using Caesar Algorithm', function(){
    expect( typeof cypher.vigenere.encrypt, 'function' );
    expect( typeof cypher.vigenere.decrypt, 'function' );
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
