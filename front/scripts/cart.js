//Récuperer les infos envoyées dans le Localstorage (transformé de Json en objet)
let addproduct = JSON.parse(localStorage.getItem("product"));


const panierDisplay = async () =>{
    console.log("bonjour");
    if(addproduct){
        await addproduct;
        console.table(addproduct);
       // cart__order__form.classList.add("display-none");
       cart__items.innerHTML = addproduct.map((product) =>` 
       <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img id ="img" src="${product.imageUrl}" alt="${product.altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${product.color}</p>
                    <p>${product.price} €</p>
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
       );
       
    }else{
        alert("Ajouter des produits");
    }

}
panierDisplay();
//suprimer un produit dans le panier
const removeProduct = async(panierDisplay)=>{
    await panierDisplay
    console.log("Je suis la fonction removeProduct");
    let corbeilles = document.querySelectorAll(".deleteItem");
    console.log(corbeilles);
    corbeilles.forEach((corbeille)=>{
        corbeille.addEventListener("click", () =>{});
        console.log(corbeille);

        let totalAdd
    });
}
removeProduct();

/**Supprimer un produit du panier en utilisant le filtre en inverssant la condition
function removeBasket(product){
    let basket = getbasket(basket);
    basket = basket.filter (p => p.id = product.id);
    console.log(basket);
}
removeBasket();**/

/**Modifier la quantitée 
function changeQuantity(product,quantity){
    let basket = getbasket(basket);
    let foundProduct = basket.find(p =>p.id == id)
    if (foundProduct!= undefined){
    } else{

    }
}**/