let usuario = prompt("inisra o nome de usuario (admin): ")
let senha = Number(prompt("inisra a senha (1234): "))
if((usuario == "admin") && (senha == 1234)){
    alert("---acesso-concedido---")

}
else{
    alert("---acesso-negado---")
}
