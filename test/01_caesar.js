const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const cypher = require('../index');

describe('Caesar encryption:', ()=>{

  it('should have encrypt a text using Caesar Algorithm', function(){
    let enc = typeof cypher.caesar.encrypt;
    let dec = typeof cypher.caesar.decrypt;
    enc.should.equal('function')
    dec.should.equal('function')
  });

  it('should encrypt a text using Caesar Algorithm', function(){
    let result = cypher.caesar.encrypt('this is a simple message', 12);
    result.should.equal('ftue ue m euybxq yqeemsq');
  });

  it('should decrypt a text with Caesar Algorithm', function(){
    let result = cypher.caesar.decrypt('ftue ue m euybxq yqeemsq', 12);
    result.should.equal('this is a simple message');
  });
});
