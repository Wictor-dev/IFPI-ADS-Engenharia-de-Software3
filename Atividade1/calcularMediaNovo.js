var numeros = [7, 7, 8, 10, -1];
var numeros2 = [10,10,-1];

function somar(numeros){
    let soma = 0;

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] == -1){
            break;
        }
        soma += numeros[i];
    }
    return soma;

}
function calcularMedia(numeros, soma){
    return soma / (numeros.length - 1)
}

var soma = somar(numeros)
var soma2 = somar(numeros2)
var media = calcularMedia(numeros, soma);
var media2 = calcularMedia(numeros2, soma2);

console.log("Soma: " + soma + " - Media: " + media);
console.log("Soma2: " + soma2 + " - Media2: " + media2);
