const panier = [
  { id: 1, nom: 'Clavier', prix: 250, quantite: 1 },
  { id: 2, nom: 'Souris', prix: 90, quantite: 2 },
  { id: 3, nom: 'Câble', prix: 35, quantite: 3 }
];
const listePanier=document.getElementById("panier")
const nbArticles=document.getElementById("nbArticles")
const total=document.getElementById("total")

panier.forEach((produit)=>{
   const li =document.createElement("li")
   const li2 = document.createElement("li")
   const li3 = document.createElement("li")
   li.textContent = produit.nom
   li2.textContent=`${produit.prix} DH`
   li3.textContent=`Quantity : ${produit.quantite}`
   listePanier.append(li , li2 , li3)

});