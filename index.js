var msg1=document.querySelector("#msg1");
var msg2=document.querySelector("#msg2");
var msg3=document.querySelector("#msg3");
var number_of_guess=0;
var guessed_number=[];

var result=Math.floor(Math.random()*10);
console.log(result);

function play()
{
    var user_guess=document.getElementById("guess").value;

    if(user_guess < 1 ||  user_guess >10)
    {
        alert("Please enter the number 1 to 10");
    }
    else
    {
        guessed_number.push(user_guess);
        number_of_guess=number_of_guess+1;

        if(user_guess > result)
        {
        
            msg1.textContent="your guess is low";
            msg2.textContent="Number of guesses:"
            + number_of_guess;
            msg3.textContent="Previous guessed Number"
            +guessed_number;
        }
        else if(user_guess < result)
        {
            msg1.textContent="your guess is near to secret number";
            msg2.textContent="Number of guesses:"
            + number_of_guess;
            msg3.textContent="Previous guessed Number"
            +guessed_number;
        }
        else if(user_guess == result)
        {
            msg1.textContent="your are the winner :";
            msg2.textContent="The lucky number is:" + result;
            msg3.textContent="No of guess:"+number_of_guess;
        }
    }
}