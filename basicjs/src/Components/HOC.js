const add=(a,b,c)=>
{
    return a+b+c;
}
const hof=(data,fn)=>
{
    let val=Math.pow(data,2);
    return fn(val,val,val)
}
let res=hof(2,add)
console.log("Result : "+res)