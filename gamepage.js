// random value generated
function submit(){
var y = Math.floor(Math.random()* 10 +1);
  
// counting the number of guesses
// made for correct Guess
var_x=document.getElementById("guessField").value;
  
// function for number guessed by user     
if (x==y){
    alert("Congratulations!!!"+user_name+"YOU GUESSED CORRECTLY IN"+guess+"GUESS");
    guess=1;
}
else if(x > y){
guess++;
alert("OOPS!! TRY A SMALLER NUMBER");
}
else{
guess++
alert("OOPS!! TRY A BIGGER NUMBER");
}}
function tryAgain(){
y =Math.floor(Math.random()*10 +1);
}