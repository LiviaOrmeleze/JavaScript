var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);

frutas.push("Tangerina");
console.table(frutas);

frutas.unshift("Goiba");
console.table(frutas);

console.log("A fruta que está no íncide 5 é:", frutas[5]);

frutas.splice(4, 1);
console.table(frutas);

//Cópia de array
var copia = frutas.slice(2, 5);
console.table(copia);

//
var numeros = [27, 14, 21, 9, 16];
console.table(numeros);

console.log(" O terceiro elemento é: ", numeros[2]);

var copiaNum = numeros.slice();
console.table(copiaNum);

copiaNum[0] = numeros[0] * 2;
copiaNum[1] = numeros[1] * 2;
copiaNum[2] = numeros[2] * 2;
copiaNum[3] = numeros[3] * 2;
copiaNum[4] = numeros[4] * 2;
console.table(copiaNum);
