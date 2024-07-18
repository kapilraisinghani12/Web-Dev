

let username;
let age;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myUser").value;
    age = document.getElementById("myAge").value;



    
    if(Boolean(username) && Boolean(age)){
            document.getElementById("head").textContent = `Hello ${username}`;

            age = Number(age);
            if (age>=18) {
                document.getElementById("isEligible").textContent = `You are ${age}, Hence You ARE ELIGIBLE to VOTE!!`
        
            }
            else{
                document.getElementById("isEligible").textContent = `You are not 18 Hence You are NOT ELIGIBLE to VOTE!!`
            }
        }
} 


