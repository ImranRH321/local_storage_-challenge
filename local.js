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

// common set value
function commonSet(tag, key) {
  const nameFlied = document.getElementById(tag);
  const nameFliedValue = nameFlied.value;
  console.log("key", key);
  localStorage.setItem(key, JSON.stringify(nameFliedValue));
  nameFlied.value = "";
}

// delted button localStorage
function deletedLocalStoreData(key) {
  console.log("key", key);
  localStorage.removeItem(key);
}

// ******* problem 1 **********
// name save //
document.getElementById("sendName_btn").addEventListener("click", () => {
  commonSet("name", "userName");
});
// name Delete //
document.getElementById("deletedName_btn").addEventListener("click", () => {
  deletedLocalStoreData("userName");
});
// ******* problem 2 **********
// email save //
document.getElementById("sendEmail_btn").addEventListener("click", () => {
  commonSet("email", "email");
});
// Email Delete //
document.getElementById("deletedEmail_btn").addEventListener("click", () => {
  deletedLocalStoreData("email");
});

// problem 3 Message
// ****************************************
// email save //
document.getElementById("sendMessages_btn").addEventListener("click", () => {
  commonSet("textFlied", "messages");
});
// Email Delete //
document.getElementById("deleteMessage_btn").addEventListener("click", () => {
  deletedLocalStoreData("messages");
});
// ***********************

// problem 4 /*************** */
// reset_btn
document.getElementById("reset_btn").addEventListener("click", function () {
  const trues = confirm("Are you sure deleted ?");
  if (trues) {
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("messages");
  } else {
    alert("oke no deleted");
  }
});
// challenge Level 4  // ***************;
// Common Code // *

document.getElementById("sendButton").addEventListener("click", () => {
  // debugger;
  const nameFlied = document.getElementById("nameFlied");
  const emailFlied = document.getElementById("emailFlied");
  const messageFlied = document.getElementById("messageFlied");
  if (!nameFlied.value) {
    alert("name is must");
    return;
  }
  if (!emailFlied.value) {
    alert("email is must");
    return;
  }
  if (!messageFlied.value) {
    alert("message is must");
    return;
  }
  const object = {
    name: nameFlied.value,
    email: emailFlied.value,
    message: messageFlied.value,
  };
  console.log(object);
  localStorage.setItem("user", JSON.stringify(object));
  nameFlied.value = "";
  emailFlied.value = "";
  messageFlied.value = "";
});

const getData = () => {
  const stored = localStorage.getItem("user");
  const data = JSON.parse(stored);
  // console.log(data); 
  const nameFlied = document.getElementById("nameFlied");
  const emailFlied = document.getElementById("emailFlied");
  const messageFlied = document.getElementById("messageFlied");
  nameFlied.value = data.name;
  emailFlied.value = data.email;
  messageFlied.value = data.message;
};
getData();
