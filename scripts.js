function playRound(playerSelection, computerSelection) {
    // your code here!
    /* rock beats scissor
       rock loses paper

       scissor beats paper
       scissor loses rock

       paper beats rock
       paper loses scissor
    */

    //Player chose rock
    if(playerSelection == "rock"){
        if(computerSelection == "scissor"){
            console.log("rock beats scissor, you win")
        }else if(computerSelection == "paper"){
            console.log("rock loses to paper, you lose")
        }else{
            console.log("You both picked rock, draw")
        }
    } else if(playerSelection == "scissor"){
        if(computerSelection == "paper"){
            console.log("scissor beats paper, you win")
        }else if(computerSelection == "rock"){
            console.log("scissor loses to rock, you lose")
        }else{
            console.log("You both picked scissor, draw")
        }
    } else if(playerSelection == "paper"){
       if(computerSelection == "rock"){
           console.log("paper beats rock, you win")
       }else if(computerSelection == "scissor"){
           console.log("paper loses to scissor, you lose")
       }else{
           console.log("You both picked paper, draw")
       }
   }


   

    
    //computer selection randomly choses an element from a array 


  }
   

function getComputerSelection(){
    const choice = ["rock", "paper", "scissor"]
    
    return choice[Math.floor(Math.random() * 2)]
    
}

  const playerSelection = "paper";
  const computerSelection = getComputerSelection();
  
  

 for (i = 0; i <= 4 ; i++){
   playRound(prompt("Please choose rock, paper, or scissor"), computerSelection)
 }