const cards = document.querySelector('#cards')

async function consumo() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        criarCards(data)


    }   catch (error) {
        console.log(error)
        alert('deu ruim')
    } 
}


function criarCards (data) {
    data.forEach(e => {
        const cardBox = document.createElement('div')
        cardBox.className = "box"

        const title = document.createElement('h1')
        title.textContent = e.title 

        const img = document.createElement('img')
        img.src = e.image

        const descri = document.createElement('p')
        descri.textContent = e.description

        const price = document.createElement('p')
        price.textContent = e.price

        cardBox.append(img, title, descri, price)
        cards.appendChild(cardBox)

    });
}


consumo()