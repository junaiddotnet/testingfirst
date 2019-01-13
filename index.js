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
module.exports = {
    alwaysTrue,
    ligitString,
    Abtest
}