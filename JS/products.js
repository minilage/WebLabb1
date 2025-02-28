document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Klassisk tårta", category: "tårtor", price: 600, img: "media/tarta1.webp", description: "En klassisk tårta med 2 valfria smaker." },
        { name: "Chokladtårta", category: "tårtor", price: 600, img: "media/chokladtarta.webp", description: "Ljuvlig chokladtårta med rik chokladsmak." },
        { name: "Jordgubbstårta", category: "tårtor", price: 600, img: "media/jordgubbstarta.webp", description: "Somrig jordgubbstårta med fluffig grädde." },
        { name: "Bröllopstårta 2 våningar", category: "tårtor", price: 1300, img: "media/weddingcake1.webp", description: "Bröllopstårta på sockerkaksbotten. Max 3 smaker ingår." },
        { name: "Bröllopstårta 3 våningar", category: "tårtor", price: 1800, img: "media/weddingcake2.webp", description: "Bröllopstårta på sockerkaksbotten. Max 4 smaker ingår." },
        { name: "Bröllopstårta 4 våningar", category: "tårtor", price: 2300, img: "media/weddingcake3.webp", description: "Bröllopstårta på sockerkaksbotten. Max 5 smaker ingår." },
        { name: "Drömmar", category: "kakor", price: 70, img: "media/dreams.webp", description: "Vaniljdrömmar som smälter i munnen. Säljs i förpackning om 10 st." },
        { name: "Snittar", category: "kakor", price: 60, img: "media/snittar.webp", description: "Snittar. Går att få i flera olika smaker. Säljs i förpackning om 10st." },
        { name: "Chocolate Chip Cookies", category: "kakor", price: 15, img: "media/cookies.webp", description: "Mjuka chocolate chip cookies. Säljes styckvis." },
        { name: "Limpa", category: "bröd", price: 50, img: "media/limpor.webp", description: "Hantverksbakat smakrikt bröd." },
        { name: "Frallor", category: "bröd", price: 80, img: "media/frallor.webp", description: "Mjuka frallor perfekta till frukost. Säljes i förpackning om 10 st" },
        { name: "Vetekakor", category: "bröd", price: 80, img: "media/vetekakor.webp", description: "Mjuka vetekakor säljes i förpackning om 10 st." }
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text"><strong>Pris:</strong> ${product.price} kr</p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal"
                        data-name="${product.name}" data-description="${product.description}" 
                        data-price="${product.price}" data-img="${product.img}">Visa mer</button>
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });

    // Bootstrap modal hantering
    const productModal = document.getElementById("productModal");
    productModal.addEventListener("show.bs.modal", function (event) {
        const button = event.relatedTarget;
        document.getElementById("productModalLabel").textContent = button.getAttribute("data-name");
        document.getElementById("modalImage").src = button.getAttribute("data-img");
        document.getElementById("modalDescription").textContent = button.getAttribute("data-description");
        document.getElementById("modalPrice").textContent = button.getAttribute("data-price");

        // Lägg till produkt i varukorg från modalen
        document.getElementById("addToCart").onclick = function () {
            const name = button.getAttribute("data-name");
            const price = parseInt(button.getAttribute("data-price"));
            addToCart(name, price);
        };
    });
});