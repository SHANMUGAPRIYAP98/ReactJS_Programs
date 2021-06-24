let val1={bankid:1,bankname:"ICICI",ifsc:"ICIC3210"};
let val2={bankid:2,bankname:"SBI",ifsc:"SBI1210"};
let val3={bankid:3,bankname:"IOB",ifsc:"IOB2210"};
let val4={bankid:4,bankname:"BOI",ifsc:"BOI1110"};
var weakMap=new WeakMap();
let key1={id:1}
let key2={id:2}
let key3={id:3}
let key4={id:4}
weakMap.set(key1,val1)
weakMap.set(key2,val2)
weakMap.set(key3,val3)
weakMap.set(key4,val4)
console.log(weakMap.get(key2))