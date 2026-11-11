const bouton = document.querySelector("#ajouter");
const notes = document.querySelector("#notes");
let compteur=0 ;

bouton.addEventListener("click",function(){
    compteur++;
    const nouvelleNote=document.createElement("li")
    console.log(nouvelleNote);
    nouvelleNote.textContent=`Note n° ${compteur}`
    nouvelleNote.classList.add("p-2", "bg-yellow-100", "rounded");
    //notes.prepend(nouvelleNote)           //prepend() signifie ajouter au début 
    notes.appendChild(nouvelleNote)                     // appendChild() ajoute à la fin
    console.log(notes.children.length);
    
    
})



