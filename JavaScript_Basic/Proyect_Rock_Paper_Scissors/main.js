
 //Funcion playComputer, escoge un valor aleatorio entre piedra, papel o tijera.
 const playComputer= document.querySelector('.playComputer');
 const playRoundB = document.querySelector('.playRoundB');
 const playerSelectiong = 'rock';
 let scoreplayer =0;
 let scorecpu =0;

 function computerPlay (){
 const namesOptions = ['rock', 'paper', 'scissor'];
 let indiceRandom = Math.floor(Math.random()*namesOptions.length);
 let chooseNamesOptions = namesOptions[indiceRandom];
 return chooseNamesOptions;
 }

//  //Funcion para jugar una sola ronda
 function playRound(playerSelection, playerSelection){
    let winner = '';
    // if (score==3){
    //     return console.log('You winner!')
    // }else{
        if(checkWinnerRound(playerSelection, playerSelection)){
            scoreplayer=scoreplayer+1;
            return console.log(winner='You winner this round!'+ 'Score: '+ scoreplayer);
        }else {
            scorecpu = scorecpu+1;
            return console.log(winner='You winner this round!'+ 'Score: '+ scorecpu);
            
        }
    // }
    
 }

 function checkWinnerRound(playerSelection, computerSelection){
    let computerSelectiong= computerPlay ();
    let pSelection = 'scissor';
    if (pSelection === 'rock' && computerSelectiong === 'rock'){
        return console.log('rock '+ 'rock: '+false);
    }else if (pSelection === 'rock' && computerSelectiong === 'paper'){
        return console.log('rock '+ 'paper: '+false);
    }else if (pSelection === 'rock' && computerSelectiong === 'scissor'){
        return console.log('rock '+ 'scissor: '+true);
    }else if (pSelection === 'paper' && computerSelectiong === 'rock'){
        return console.log('paper '+ 'rock: '+true);
    }else if (pSelection === 'paper' && computerSelectiong === 'paper'){
        return console.log('paper '+ 'paper: '+false);
    }else if (pSelection === 'paper' && computerSelectiong === 'scissor'){
        return console.log('paper '+ 'scissor: '+false);
    }else if (pSelection === 'scissor' && computerSelectiong === 'rock'){
        return console.log('scissor '+ 'rock: '+false);
    }else if (pSelection === 'scissor' && computerSelectiong === 'paper'){
        return console.log('scissor '+ 'paper: '+true);
    }else if (pSelection === 'scissor' && computerSelectiong === 'scissor'){
        return console.log('scissor '+ 'scissor: '+false);
    }
 }
 //console.log(checkWinner(playerSelectiong, computerSelectiong));

