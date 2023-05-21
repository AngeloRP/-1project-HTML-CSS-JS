function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('elemento não encontrado');
    }
}  
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++ ) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idDoAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idDoAudio);
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}






/* document.querySelector('')  : 

document = representa o html, no caso peço ao Js, acesse o documento;

. acessa o doc.

querySelector('') = acessa um item;

*/

/* 
    tag -> apenas a: tag
    classe -> utiliza o:  .
    id ->  utliza: #

    document.querySelector('input[type=tel]') 
    utiliza-se o [] para acessar um input do type tel.
*/