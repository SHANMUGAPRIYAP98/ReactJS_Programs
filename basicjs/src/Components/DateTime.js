const todayDate=new Date()
let mon=todayDate.getMonth()+1
let year=todayDate.getFullYear()
let date=todayDate.getDate()
let hour=todayDate.getHours()
let min=todayDate.getMinutes()
let sec=todayDate.getSeconds()
console.log(year+"-"+mon+"-"+date+" "+hour+":"+min+":"+sec)
const yesterday=new Date(todayDate)
yesterday.setDate(yesterday.getDate() - 1)
console.log("Yesterday's Date : "+yesterday.toDateString())