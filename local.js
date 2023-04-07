// localStorage public server !!

// challenge: 1;
localStorage.setItem("name", JSON.stringify("Shakib khan"));
// challenge: 2;
localStorage.setItem("age", JSON.stringify(40))
// challenge: 3;
const names = localStorage.getItem("name")
const ages = localStorage.getItem("age")

const name = JSON.parse(names)
const age = JSON.parse(ages)

// console.log(name);
// console.log(age);
// ----------
// challenge: 4 -item remove  key and value;
// localStorage.removeItem('name')
// localStorage.removeItem('age')
// ------------- 
// challenge: 5 set object --> 
const person = {firstName: "Abraham", lastName: "linkon"}

// console.log(persons); 
localStorage.setItem("person", JSON.stringify(person))
// done new lean first change //


