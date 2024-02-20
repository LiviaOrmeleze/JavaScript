//Operadores Lógicos
var manha = true;
var sono = true;

console.log("------------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);

console.log("Está de manhã E estou com sono?:", manha && sono);
console.log("Está de manhã OU estou com sono?:", manha || sono);

sono = false
console.log("------------------------------");
console.log("Está de manhã E estou com sono?:", manha && sono);
console.log("Está de manhã OU estou com sono?:", manha || sono);

manha = false 
console.log("------------------------------");
console.log("Está de manhã E estou com sono?:", manha && sono);
console.log("Está de manhã OU estou com sono?:", manha || sono);