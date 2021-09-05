var numeros = [7, 7, 8, 10, -1];
var media = 0;
var soma = 0;
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] != -1) {
        soma += numeros[i];
    }
    else{
        break;
    }
}
media = (soma / (numeros.length -  1));
console.log("Soma: " + soma + " - Media: " + media);
