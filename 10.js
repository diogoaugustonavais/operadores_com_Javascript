alert("Análise de Crédito Bancário.")
let salario = Number(prompt("Digite o seu salário bruto:"));
let parcela = Number(prompt("Digite valor da parcela:"));
const porcentagem = salario*0.30
if ((parcela >= porcentagem)){
    console.log("Empréstimo Recusado.")
}
else{
    console.log("Empréstimo Aprovado.")
}
