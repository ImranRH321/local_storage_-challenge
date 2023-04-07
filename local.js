// localStorage public server !!

// challenge: 1;
localStorage.setItem("name", JSON.stringify("Shakib khan"));
// challenge: 2;
localStorage.setItem("age", JSON.stringify(40))
// challenge: 3;
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
console.log(name);
console.log(age);