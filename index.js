 _=require('lodash');
 alwaysTrue =()=>true;
ligitString  = (o)=>_.isString(o) && o.length > 0;
function Abtest (par)
{
    if (_.isString(par))
    {
        return true;
    }
    else
    
    return false;
}
function compare(parValue)
{
    if (parValue >5 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function valueAdd (parm1,parm2)
{
    return parm1+parm2;
}
function ValueCampare (parm1,parm2)
{
    if (_.isString(parm1 || parm2))
    {
        return false;
    }    
        
    return parm1>parm2;
}
module.exports = {
    alwaysTrue,
    ligitString,
    Abtest,
    compare,
    valueAdd,
    ValueCampare
}

