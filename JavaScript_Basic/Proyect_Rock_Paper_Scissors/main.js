function computerPlay (){
    const namesOptions = ['piedra', 'papel', 'tijeras'];
    let indiceRandom = Math.floor(Math.random()*namesOptions.length);
    let chooseNamesOptions = namesOptions[indiceRandom];
    console.log(chooseNamesOptions);

}
