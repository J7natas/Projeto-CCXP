
function shadow(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle('escale');
}

function animeKey() {

    let quinta = document.getElementById('quinta');
    let sexta = document.getElementById('sexta');
    let sabado = document.getElementById('sabado');
    let domingo = document.getElementById('domingo');

    addEventListener('keydown', (event)=> {
        let code = event.code;
        
        if(code == 'Digit1') {
            quinta.classList.toggle('escale');
            sexta.classList.remove('escale');
            sabado.classList.remove('escale');
            domingo.classList.remove('escale');
        }   

        if(event.code == 'Digit2') {
            sexta.classList.toggle('escale');
            quinta.classList.remove('escale');
            sabado.classList.remove('escale');
            domingo.classList.remove('escale');
        }   

        if(event.code == 'Digit3') {
            sabado.classList.toggle('escale');
            sexta.classList.remove('escale');
            quinta.classList.remove('escale');
            domingo.classList.remove('escale');
        }   

        if(event.code == 'Digit4') {
            domingo.classList.toggle('escale');
            sexta.classList.remove('escale');
            sabado.classList.remove('escale');
            quinta.classList.remove('escale');
        }   
    })
}
animeKey();

