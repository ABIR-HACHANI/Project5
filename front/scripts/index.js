
/******************* Afficher les produits sur la page d'accueil*******************/
items()
async function items(){
    const products = await getproducts()
    console.table(products)
    for(let i = 0; i< products.length; i++){
        const product=products[i];
        displayproduct(product)
    }
}

/***Fonction pour récuperer les différents produits***/

function getproducts() {
    
    return fetch(`http://localhost:3000/api/products`)
    
    .then(function(res){
        return res.json();
    })
    .then(function(products) {
        return products
    })
    .catch(function(error) {
        alert(error)
    })
}

/***Fonction pour afficher un produit***/

function displayproduct(product){
    document.getElementById("items").innerHTML +=`
    
        <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.altTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
        </a>
        `
}