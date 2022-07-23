//Récuperer les infos envoyées dans le Localstorage (transformé de Json en objet)
let getproductbasket = JSON.parse(localStorage.getItem("product"));//Transformer la chaine de caractère en objet"
console.table(getproductbasket);
let tabproduct=[];


async function getproductCart(){
  for( productbasket of getproductbasket){
    
    await fetch(`http://localhost:3000/api/products/${productbasket.id}`)
        
        .then(function(res){
            return res.json();
        })
        .then(function(products) {
            tabproduct.push({id:productbasket.id,quantity:productbasket.quantity,color:productbasket.color,info:products})
            console.table(tabproduct)
        })
        .catch(function(error) {
            alert("impossible de récupérer les informations du produit")
        })
  }

}

//Afficher le contenu du panier dans la page Panier
async function panierDisplay(){
  await getproductCart();
  console.table(tabproduct);
  
  if(tabproduct.length>0){
    for(let i = 0; i< tabproduct.length; i++){
    document.getElementById("cart__items").innerHTML +=`
    <article class="cart__item" data-id="${tabproduct[i].id}" data-color="${tabproduct[i].color}">
      <div class="cart__item__img">
        <img id ="img" src="${tabproduct[i].info.imageUrl}" alt="${tabproduct[i].info.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${tabproduct[i].info.name}</h2>
          <p>${tabproduct[i].color}</p>
          <p>${tabproduct[i].info.price} €</p>
        </div>
        <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté :</p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${tabproduct[i].quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`
    }
  } else{
  alert("Ajouter des produits");
  }
}
panierDisplay()

/*Retirer un produit du panier en utilisant le filtre en inverssant la condition
function removeBasket(product){
    let basket = getproductbasket();
    basket = basket.filter (p => p.id != product.id || p.color != product.color);//à verifier
    saveBasket(basket);
}
removeBasket()*/

const removeProduct = ()=>{
  console.log("salut")

 let corbeilles = document.getElementsByClassName("deleteItem");
  
  for(corbeille of corbeilles) {
    console.log(corbeille)
      corbeille.addEventListener("click", (e) =>{
        const article = e.target.closest("article.cart__item")
        const productId = article.getAttribute('data-id')
        console.log(productId)
        const productcolor = article.getAttribute('data-color')
        console.log(productcolor)
        /*let basket = getproductbasket();
        basket = basket.filter (p => p.id != product.id || p.color != product.color);//à verifier
        saveBasket(basket)*/;})
      
 };
}
removeProduct();


/*Modifier la quantitée 
function changeQuantity(product,quantity){
  let basket = getbasket(basket);
  let foundProduct = basket.find(p =>p.id == id);
  if (foundProduct!= undefined){
     foundProduct.quantity = foundProduct.quantity + parseInt(quantity)
    if (foundProduct.quantity <=0 ){//si quantité arrive à zero supprimer le produit
      removeBasket(foundProduct);
    }else{
      saveBasket(basket);
    }
    
  }  
}


//Le prix total
function getTotalPrice(){
  let basket =getbasket();
  let Total= 0;
  console.log(TotalPrice);
  for (let product of basket){
    Total +=product.quantity * product.price
  }
  return Total;  
  
}
getTotalPrice()
console.log(Total);*/

