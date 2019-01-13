log  = console.log
expect  = require('chai').expect 
should = require('chai').should();
const  {
    alwaysTrue
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