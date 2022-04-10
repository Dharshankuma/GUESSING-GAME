var y = Math.floor(Math.random() * 11)

var guess = 1;
 
document.getElementById("sumbit").onclick = function(){

    var x  = document.getElementById("guess").value;
    if(x == y)
    {    
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS ");
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
}