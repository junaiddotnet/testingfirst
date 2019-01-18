log  = console.log
expect  = require('chai').expect 
should = require('chai').should();
const  {
    alwaysTrue,
    ligitString,
    Abtest
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
    it ('abTest function should be false',()=>
    {
        Abtest(10).should.be.false;
    });
    it ('AbTest should be true',()=> {
        Abtest("junaid").should.be.true;
    });
    it ('AbExpect to to true',()=>
     {
        expect(Abtest("junaid")).to.be.true;
     });

});