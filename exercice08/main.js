const Note1 =document.querySelectorAll(".note") //nodelist
const Note2 =document.getElementsByClassName("note")  //htmlcollection
const Button1=document.querySelector("#surligner")
const Button2=document.querySelector("#lire")
const themes = document.getElementsByName("theme");
const premierLabel = document.querySelector("label");
console.log(Note1);
console.log(Note2);
//console.log(Note1.length);
//  console.log(Note2.length);


Button1.addEventListener("click",function(){
    Array.from(Note2).forEach((note)=>{
        note.classList.toggle("bg-yellow-200");
    });
    
})

Button2.addEventListener("click" ,function(){
     themes.forEach((theme)=>{
        if(theme.checked){
          console.log(theme.value);
          
        }
     })

})

const nouvelleNote=document.createElement("p")
nouvelleNote.classList.add("note")
nouvelleNote.textContent="Note D"
// console.log(nouvelleNote);
document.body.insertBefore(nouvelleNote,premierLabel)
console.log(Note1.length);
console.log(Note2.length);