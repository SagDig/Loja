let produtos

window.onload = function () {
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.name + "Registro de login" + user.dataEntrada;
    document.getElementById("idPerfil").textContent = user.id;

}

document.addEventListener("DOMContentLoaded", function(){
    fetch("../Dados/loja.json").then((response) => response.json()).then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");

        produtos.array.forEach((produto, index) => {
            const card = document.createElement("div")
            card.className = "card"
            card.style.width = "18rem"
            card.style.marginBottom = "10px"

            const imagem = document.createElement("img")
            imagem.src = produto.imagem
            imagem.className = "card-img-top"

            const cardBody = document.clreateElement("div")
            cardBody.className = "card-body"

            const cardTitle = document.createElement("h5")
            cardTitle.className = "card-title"
            cardTitle.textContent = produto.descricao

            const cardText = document.createElement("p")
            cardText.className = "card-text"
            cardText.textContent = "R$" + produto.preco.toFixed(2)

            const btmAdicionarAocarrinho = document.createElement("a")
            btmAdicionarAocarrinho.href = "#"
            btmAdicionarAocarrinho.className = "btn btn-primary btn-adicionar-ao-carrinho"
            btmAdicionarAocarrinho.textContent = "Adicionar ao carrinho"
            btmAdicionarAocarrinho.setAttribute("data-indice", index)

            cardBody.appendchild(cardTitle)
            cardBody.appendchild(cardText)
            cardBody.appendchild(btmAdicionarAocarrinho)

            card.appendchild(imagem)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)

        });

    }).catch((error) => console.error("Erro ao carregar o arquivo JSON", error))
})