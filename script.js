const body = document.querySelector("body");

const carrinho = document.createElement('h1')

carrinho.innerHTML = 'Meu Carrinho'

carrinho.id = 'carrinho'

body.appendChild(carrinho)

const lilcart = document.createElement("main");

lilcart.id = "littleCar";

body.appendChild(lilcart);

let produtos = [

    {
        nome: 'Uva Crimson',
        valor: 44.99,
    },

    {
        nome: 'Vinho Canção',
        valor: 17.98,
    },

    {
        nome: 'Água de coco',
        valor: 8.99,
    },

    {
        nome: 'Mamão',
        valor: 9.98,
    },

    {
        nome: 'Água tônica',
        valor: 17.98,
    },
]
function novoProduto(arrProdutos){

    const listaProdutos = document.createElement('ul')

    const cabecalho = document.createElement('ul')

    cabecalho.id = 'cabecalho'

    const cabecalhoItem = document.createElement('li')

    cabecalhoItem.innerHTML = 'Item'

    cabecalhoItem.style.fontWeight = 'bold'
    cabecalho.appendChild(cabecalhoItem)

    const cabecalhoValue = document.createElement('li')

    cabecalhoValue.innerHTML = 'valor'

    cabecalho.appendChild(cabecalhoValue)

    listaProdutos.appendChild(cabecalho)

    for (i=0; i<arrProdutos.length; i++ ){

    const productItem = document.createElement('ul')

    const nomeItem = document.createElement('li')

    nomeItem.innerHTML = arrProdutos[i].nome
    
    nomeItem.style.fontWeight = 'bolder'

    productItem.appendChild(nomeItem)

    const itemValue = document.createElement('li')

    itemValue.innerHTML = 'R$ ' + arrProdutos[i].valor

    productItem.appendChild(itemValue)

    productItem.className = 'item'

    listaProdutos.appendChild(productItem)
    }

    return listaProdutos
}

const list = novoProduto(produtos)

list.id = 'listaProdutos'

lilcart.appendChild(list)

const productDetails = document.createElement('section')

productDetails.id = 'details'

list.appendChild(productDetails)

const totalPrice = document.createElement('ul')

totalPrice.id = 'totalPrice'

function somaValorTotal(arrProdutos){
    let soma = 0
    for (i=0; i<arrProdutos.length; i++){
        soma += arrProdutos[i].valor
    }
    return soma
}

const totalPriceText = document.createElement('li')

totalPriceText.innerHTML = 'Total'

totalPriceText.style.fontWeight = 'bold'

totalPrice.appendChild(totalPriceText)

const totalPriceValue = document.createElement('li')

totalPriceValue.innerHTML = 'R$ ' + somaValorTotal(produtos)

totalPrice.appendChild(totalPriceValue)

productDetails.appendChild(totalPrice)

const submitButton = document.createElement('button')

submitButton.innerHTML = 'Finalizar compra'

submitButton.id = 'button'

productDetails.appendChild(submitButton)