const minNum = document.getElementById("minRange");
const maxNum = document.getElementById("maxRange");
const submitBtn = document.getElementById("mySubmit");
let random;
submitBtn.onclick = function(){
  random = Math.floor(Math.random() * ((Number(maxNum.value)) - (Number(minNum.value) - 1))) + Number(minNum.value);
   document.getElementById("randNum").textContent = random;
}

