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


async function panierDisplay(){
  await getproductCart();
  console.log(tabproduct);
  
  if(tabproduct.length>0){
    for(let i = 0; i< tabproduct.length; i++){
    document.getElementById("cart__items").innerHTML +=`
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
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

/*const panierDisplay = async () =>{
    console.log("bonjour");
    if(getproductbasket){
       cart__order__form.classList.add("display-none");
       document.getElementById("cart__items").innerHTML +=` 
       <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img id ="img" src="${info.imageUrl}" alt="${info.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${info.name}</h2>
                    <p>${tabproduct.color}</p>
                    <p>${info.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté :</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> 
       `
       
       
    } else{
        alert("Ajouter des produits");
    }

}
panierDisplay();
suprimer un produit dans le panier
const removeProduct = async(panierDisplay)=>{
    await panierDisplay
    console.log("Je suis la fonction removeProduct");
    let corbeilles = document.querySelectorAll(".deleteItem");
    console.log(corbeilles);
    corbeilles.forEach((corbeille)=>{
        corbeille.addEventListener("click", () =>{});
        
        console.log(corbeille);
        let basket = getbasket(basket);
      basket = basket.filter (p => p.id != product.id);
      saveBasket(basket);
      console.log(basket);

        //let totalAdd
    });
}
removeProduct();

//Retirer un produit du panier en utilisant le filtre en inverssant la condition
function removeBasket(product){
    let basket = getbasket(basket);
    basket = basket.filter (p => p.id != product.id);
    saveBasket(basket);
    console.log(basket);
}


/**Modifier la quantitée 
function changeQuantity(product,quantity){
  let basket = getbasket(basket);
  let foundProduct = basket.find(p =>p.id == id)
  if (foundProduct!= undefined){
    foundProduct.quantity+= quantity ;
    if (foundProduct.quantity <=0 || foundProduct.quantity= =100){
      removeBasket(foundProduct);
    }else{
      saveBasket(basket);
    }
  }  
}

function getTotalProduct(){
  let basket =getbasket();
  let total=0;
  for(let product of basket){
    total+= product.quantity;
  }
  return total;
}

function getTotalPrice(){
  let basket =getbasket();
  let TotalPrice = 0;
  for (let product of basket){
    TotalPrice +=product.quantity * product.price
  }
  return TotalPrice;  
}*/
