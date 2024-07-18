const decreaseBtn = document.getElementById("decreaseCount");
const resetBtn = document.getElementById("resetCount");
const increaseBtn = document.getElementById("increaseCount");
const counter = document.getElementById("count");
let count = 0;
// counter.textContent = count;
increaseBtn.onclick = function(){
    count++;
    counter.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    counter.textContent = count;
}
resetBtn.onclick=function(){
    count = 0;
    counter.textContent = count;

}