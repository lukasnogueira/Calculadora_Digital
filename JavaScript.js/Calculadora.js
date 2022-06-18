
var br = document.createElement('br')
var br2 = document.createElement('br')

function Valores_1(value) {
    var operacoes = document.querySelector('.operacoes')
    var butoes = document.querySelector('.calc_rlod')


    document.getElementById('+').remove()
    document.getElementById('-').remove()
    document.getElementById('/').remove()
    document.getElementById('*').remove()
    document.getElementById('barskara').remove()


    var label_1 = document.createElement('label')
    label_1.for = 'valores_1'
    label_1.id = 'label_1'
    label_1.innerText = "Digite o primeiro valor:"
    label_1.className = 'Valores'
    operacoes.appendChild(label_1);

    var valor_1 = document.createElement('input')
    valor_1.type = 'number'
    valor_1.id = 'valores_1'
    valor_1.placeholder = 'Valor'
    valor_1.style.width = '4em'
    valor_1.className = 'Valores'
    operacoes.appendChild(valor_1);
    operacoes.appendChild(br)

    var label_2 = document.createElement('label')
    label_2.for = 'valores_2'
    label_2.id = 'label_2'
    label_2.className = 'Valores'
    label_2.innerText = "Digite o segundo valor:"
    operacoes.appendChild(label_2);

    var valor_2 = document.createElement('input')
    valor_2.type = 'number'
    valor_2.id = 'valores_2'
    valor_2.placeholder = 'Valor'
    valor_2.className = 'Valores'
    valor_2.style.width = '4em'
    operacoes.appendChild(valor_2);
    operacoes.appendChild(br2);


    var button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'calcular'
    button.onclick = 'calcular'
    butoes.appendChild(button);
    document.querySelector('#calcular').addEventListener('click', calcular2)

    function calcular2() {
        var resposta = document.querySelector('.resultados')
        var butoes = document.querySelector('.calc_rlod')
        var valor_1 = parseFloat(document.querySelector('#valores_1').value)
        var valor_2 = parseFloat(document.querySelector('#valores_2').value)

        switch (value) {
            case 1: var resultado = (valor_1 + valor_2)
                var operacao = '+'
                break
            case 2: var resultado = (valor_1 - valor_2)
                var operacao = '-'
                break
            case 3: var resultado = (valor_1 / valor_2)
                var operacao = '/'
                break
            case 4: var resultado = (valor_1 * valor_2)
                var operacao = '*'
                break
        }
        var result = document.createElement('p')
        result.innerText = `O Resulta de ${valor_1} ${operacao} ${valor_2} é = ${resultado}`
        resposta.appendChild(result)
        document.getElementById('calcular').remove()
        document.getElementById('valores_2').remove()
        document.getElementById('valores_1').remove()
        document.getElementById('label_2').remove()
        document.getElementById('label_1').remove()

        var recarregar = document.createElement('button')
        recarregar.innerText = 'outra operação'
        recarregar.id = 'recarregar'
        recarregar.onclick = 'recarregart'
        butoes.appendChild(recarregar);
        document.querySelector('#recarregar').addEventListener('click', recarregart)

        function recarregart() {
            location.reload()
        }
    }

}

function valores_2() {
    var butoes = document.querySelectorO('.calc_rlod')
    var operacoes = document.querySelector('.operacoes')
    document.getElementById('+').remove()
    document.getElementById('-').remove()
    document.getElementById('/').remove()
    document.getElementById('*').remove()
    document.getElementById('barskara').remove()

    operacoes.appendChild(br);
    operacoes.appendChild(br2);

    var valor_1 = document.createElement('input')
    valor_1.type = 'number'
    valor_1.id = 'valores_1'
    valor_1.placeholder = 'A'
    valor_1.className = 'Valores'
    valor_1.style.width = '3em'
    operacoes.appendChild(valor_1);

    var label_1 = document.createElement('label')
    label_1.for = 'valores_1'
    label_1.innerText = " X² "
    label_1.className = 'Valores'
    label_1.id = 'label_1'
    operacoes.appendChild(label_1);


    var valor_2 = document.createElement('input')
    valor_2.type = 'number'
    valor_2.id = 'valores_2'
    valor_2.placeholder = 'B'
    valor_2.className = 'Valores'
    valor_2.style.width = '4em'
    operacoes.appendChild(valor_2);

    var label_2 = document.createElement('label')
    label_2.for = 'valores_2'
    label_2.innerText = " X "
    label_2.className = 'Valores'
    label_2.id = 'label_2'
    operacoes.appendChild(label_2);



    var valor_3 = document.createElement('input')
    valor_3.type = 'number'
    valor_3.id = 'valores_3'
    valor_3.placeholder = 'C'
    valor_3.className = 'Valores'
    valor_3.style.width = '4em'
    operacoes.appendChild(valor_3);

    var label_3 = document.createElement('label')
    label_3.for = 'valores_3'
    label_3.id = 'label_3'
    label_3.className = 'Valores'
    operacoes.appendChild(label_3);
    operacoes.appendChild(br2);
    operacoes.appendChild(br);

    var button2 = document.createElement('button')
    button2.innerText = 'Calcular'
    button2.id = 'calcular'
    button2.onclick = 'calcular()'
    butoes.appendChild(button2);
    document.querySelector('#calcular').addEventListener('click', calcular)
}

function calcular() {
    var resposta = document.querySelector('.resultados')
    var butoes = document.querySelectorO('.calc_rlod')
    var operacoes = document.querySelector('.operacoes')

    var a = parseFloat(document.querySelector('#valores_1').value)
    var b = parseFloat(document.querySelector('#valores_2').value)
    var c = parseFloat(document.querySelector('#valores_3').value)

    var delta = (b ** 2) - 4 * a * c
    if (delta > 0) {

        var deltat = document.createElement('p')
        deltat.innerText = 'Delta é maior que zero, possue duas raizes'
        resposta.appendChild(deltat)

        var x_linhha = (-b + Math.sqrt(delta)) / 2 * a
        var x_2linhha = (-b - Math.sqrt(delta)) / 2 * a
        var result = document.createElement('p')
        result.innerText = "x'=" + x_linhha + '\nx"=' + x_2linhha
        resposta.appendChild(result)

    }

    else if (delta == 0) {
        var delta_tal = document.createElement('h2')
        delta_tal.innerText = 'se o delta é igual a zero\npossue uma raiz'
        operacoes.appendChild(delta_tal)
        var x_linhha = (-b + Math.sqrt(delta)) / 2 * a
        var result = document.createElement('p')
        result.innerText = "x =" + x_linhha
        resposta.appendChild(result)

    }

    else if (delta < 0) {
        var resultt = document.createElement('p')
        resultt.innerText = 'não possue raizes, pertencentes aos numeros reais'
        resposta.appendChild(resultt)
    }

    document.getElementById('calcular').remove()
    document.getElementById('valores_2').remove()
    document.getElementById('valores_1').remove()
    document.getElementById('label_2').remove()
    document.getElementById('label_1').remove()
    document.getElementById('label_3').remove()
    document.getElementById('valores_3').remove()


    var recarregar = document.createElement('button')
    recarregar.innerText = 'outra operação'
    recarregar.id = 'recarregar'
    recarregar.onclick = 'recarregart'
    butoes.appendChild(recarregar);
    document.querySelector('#recarregar').addEventListener('click', recarregart)

    function recarregart() {
        location.reload()
    }
}