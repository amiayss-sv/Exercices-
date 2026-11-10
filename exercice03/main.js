const stock = 2;
const badge =document.querySelector("#badge")

if(stock > 3) {
    badge.textContent="Disponible "
    badge.classList.add("bg-green-200")
    }

    else if (stock>=1 && stock<=3){
      badge.textContent="Presque épuisé "
      badge.classList.add("bg-yellow-200")
    }

else {
    badge.textContent="Rupture"
    badge.classList.add("bg-red-200")
}
