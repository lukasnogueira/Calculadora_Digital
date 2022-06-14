
var br = document.createElement('br')
var br2 = document.createElement('br')

function Valores_1 (){
    
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
   
}

function valores_2 (){
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
    valor_1.style.width = '2em'
    document.body.appendChild(valor_1);
    
    var label_1 = document.createElement('label')
    label_1.for = 'valores_1'
    label_1.innerText = "X²" 
    document.body.appendChild(label_1);

    
    var valor_2 = document.createElement('input')
    valor_2.type = 'number'
    valor_2.id = 'valores_2'
    valor_2.placeholder = 'B'
    valor_2.style.width = '2em'
    document.body.appendChild(valor_2);
    
    var label_2 = document.createElement('label')
    label_2.for = 'valores_2'
    label_2.innerText = "X" 
    document.body.appendChild(label_2);

   
    
    var valor_3 = document.createElement('input')
    valor_3.type = 'number'
    valor_3.id = 'valores_3'
    valor_3.style.width = '2em'
    document.body.appendChild(valor_3);
    
    var label_3 = document.createElement('label')
    label_3.for = 'valores_3'
     document.body.appendChild(label_3);
}