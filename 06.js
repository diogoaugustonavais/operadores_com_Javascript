let estudante = (prompt("Você é estudante?"));
let idade = Number(prompt("Digite a sua idade:"));
if ((idade >= 60) || (estudante == "Sim"+"sim"+"s")){
    console.log("Você tem direito a desconto de meia entrada.")
}
else if((idade < 60) || (estudante == "Não"+"nao"+"Nao"+"não")) {
    console.log("Você não tem direito ao desconto de meia entrada.")
}

