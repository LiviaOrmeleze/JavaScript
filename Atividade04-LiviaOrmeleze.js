var matriz = [
    [27, 21, 14],
    [9, 8, 24],
    [15, 13, 16]
]
console.table(matriz)
console.log(matriz[0][0],",", matriz[1][1], ",", matriz[2][2])
console.log(matriz[0][2],",", matriz[1][1], ",", matriz[2][0])
console.log(matriz[2][2],",", matriz[1][1], ",", matriz[0][0])
console.log(matriz[2][0],",", matriz[1][1], ",", matriz[0][2])

console.log("-----------------------------------------------------------------------")

var cadastro = ["Livia", 16, "Azul", "Abacaxi", "Rua dos Flanboyants", "Piter"]
// console.table(cadastro);

console.log("Olá,", cadastro[0],"! Seja bem-vinda ao nosso sistema.")
console.log("Você mora no endereço,", cadastro[4],"e tem um pet chamado,", cadastro[5])
console.log("Sua idade é ", cadastro[1],"e gosta muito da fruta,", cadastro[3])
console.log("Sua cor favorita é,", cadastro[2])