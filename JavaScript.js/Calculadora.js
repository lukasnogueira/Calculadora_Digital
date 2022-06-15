
var br = document.createElement('br')
var br2 = document.createElement('br')

function Valores_1(value) {

    document.getElementById('+').remove()
    document.getElementById('-').remove()
    document.getElementById('/').remove()
    document.getElementById('*').remove()
    document.getElementById('barskara').remove()


    var label_1 = document.createElement('label')
    label_1.for = 'valores_1'
    label_1.innerText = "Digite o primeiro valor:"
    document.body.appendChild(label_1);

    var valor_1 = document.createElement('input')
    valor_1.type = 'number'
    valor_1.id = 'valores_1'
    valor_1.placeholder = 'Valor'
    valor_1.style.width = '4em'
    document.body.appendChild(valor_1);
    document.body.appendChild(br)

    var label_2 = document.createElement('label')
    label_2.for = 'valores_2'
    label_2.innerText = "Digite o segundo valor:"
    document.body.appendChild(label_2);

    var valor_2 = document.createElement('input')
    valor_2.type = 'number'
    valor_2.id = 'valores_2'
    valor_2.placeholder = 'Valor'
    valor_2.style.width = '4em'
    document.body.appendChild(valor_2);
    document.body.appendChild(br2);


    var button = document.createElement('button')
    button.innerText = 'Calcular'
    button.id = 'calcular'
    button.onclick = 'calcular'
    document.body.appendChild(button);
    document.querySelector('#calcular').addEventListener('click', calcular2)

    function calcular2() {
        console.log(value)
        var valor_1 = parseFloat(document.getElementById('valores_1').value)
        var valor_2 = parseFloat(document.getElementById('valores_2').value)

        switch (value) {
            case 1: var resultado = (valor_1 + valor_2)
                break
            case 2: var resultado = (valor_1 - valor_2)
                break
            case 3: var resultado = (valor_1 * valor_2)
                break
            case 4: var resultado = (valor_1 / valor_2)
                break
        }
        var result = document.createElement('p')
        result.innerText ='O Resultado é  =' + resultado
        document.body.appendChild(result)
    }
}

function valores_2() {
    document.getElementById('+').remove()
    document.getElementById('-').remove()
    document.getElementById('/').remove()
    document.getElementById('*').remove()
    document.getElementById('barskara').remove()

    document.body.appendChild(br);
    document.body.appendChild(br2);

    var valor_1 = document.createElement('input')
    valor_1.type = 'number'
    valor_1.id = 'valores_1'
    valor_1.placeholder = 'A'
    valor_1.style.width = '3em'
    document.body.appendChild(valor_1);

    var label_1 = document.createElement('label')
    label_1.for = 'valores_1'
    label_1.innerText = " X² "
    document.body.appendChild(label_1);


    var valor_2 = document.createElement('input')
    valor_2.type = 'number'
    valor_2.id = 'valores_2'
    valor_2.placeholder = 'B'
    valor_2.style.width = '4em'
    document.body.appendChild(valor_2);

    var label_2 = document.createElement('label')
    label_2.for = 'valores_2'
    label_2.innerText = " X "
    document.body.appendChild(label_2);



    var valor_3 = document.createElement('input')
    valor_3.type = 'number'
    valor_3.id = 'valores_3'
    valor_3.placeholder = 'C'
    valor_3.style.width = '4em'
    document.body.appendChild(valor_3);

    var label_3 = document.createElement('label')
    label_3.for = 'valores_3'
    document.body.appendChild(label_3);
    document.body.appendChild(br2);
    document.body.appendChild(br);

    var button2 = document.createElement('button')
    button2.innerText = 'Calcular'
    button2.id = 'calcular'
    button2.onclick = 'calcular()'
    document.body.appendChild(button2);
    document.querySelector('#calcular').addEventListener('click', calcular)
}

function calcular() {
    console.log("tá rodando")
    var a = parseFloat(document.getElementById('valores_1').value)
    var b = parseFloat(document.getElementById('valores_2').value)
    var c = parseFloat(document.getElementById('valores_3').value)

    var delta = (b ** 2) - 4 * a * c
    if (delta > 0) {

        var deltat = document.createElement('p')
        deltat.innerText = 'Delta é maior que zero, possue duas raizes'
        document.body.appendChild(deltat)

        var x_linhha = (-b + Math.sqrt(delta)) / 2 * a
        var x_2linhha = (-b - Math.sqrt(delta)) / 2 * a
        var result = document.createElement('p')
        result.innerText = "x'=" + x_linhha + '\nx"=' + x_2linhha
        document.body.appendChild(result)

    }

    else if (delta == 0) {
        var delta_tal = document.createElement('h2')
        delta_tal.innerText = 'se o delta é igual a zero\npossue uma raiz'
        document.body.appendChild(delta_tal)
        var x_linhha = (-b + Math.sqrt(delta)) / 2 * a
        var result = document.createElement('p')
        result.innerText = "x =" + x_linhha
        document.body.appendChild(result)

    }

    else if (delta < 0) {
        var resultt = document.createElement('p')
        resultt.innerText = 'não possue raizes, pertencentes aos numeros reais'
        document.body.appendChild(resultt)
    }
}