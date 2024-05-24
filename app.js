

function calcular(){
    preco = document.getElementById("precoInput").value;
    desconto = document.getElementById("desconto").value;
    resultado = document.getElementById("resultado")

    porcentagem = desconto*0.01

    valorDescontado = preco*porcentagem
    precoFinal = preco-valorDescontado

    return resultado.innerHTML = 'R$'+preco+' - '+desconto+'%'+ ' fica: '+'R$'+ precoFinal

}

