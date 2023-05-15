var D = document.getElementById('dia');
var H = document.getElementById('hor');
var M = document.getElementById('minuto');
var S = document.getElementById('segundo');

let init = '05 jun 2023';

function Crono() {
    let date = new Date(init);
    let hoje = new Date()
    
    let segundoTotal = (date - hoje)/1000;

    let diasFinal = Math.floor(segundoTotal / 60 / 60 / 24);
    let horaFinal = Math.floor(segundoTotal / 60 / 60) % 24;
    let minutoFinal = Math.floor(segundoTotal / 60) % 60; 
    let segundoFinal = Math.floor(segundoTotal) % 60;

    D.innerHTML = `${FormTempo( diasFinal)}D`;
    H.innerHTML = `${FormTempo( horaFinal)}H`;
    M.innerHTML = `${FormTempo( minutoFinal)}M`;
    S.innerHTML = `${FormTempo( segundoFinal)}S`;
    
}

function FormTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}
 setInterval(Crono, 1000) 