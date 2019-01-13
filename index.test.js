log  = console.log
expect  = require('chai').expect 
should = require('chai').should();
const  {
    alwaysTrue,
    ligitString
}=require('./index');

//const alwaysTrue = require('./index');
_=require('lodash');

log('testing');

describe ('#mocha basics',()=>
{
    // unit tests

    it('true should be true',()=>
    {
        true.should.be.true;
    });
    it('I expect true to be true',()=>
    {
        expect(true).to.be.true;
    });


});

describe ('#alwaysTrue',()=>
{
    it('should always return true',()=>{
        alwaysTrue().should.be.true;
    });
    it('expect to be true',()=>
    {
        expect(alwaysTrue()).to.be.true;
    });

    
});
describe('#legitstring',()=>{
    it('detect cow as string',()=>{
        ligitString('cow').should.be.true;
    });
    it('undefined should not be true',()=>
    {
        ligitString(undefined).should.be.false;
    });
    it ('it should be string',()=>
    {
        ligitString(333).should.be.false;
    } );
});