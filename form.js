
const form = document.querySelector("#form");
const completeState = document.querySelector(".success-container");

//to display the form data
const card_Number = document.querySelector(".cardnumber");
const card_Name = document.querySelector(".card-name");
const card_Year = document.querySelector(".card-exp__yy");
const card_Month = document.querySelector(".card-exp__mm");
const card_Cvc = document.querySelector(".card-cvc");

//the input fields
const cardholdername = document.querySelector("#cardholdername")
const number = document.querySelector("#cardNumber");
const month = document.querySelector("#mm");
const year = document.querySelector("#yy");
const cvc = document.querySelector("#cvc");
const btn_complete = document.querySelector("#btn_complete")



form.addEventListener("submit", (e) => {
    e.preventDefault();

    isFormValid = validateInputs();
    if(isFormValid){
        form.style.display ="none";
        completeState.style.display = "block";
    }
})


function validateInputs(){
    let isFormValid = true;
    const cardHolderNameValue = cardholdername.value.trim();
    const cardNumberValue = number.value.trim();
    const cardMonthValue = month.value.trim();
    const cardYearValue = year.value.trim();
    const cardCvcValue = cvc.value.trim();

    if(cardHolderNameValue.length === 0){
        setErrorFor(cardholdername, "Cardholder name cannot be empty.");
        isFormValid = false;
    } else if(!checkLetters(cardHolderNameValue)){
        setErrorFor(cardholdername, "Can only be letters.")
        isFormValid = false;
    }else{
        setSuccessFor(cardholdername);     
    }

    if(cardNumberValue.length < 16){
        setErrorFor(number, "Card number must be 16 digits.");
        isFormValid = false;
    } else if(!isNumeric(cardNumberValue)){
        setErrorFor(number, "Wrong format, numbers only")
        isFormValid = false;
    }else{
        setSuccessFor(number);
    }

    if(cardMonthValue.length < 2){
        setErrorFor(month, "Must be 2 digits.")
        isFormValid = false;
    } else if(!isNumeric(cardMonthValue)){
        setErrorFor(month, "Wrong format, numbers only")
        isFormValid = false;
    }else{
        setSuccessFor(month)  
    }

    if(cardYearValue.length < 2){
        setErrorFor(year, "Must be 2 digits.")
        isFormValid = false;
    } else if(!isNumeric(cardYearValue)){
        setErrorFor(year, "Wrong format, numbers only")
        isFormValid = false;
    }else{
        setSuccessFor(year)
    }

    if(cardCvcValue.length < 3){
        setErrorFor(cvc, "Must be 3 digits.")
        isFormValid = false;
    } else if(!isNumeric(cardCvcValue)){
        setErrorFor(cvc, "Wrong format, numbers only")
        isFormValid = false;
    }else{
        setSuccessFor(cvc)
    }
    
    return isFormValid;

}


const showCardHolderName = () => card_Name.textContent = cardholdername.value;
cardholdername.addEventListener("keyup", showCardHolderName, false)

const showCardNumber = () => card_Number.textContent = number.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();;
number.addEventListener("keyup",showCardNumber, false)

const showCardMonth = () => card_Month.textContent = month.value;
month.addEventListener("keyup", showCardMonth, false)

const showCardYear = () => card_Year.textContent = year.value;
year.addEventListener("keyup", showCardYear, false)

const showCardCvc= () => card_Cvc.textContent = cvc.value;
cvc.addEventListener("keyup", showCardCvc, false)


btn_complete.addEventListener("click", () => {
    form.style.display = "block";
    form.reset();
    completeState.style.display="none";
    window.location.reload();
})




//help from https://www.youtube.com/watch?v=rsd4FNGTRBw
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className ="form-group error"
}

//help from https://www.youtube.com/watch?v=rsd4FNGTRBw
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className ="form-group success";
}


//check if its a number
function isNumeric(value){
    return /^[0-9]+$/.test(value)
}

//check if only letters on cardholder name
function checkLetters(value) {
    return /^[a-zA-Z\s.,]+$/.test(value);
  }