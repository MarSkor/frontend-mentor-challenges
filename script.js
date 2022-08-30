const adviceContainer = document.querySelector(".card__content");
const adviceNumber = document.querySelector(".card__top");
const btn = document.querySelector(".btn")

const url = "https://api.adviceslip.com/advice";


btn.addEventListener("click", fetchData);

async function fetchData(){

    try{
        const res = await fetch(url);
        const json = await res.json();
        console.log(json)

        adviceContainer.innerHTML= `<h1>${json.slip.advice}</h1>`
        adviceNumber.innerHTML= `Advice #${json.slip.id}`
       

    }catch(error){
       throw new Error("An error occured.")
    }
};

window.onload = fetchData();

