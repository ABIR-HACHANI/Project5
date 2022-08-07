//Suprimer un produit dans le panier

const removeProduct = async(panierDisplay)=>{
    await panierDisplay();
    console.log("Je suis la fonction removeProduct");
    let corbeilles = document.querySelectorAll(".deleteItem");
    console.log(corbeilles)
    corbeilles.forEach((corbeille)=>{
        corbeille.addEventListener("click", () =>{});
        console.log(corbeille);
        let basket = getbasket(basket);
        
      //avec la méthode filter je sélectionne les produits à garder
       basket = basket.filter (p => p.id != product.id);
       //et l'envoyer dans Local Storage
       saveBasket(basket);
       console.log(basket);
        
   });
 }
 removeProduct();
 /*****************************************/
 //Le nombre total de produits dans le panier
 function getTotalProduct(){
    let basket =getbasket();
    let total=0;
    for(let product of basket){
      total+= product.quantity;
    }
    return total;
  }
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

  }
});*/