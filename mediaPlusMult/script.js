function resultado(){
    var nome = document.getElementById('nome').value
    var nota1 = parseFloat(document.getElementById('nota1').value)
    var nota2 = parseFloat(document.getElementById('nota2').value)
    var nota3 = parseFloat(document.getElementById('nota3').value)

    var media = (nota1 + nota2 + nota3) / 3
    var res = (media * 3).toFixed(2)
    var print = `Seu nome é ${nome} Sua média foi ${media} Sua multiplicação foi ${res}.`

    document.getElementById('resposta').textContent = print
} 