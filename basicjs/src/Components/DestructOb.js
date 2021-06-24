let cust=[{cid:101,custName:'diya',emailId:'diya@gmail.com',mobile:9840425389},
{cid:102,custName:'priya',emailId:'priya@gmail.com',mobile:9840538942},
{cid:103,custName:'riya',emailId:'riya@gmail.com',mobile:9841215309},
{cid:104,custName:'ziya',emailId:'ziya@gmail.com',mobile:9840515309},
{cid:105,custName:'divya',emailId:'divya@gmail.com',mobile:9841215390},]

let [c1,c2]=cust
console.log(c1)
console.log(c2)

let [cust1,,...cust2]=cust
console.log(cust1)
console.log(cust2)