'use strict';

const etàUtente = parseInt(prompt('Quanti anni hai?'));

const kmPercorso = parseInt(prompt('Quianti km vuoi percorrere?'));

let prezzoBiglietto = parseFloat(kmPercorso * 0.21);


if ( etàUtente < 18){
    prezzoBiglietto =prezzoBiglietto - ((prezzoBiglietto / 100) *20).toFixed(2);
    console.log(prezzoBiglietto)
}
else if (etàUtente> 65){
    prezzoBiglietto =prezzoBiglietto - ((prezzoBiglietto / 100) *40).toFixed(2);
    console.log(prezzoBiglietto);
}
else( etàUtente >= 18 , etàUtente <= 65);{
    console.log(prezzoBiglietto);
}