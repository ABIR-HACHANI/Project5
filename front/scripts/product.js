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

//Enregister le panier dans le LocalStorage
function saveBasket(basket){
    localStorage.setItem("product",JSON.stringify(basket));//Transformer le tableau en chaine de caractère en utilisant "la sérialisation" 
    console.table(basket);
}
//verifier si le panier existe sinon le créer
function getbasket(basket){
    if ( basket== null){//Si panier vide
        
      return [];//Retourner un tableau vide
    }else{//Sinon
        return JSON.parse(basket);//Retourner le panier

    }
}


/***Ecouter le clic sur le botton ajouter_au_panier***/

let addItemTobasket = document.querySelector("#addToCart");
addItemTobasket.addEventListener("click",function(){
    let basket=localStorage.getItem("product");
    basket = getbasket(basket);//On recupère le panier qui existe dans le Local storage
    console.log("basket");
    let quantity = document.querySelector("#quantity").value;
    let color = document.querySelector("#colors").value;
    console.log(color);
  
    if(quantity >0 && quantity<=100 && color !=""){
    let objectProduct = {id:getproductId(),quantity:parseInt(quantity),color:color} ;

    //Gérer la quantitée pour ne pas répeter le meme produit
    let foundProduct = basket.find((p =>p.id == id) && (k =>k.color == color));
    if (foundProduct!= undefined){//Si le produit existe déja 
        foundProduct.quantity = foundProduct.quantity + parseInt(quantity);//alors ajouter 1 à la quantitée 
    }else{
        
    basket.push(objectProduct);//Sinon on joute le produit dans le panier
    }

    saveBasket(basket);//Et on enregistre le nouveau panier
    alert("Vous avez ajouter des produits dans le pannier")
}else{
    alert("Veillez choisir une quantitée et un  couleur")
}
})


