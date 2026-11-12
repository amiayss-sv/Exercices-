const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];

const catalogue = document.querySelector("#catalogue");

console.log(produits[1].nom);
console.log(produits[produits.length-1].prix);

function  creerFiche(produit){
const { nom, prix, stock } = produit;    
const nouvelArticle=document.createElement("article")
nouvelArticle.classList.add("border", "rounded-lg", "p-4");
const nomlArticle=document.createElement("h2")
const prixlArticle=document.createElement("p")
nomlArticle.textContent=nom
prixlArticle.textContent=`${prix} dh`
nouvelArticle.appendChild(nomlArticle);
nouvelArticle.appendChild(prixlArticle);

if (stock === 0) {
    const reptureArticle = document.createElement("p")
     reptureArticle.textContent = "Rupture";
    reptureArticle.classList.add("text-red-600")
    nouvelArticle.appendChild(reptureArticle)

}

 return  nouvelArticle ;
 
}
// Tester avec le premier produit
// const fiche = creerFiche(produits[0]);
// catalogue.appendChild(fiche)

produits.forEach((produit)=>{
    const fiche =creerFiche(produit)
    catalogue.appendChild(fiche)
})
