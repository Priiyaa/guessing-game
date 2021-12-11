   // random value generated
   var y = Math.floor((Math.random()*100 )+1);      
   // counting the number of guesses
   // made for correct Guess
 
   var guess = 1;
     
   document.getElementById("guessSubmit").onclick = function(){
     
  // number guessed by user     
  var x = document.getElementById("guessField").value;
 
  if(x == y)
  {    
      alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
              + guess + " GUESS ");
  }
 
  else if(x==y-5){
      guess++;
      alert("You are CLOSE! try a GREATER number");
     
  }
  else if(x==y-4){
    guess++;
    alert("You are CLOSE! try a GREATER number");
   
}
else if(x==y-3){
    guess++;
    alert("You are CLOSE! try a GREATER number");
   
}
else if(x==y-2){
    guess++;
    alert("You are CLOSE! try a GREATER number");
   
}
else if(x==y-1){
    guess++;
    alert("You are CLOSE! try a GREATER number");
   
}

else if(x==y+1){
    guess++;
    alert("You are CLOSE! try a SMALLER number");
   
}
else if(x==y+2){
    guess++;
    alert("You are CLOSE! try a SMALLER number");
   
}
else if(x==y+3){
    guess++;
    alert("You are CLOSE! try a SMALLER number");
   
}
else if(x==y+4){
    guess++;
    alert("You are CLOSE! try a SMALLER number");
   
}
else if(x==y+5){
    guess++;
    alert("You are CLOSE! try a SMALLER number");
   
}
else if(x==y+6){
    guess++;
    alert("You are CLOSE! try a SMALLER number");
   
}

else if(x > y) /* if guessed number is greater
than actual number*/ 
{    
guess++;
alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
  
  else
  {
      guess++;
      alert("OOPS SORRY!! TRY A GREATER NUMBER")
  }
  document.getElementById("history").innerHTML="<br>NUMBER GUESSED "+x;


 

   }