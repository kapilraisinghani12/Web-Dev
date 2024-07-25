let minNum = 1;
let maxNum = 100;

let answer = Math.floor(Math.random()* (maxNum-minNum+1)) + minNum;

let guess;45
let game = true;
let attepts = 0;
while(game){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);

    if(isNaN(guess) || guess>maxNum || guess<minNum){
        window.alert("Invalid Response! Please Try Again!");
    }
    else{
        attepts++;
        if(guess<answer){
            window.alert("Go Higher!!");
        }
        else if(guess>answer){
            window.alert("Go Lower!!");
        }
        else{
            window.alert(`You are correct!! The Number is ${answer}. It took ${attepts} attempts for you to get the answer.`);
            game = false;
        }
    }

}
