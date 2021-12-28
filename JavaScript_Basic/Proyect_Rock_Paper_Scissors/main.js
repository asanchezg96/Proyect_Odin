
 //Funcion playComputer, escoge un valor aleatorio entre piedra, papel o tijera.
 const scorePlayer= document.querySelector('.scorep');
 const scoreCPU = document.querySelector('.scorec');
 const playRoundChoose= document.querySelector('.playRoundChoose');
 let playerSelectiong;
 let scoreplayer=0 ;
 let scorecpu=0 ;
 let round=0;
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
        msg= 'Player choose: '+'rock'+ ' ----- ' + 'CPU choose: '+'rock ';
        playRoundChoose.innerHTML=msg;
        return false;
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        msg= 'Player choose: '+'rock '+ ' ----- ' + 'CPU choose: '+ 'paper';
        playRoundChoose.innerHTML=msg;
        return false;
    }else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        msg= 'Player choose: '+ 'rock '+ ' ----- ' + 'CPU choose: '+ 'scissor';
        playRoundChoose.innerHTML=msg;
        return true;
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
        msg = 'Player choose: '+'paper '+ ' ----- ' + 'CPU choose: '+ 'rock';
        playRoundChoose.innerHTML=msg;
        return true;
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        msg= 'Player choose: '+ 'paper '+ ' ----- ' + 'CPU choose: '+ 'paper';
        playRoundChoose.innerHTML=msg;
        return false;
    }else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        msg= 'Player choose: '+ 'paper '+ ' ----- ' + 'CPU choose: '+ 'scissor';
        playRoundChoose.innerHTML=msg;
        return false;
    }else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        msg= 'Player choose: '+ 'scissor '+ ' ----- ' + 'CPU choose: ' + 'rock';
        playRoundChoose.innerHTML=msg;
        return false;
    }else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        msg= 'Player choose: '+ 'scissor '+ ' ----- ' + 'CPU choose: ' + 'paper';
        playRoundChoose.innerHTML=msg;
        return true;
    }else if (playerSelection === 'scissor' && computerSelection === 'scissor'){
        msg= 'Player choose: '+ 'scissor '+ ' ----- ' + 'CPU choose: ' + 'scissor';
        playRoundChoose.innerHTML=msg;
        return false;
    }
 }

 //Funcion para verificar las rondas del juego
 function checkRound(round){
    if(round ===5){
        scoreplayer=0;
        scorecpu=0;
        return true;
    }else{
        return false;
    }
}

//Eventos de click en botones de opciones 
  var selectionPlayerRock = document.getElementById('selectionPlayerRock').onclick= function (){
    playerSelectiong='rock';
    console.log(checkRound(round));
    if(checkRound(round)){
        round=0;
        scoreplayer =0;
        scorecpu =0;
        playRoundChoose.innerHTML="Se acabo la partida";
        scorePlayer.innerHTML="0";
        scoreCPU.innerHTML="0";


    }else{
        round=round+1;
        console.log(round);
        playRound(playerSelectiong, computerPlay());
    }
 }

 var selectionPlayerPaper = document.getElementById('selectionPlayerPaper').onclick= function (){
    playerSelectiong='paper';
    if(checkRound(round)){
        playRoundChoose.innerHTML="Se acabo la partida";

    }else{
        playRound(playerSelectiong, computerPlay());
    }
 }

 var selectionPlayerScissor = document.getElementById('selectionPlayerScissor').onclick= function (){

    playerSelectiong='scissor';
    if(checkRound(round)){
        playRoundChoose.innerHTML="Se acabo la partida";

    }else{
        playRound(playerSelectiong, computerPlay());
    }
 }

 





