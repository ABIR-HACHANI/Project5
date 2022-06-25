items()
async function items(){
    const productId = getproductId()
    console.log(productId)
    const product =await getproduct(productId)
    console.table(product)
    console.table(product.colors)
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
/****ajoutre des produit dans le localstorage */
const addpanier = () => {
    let bouton = document.getElementById(addToCart)
}