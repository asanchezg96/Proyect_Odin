
 //Funcion playComputer, escoge un valor aleatorio entre piedra, papel o tijera.
 const scorePlayer= document.querySelector('.scorep');
 const scoreCPU = document.querySelector('.scorec');
 const playRoundChoose= document.querySelector('.playRoundChoose');
 let playerSelectiong;
 let scoreplayer =0;
 let scorecpu =0;
 let msg;

// Funcion para el cpu
 function computerPlay (){
 const namesOptions = ['rock', 'paper', 'scissor'];
 let indiceRandom = Math.floor(Math.random()*namesOptions.length);
 let chooseNamesOptions = namesOptions[indiceRandom];
 return chooseNamesOptions;
 }

//Funcion para jugar una sola ronda
 function playRound(playerSelection, computerSelection){
        if(checkWinnerRound(playerSelection, computerSelection)){
            scoreplayer=scoreplayer+1;
            scorePlayer.innerHTML=scoreplayer;
            return console.log(winner='You winner this round!'+ 'Score: '+ scoreplayer);
        }else {
            scorecpu = scorecpu+1;
            scoreCPU.innerHTML=scorecpu;
            return console.log(winner='You lose this round! Winner CPU!'+ 'Score: '+ scorecpu);
            
        }
 }

 //Funcion para verificar el ganador de una ronda
 function checkWinnerRound(playerSelection, computerSelection){
    //let computerSelection= computerPlay ();
    //let playerSelection = 'scissor';
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        msg= console.log('rock '+ 'rock: ');
        return false;
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        msg= console.log('rock '+ 'paper: ');
        return false;
    }else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        msg= console.log('rock '+ 'scissor: ');
        return true;
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        msg = console.log('paper '+ 'rock: ');
        return true;
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        msg= console.log('paper '+ 'paper: ');
        return false;
    }else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        msg= console.log('paper '+ 'scissor: ');
        return false;
    }else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        msg= console.log('scissor '+ 'rock: ');
        return false;
    }else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        msg= console.log('scissor '+ 'paper: ');
        return true;
    }else if (playerSelection === 'scissor' && computerSelection === 'scissor'){
        msg= console.log('scissor '+ 'scissor: ');
        return false;
    }
 }


  var selectionPlayerRock = document.getElementById('selectionPlayerRock').onclick= function (){
    playerSelectiong='rock';
    playRound(playerSelectiong, computerPlay());
 }

 var selectionPlayerPaper = document.getElementById('selectionPlayerPaper').onclick= function (){
    playerSelectiong='paper';
    playRound(playerSelectiong, computerPlay());
 }
 var selectionPlayerScissor = document.getElementById('selectionPlayerScissor').onclick= function (){
    playerSelectiong='scissor';
    playRound(playerSelectiong, computerPlay());
 }





