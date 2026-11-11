let compteur = 0;
const Button1=document.querySelector("#moins")
//console.log(Button1)
const Valeur=document.querySelector("#valeur")
const Button2=document.querySelector("#plus")
const Button3=document.querySelector("#reset")


function afficher(){
    Valeur.textContent=compteur
}

Button2.addEventListener("click",function(){
    compteur++;
    afficher()
})

Button1.addEventListener("click",function(){
    if(compteur>0){
compteur--;
    }
    afficher()
})

Button3.addEventListener("click",function(){
    compteur = 0;
    afficher()
})