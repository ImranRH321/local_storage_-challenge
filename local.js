// localStorage public server !!

// challenge: 1;
localStorage.setItem("name", JSON.stringify("Shakib khan"));
// challenge: 2;
localStorage.setItem("age", JSON.stringify(40));
// challenge: 3;
const names = localStorage.getItem("name");
const ages = localStorage.getItem("age");

const name = JSON.parse(names);
const age = JSON.parse(ages);

// console.log(name);
// console.log(age);
// ----------
// challenge: 4 -item remove  key and value;
// localStorage.removeItem('name')
// localStorage.removeItem('age')
// -------------
// challenge: 5 set object -->
const person = { firstName: "Abraham", lastName: "linkon" };

// console.log(persons);
localStorage.setItem("person", JSON.stringify(person));
// done new lean first change //

// ======================
// level 2 challenge //

/* 
let count = localStorage.getItem("id");
if (count === null) {
  count = 0;
  localStorage.setItem("id", JSON.stringify(count));
}
const p = document.getElementById("fliedText");

const incrementValue = () => {
  count++;
  localStorage.setItem("id", JSON.stringify(count));
  p.innerText = parseInt(count);
};
const displayDataValueReload = () => {
  p.innerText = count;
};
displayDataValueReload();
 */

let getValue = localStorage.getItem("id");
if (getValue === null) {
  getValue = 0;
  localStorage.setItem("id", JSON.stringify(getValue));
}
const p = document.getElementById("fliedText");
const incrementValue = () => {
  const value = parseInt(p.innerText) + 1;
  p.innerText = value;
  localStorage.setItem("id", JSON.stringify(value));
};
const loadData = () => {
  const data = localStorage.getItem("id");
  p.innerText = getValue;
};
loadData();
// ***********************

// challenges 3 - Level 
// ==========================
// input value set localStorage key value pair
// problem 1
// **************************************** 

// name save //
document.getElementById("sendName_btn").addEventListener("click", () => {
  alert("btn click");
  const inpText = document.getElementById("name");
  const inputValue = inpText.value;
  localStorage.setItem("sName", JSON.stringify(inputValue));
  inpText.value = "";
});
// name Delete //
document.getElementById("deletedName_btn").addEventListener("click", () => {
  alert("Are you Sure Delete");
  localStorage.removeItem("sName");
});
