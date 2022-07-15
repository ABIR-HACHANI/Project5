items()
async function items(){
    const productId = getproductId()
    console.log(productId)
    const product =await getproduct(productId)
    console.table(product)
    productselected(product)
}

/***Récupérer l’id du produit à afficher***/
function getproductId(){
   return new URL(location.href).searchParams.get("id")
}

/***Récupérer les différentes informations du
produit en question***/
function getproduct(productId){
    
    return fetch(`http://localhost:3000/api/products/${productId}`)
        
        .then(function(res){
            return res.json();
        })
        .then(function(products) {
            return products
        })
        .catch(function(error) {
            alert("impossible de récupérer les informations du produit")
        })
}

/***Insérer un produit et ses détails dans la page produit***/
function productselected(product){

    document.getElementById("img").src = product.imageUrl
    document.getElementById("title").textContent = product.name
    document.getElementById("price").textContent = product.price
    document.getElementById("description").textContent = product.description
    let colorselect = document.getElementById("colors");
    console.log(colorselect);
    console.log(product.colors); 
    for ( let i = 0; i <product.colors.length; i++){
        
        colorselect.innerHTML +=`<option value="${product.colors[i]}">${product.colors[i]}</option>`;
        
    }    
}
//verifier si le panier existe sinon le créer
function getbasket(basket){
    if ( basket== null){
      return [];
    }else{
        return JSON.parse(basket);

    }
}

/***Ecouter le clic sur le botton ajouter_au_panier***/

let addItemTobasket = document.querySelector("#addToCart");
addItemTobasket.addEventListener("click",function(){
    let basket=localStorage.getItem("product");
    basket = getbasket(basket);
    console.log("basket");
    let quantity = document.querySelector("#quantity").value;
    let color = document.querySelector("#colors").value;
    console.log(color);
    let price = document.querySelector("#price").value;
    console.log(price);
    let objectProduct = {id:getproductId(),quantity:quantity,color:color,price:price} ;
    let foundProduct = basket.find((p =>p.id == id) && (k =>k.color == color));
    if (foundProduct!= undefined){
        foundProduct.quantity++;//Ajouter 1 à la quantitée si le produit existe déja
    }else{
        
    basket.push(objectProduct);
    }

    localStorage.setItem("product",JSON.stringify(basket));
    console.table(basket);
    alert("Vous avez ajouter ce produit dans le pannier")
})


