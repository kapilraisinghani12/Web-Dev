const checkSub = document.getElementById("checkSub");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const PaytmBtn = document.getElementById("PaytmBtn");
const mySubmit = document.getElementById("mySubmit");
const mySub = document.getElementById("mySub");
const myCard = document.getElementById("myCard");
const packCost = document.getElementById("packCost");
const packDiscountCap = document.getElementById("packDiscountCap");
const myCost = document.getElementById("myCost");


let price = 302;
let discountCap = 115;
packCost.textContent += ` $${price}`;
packDiscountCap.textContent += `$${discountCap}`;
mySubmit.onclick = function() {
    if(checkSub.checked){
        mySub.textContent = `You are SUBSCRIBED`;
    }
    else{
        mySub.textContent = `You are NOT SUBSCRIBED`;
    }

    if (checkSub.checked && visaBtn.checked) {
        myCard.textContent = `You have decided to pay using VISA`;
        price >= discountCap ? myCost.textContent =`Cost after discount = $${price - (12/100)*price}`:myCost.textContent =`Discount Not Valid`;
        
    }
    else if (checkSub.checked && masterCardBtn.checked) {
        myCard.textContent = `You have decided to pay using MASTERCARD`;
        price >= discountCap ? myCost.textContent =`Cost after discount = $${price - (16/100)*price}`:myCost.textContent =`Discount Not Valid`;
    }
    else if (checkSub.checked && PaytmBtn.checked) {
        myCard.textContent = `You have decided to pay using PayTM`;
        price >= discountCap ? myCost.textContent =`Cost after discount = $${price - (50/100)*price}`:myCost.textContent =`Discount Not Valid`;
    }
    else{
        myCard.textContent = `You have NOT choosen a way to PAY, Pls choose`;
    }

}