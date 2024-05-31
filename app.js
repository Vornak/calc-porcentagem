

function calcular(){
    preco = document.getElementById("precoInput").value;
    desconto = document.getElementById("desconto").value;
    resultado = document.getElementById("resultado")

    porcentagem = desconto*0.01

    valorDescontado = preco*porcentagem
    precoFinal = preco-valorDescontado

    return resultado.innerHTML = 'R$'+preco+' - '+desconto+'%'+ ' fica: '+'R$'+ precoFinal

}

function calcular5(){
    preco = document.getElementById("precoInput").value;
    resultado = document.getElementById("resultado")
    valorDescontado = preco*0.05
    precoFinal = preco - valorDescontado
    return resultado.innerHTML = 'pagamento no pix sai por ' + 'R$'+precoFinal

}

function calcular10(){
    preco = document.getElementById("precoInput").value;
    resultado = document.getElementById("resultado")
    valorDescontado = preco*0.1
    precoFinal = preco - valorDescontado
    return resultado.innerHTML = 'ficou ' + 'R$'+precoFinal

}


