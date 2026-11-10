const P1= document.getElementById("p1")
const P2= document.getElementById("p2")
const P3= document.getElementById("p3")
 
//function calculerTTC(prixHT){
//const prixTTC=prixHT*1.2 ;
//return prixTTC;
//}
//console.log(calculerTTC(100))

const calculerTTC = (prixHT) => {
    const prixTTC=prixHT*1.2 ;
    return prixTTC;
};
console.log(calculerTTC(100))

function afficherPrix(selector,prixHT){
    const element = document.querySelector(selector)
    const TTC =calculerTTC(prixHT);
    element.textContent=`HT : ${prixHT} DH · TTC : ${TTC} DH`
    
}
afficherPrix("#p1",100)
afficherPrix("#p2",45)
afficherPrix("#p3",320)

