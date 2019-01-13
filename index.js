 _=require('lodash');
 alwaysTrue =()=>true;
ligitString  = (o)=>_.isString(o) && o.length > 0;

module.exports = {
    alwaysTrue,
    ligitString
}