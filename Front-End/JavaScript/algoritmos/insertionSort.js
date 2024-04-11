const lista = require('./listaLivros.js');

function insectionSort (lista) {
    for (let atual = 1; atual < lista.length; atual++) {
        let analise = atual;
        while (lista[analise]. preco < lista[analise - 1].preco) {
            let itemaAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
        
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemaAnalise;

            analise --;
        }
    }
    
    console.log(lista);
};

insectionSort(lista);