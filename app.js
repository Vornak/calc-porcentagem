

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

function dividir(){
    preco = document.getElementById("total").value;
    parte1 = document.getElementById("dividir1").value;
    parte2 = preco - parte1
    return resultado.innerHTML = 'ficou ' + 'R$'+parte2+' na outra parte'
}

//Math.round(parte2)

