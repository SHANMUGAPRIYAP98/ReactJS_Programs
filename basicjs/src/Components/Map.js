let courses = [
    { courseId: 101, courseName: "Block Chain", startDate: "12-07-2021", endDate: "12-09-2021" },
    { courseId: 102, courseName: "Artificial Intelligence", startDate: "24-07-2021", endDate: "30-09-2021" },
    { courseId: 103, courseName: "Machine Learning", startDate: "12-09-2021", endDate: "12-12-2021" },
    { courseId: 104, courseName: "Ethical Hacking", startDate: "01-01-2022", endDate: "05-03-2022" },
]
let map=new Map()
var keys=[];
var val=[]
for(let i=0;i<courses.length;i++)
{
   keys[i]=courses[i].courseId;
   val[i]=courses[i];
   map.set(keys[i],val[i])
}
console.log(keys)
console.log(val)
console.log(map)
console.log(keys[0],val[0])
console.log(map.get(103))
map.forEach((keys,val)=>
{
    console.log(keys+"  "+val)
})