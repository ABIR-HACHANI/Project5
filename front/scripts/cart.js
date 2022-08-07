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
    removeProduct();
  } else{
  alert("Ajouter des produits");
  }
}
panierDisplay()
//suprimer un produit du panier
const removeProduct = ()=>{
  
  let corbeilles = document.getElementsByClassName("deleteItem");
  for(corbeille of corbeilles) {      
    corbeille.addEventListener("click", (e) =>{
        const article = e.target.closest("article.cart__item");
        const productId = article.getAttribute("data-id");
        console.log(productId);
        const productcolor = article.getAttribute("data-color");
        console.log(productcolor);
        document
        .querySelector(`[data-id="${productId}"][data-color="${productcolor}"]`)
        .remove();
        let basket = getproductbasket;
        console.log(basket);
        basket=basket.filter((p) => p.id != productId || p.color != productcolor);//conserver tous les produits dont id est différent à cet valeur 
          saveBasket(basket);
    });
  }
};



//Modifier la quantitée 
function changeQuantity(){
  let basket = getproductbasket();
  const Idproduct = article.getAttribute("data-id");
  let foundProduct = basket.find(p =>p.id == Idproduct);
  if (foundProduct!= undefined){
     foundProduct.quantity = foundProduct.quantity + parseInt(quantity)
    if (foundProduct.quantity <=0 ){//si la quantité arrive à zero supprimer le produit
      removeProduct(foundProduct);
    }else{
      saveBasket(basket);
    }
    
  }  
}
changeQuantity();

//Total articles
function getTotalarticles(){
  let basket = getproductbasket();
  let TotalArticles = 0;
  for(let product of basket){
    TotalArticles += product.quantity;
  }
  return TotalArticles;
}

/*Le prix total
function getTotalPrice(){
  console.log("salut")
  let basket =getproductbasket();
  console.log(basket);
  let Total= 0;
  console.log(TotalPrice);
  for (product of basket){
    Total +=product.quantity * product.price
  }
  return Total;  
  
}
getTotalPrice()
console.log(Total);

*/
//Formulaire de contact
const Name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");
let valueName, valueLastName, valueAddress, valueCity, valueEmail;
Name.addEventListener("input",function(n){
  valueName;
  if(n.target.value.length==0){
    firstNameErrorMsg.innerHTML ="";
    console.log("rien");
    valueName=null;
    console.log(valueName);
  }
  if (n.target.value.match(/^[a-z A-Z]{3,25}$/)){
    firstNameErrorMsg.innerHTML ="";
    valueName = e.target.value;
    console.log("succes");
    console.log(valueName);
  }
});