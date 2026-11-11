const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];
const total = document.querySelector("#total");
const liste = document.querySelector("#liste");

console.log(courses[0]);
console.log(courses[courses.length - 1]);//dernier element
console.log(courses.length);

total.textContent=`${courses.length} articles`
    // for(let i=0 ; i<courses.length;i++){
    // const nouvelleList=document.createElement("li")
    // nouvelleList.textContent = `${courses[i]}`;
    // liste.appendChild(nouvelleList)
    // }

    courses.push("café")
courses.forEach((article,index) => {
    const nouvelleListe = document.createElement("li")
    nouvelleListe.textContent = `${index + 1} _ ${article}`
    liste.appendChild(nouvelleListe)
})

console.log(courses);


