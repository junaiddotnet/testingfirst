log  = console.log
expect  = require('chai').expect 
should = require('chai').should();
assert  = require('assert'); // we can use assert library
const  {
    alwaysTrue,
    ligitString,
    Abtest,
    compare,
    valueAdd,
    ValueCampare,
    arrayValues
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

describe('#ccompare testing',()=>{
    it('compare 2 to be false',()=>{
        compare(2).should.be.false;
    });
    it ('compare 10 to be true',()=>{
        compare(12).should.be.true;
    });
});

describe('#Addation testing',()=>{
    it ('add values to ..',()=>{
        expect(valueAdd(12,12)).to.equal(24);
    });
    it('add value not equall',()=>{
        expect(valueAdd(10,10)).to.not.equal(120);
    } );
});

describe('#Number Value comparision',()=>{
    it('to be true parm1 > parm2',()=>{
        expect(ValueCampare(10,9)).to.be.true;
    });
    it('if passed string',()=>{
        expect(ValueCampare("10",9)).to.be.false;
    });

    it('parm2>parm1 to be false',()=>{
        ValueCampare(10,20).should.be.false;
    });

    it('expect  to be false',()=>{
        var result = ValueCampare(10,20);
        result.should.be.false;
    });

    it('assert to be true',()=>{
        var result = ValueCampare(20,10);
        
        assert.equal(result,true);
    });
    
} );

describe('#Asser Add Value',()=>{
    it('add value to get result to be true',()=>{
        var result  = valueAdd(20,10);
        assert.equal(result,30);
    });

} );

describe ('#Check Array',()=>{
    it('array value return expect',()=>{
        var expected  =  [1,2,3,4,5,6];
        assert.deepEqual(arrayValues(),expected);
    });
    it('array should contain value 3',()=>{
        arrayValues().should.include(3);
    } );
    it('array should not contain value 3',()=>{
        arrayValues().should.include(3);
    } );

    
} );

describe ('#add value unit test',()=>{
    context('with low values',()=>{
        it('add parm1 and parm2 value should',()=>{
            valueAdd(10,10).should.be.equal(20);
        } );

        it('add parm1 and parm2 value expect',()=>{
            expect(valueAdd(10,10)).to.equal(20);
        } );
    });
    context('with Hight values',()=>{
        it('add parm1 and parm2 value should',()=>{
            valueAdd(100,100).should.be.equal(200);
        } );

        it('add parm1 and parm2 value expect',()=>{
            expect(valueAdd(100,100)).to.equal(200);
        } );
    });

});
