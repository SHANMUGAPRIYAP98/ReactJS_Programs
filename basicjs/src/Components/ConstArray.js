const val=10
console.log(val)
//val=20
//console.log(val) TypeError: Assignment to constant variable.
const subjects=["Artificial Intelligence","Machine Learning","Data Science"]
subjects[1]="Cloud Computing"
subjects.push("Block Chain")
subjects.push("Cloud Computing")
subjects.pop()
subjects.push("Cyber Security")
console.log(subjects)
console.log(typeof(subjects))