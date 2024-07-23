let username = "KapilRaisinghani";

console.log(username.charAt(9));
console.log(username.indexOf("a"));
console.log(username.lastIndexOf("a"));
console.log(username.length);

username = "    Kapil Raisinghani  ";
username = username.trim();

console.log(username);
console.log(username.toUpperCase());
console.log(username.repeat(3));
console.log(username.startsWith("s"));
console.log(username.endsWith("i"));
console.log(username.includes("s"));

let p = "123-243-6545";

console.log(p.replaceAll("-", ""));
console.log(p.padStart(29, "0"));
console.log(p.padEnd(29, "0"));
//splitting
const sentence =
  "Kapil is a guy with the most amount of money in the house of Raisinghani's";
console.log(sentence.split(" "));
//slicing

const myName = document.getElementById("myName");
const myEmail = document.getElementById("myEmail");
const mySubmit = document.getElementById("mySubmit");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const uName = document.getElementById("uName");




mySubmit.onclick = function () {
  let fullName = myName.value;
  let mailName = myEmail.value;

  let i;
  i = fullName.indexOf(" ");
  let firstName = fullName.slice(0, i);
  let lastName = fullName.slice(i + 1);
  let userName = mailName.trim().slice(0, mailName.indexOf("@")).charAt(0).toUpperCase() + mailName.trim().slice(1, mailName.indexOf("@")).toLowerCase();
  fName.textContent = `First Name - ${firstName}`;
  lName.textContent = `Last Name - ${lastName}`;
  uName.textContent = `User Name - ${userName}`;
};
