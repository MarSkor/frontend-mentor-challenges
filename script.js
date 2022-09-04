
//DOM
const tips = document.querySelectorAll(".tip");
const customInputTips = document.querySelector(".btn-custom");

const billInput = document.querySelector(".bill");
const peopleInput = document.querySelector(".numberofpeople");

const tipPerPerson = document.querySelector(".tipPerPerson");
const totalValue = document.querySelector(".total-value");

const resetBtn = document.querySelector(".btn-reset");
const errorMsg = document.querySelector(".error")



//EVENT LISTENERS
billInput.addEventListener("input", handleBillInput);
peopleInput.addEventListener("input", handlePeopleInput);
customInputTips.addEventListener("input", handleCustomTip);
resetBtn.addEventListener("click", resetTipCalculator);
tips.forEach(function(val){
    val.addEventListener("click", handleClick)
});


//VARIABLES ETC.
let tipValue = 0.15;
let billValue = 0;
let peopleValue = 1;

tipPerPerson.innerHTML="$" + (0.0).toFixed(2);
totalValue.innerHTML="$" + (0.0).toFixed(2);



//FUNCTIONS
function handleBillInput(){
    billValue = parseFloat(billInput.value);
    if(billValue !== 0){
        resetBtn.disabled = false;
    }
    calculateTotalAmount()
    // console.log(billValue)
}

function handlePeopleInput(){
    peopleValue = parseFloat(peopleInput.value)
    // console.log(peopleValue)

    if(peopleValue < 1 || peopleValue.length === ""){
        errorMsg.style.display ="inline-block";
        peopleInput.style.border="2px solid red"
        // console.log(errorMsg)
    }else{
        errorMsg.style.display="none";
        peopleInput.style.border="none"
        calculateTotalAmount()
    }
}

function handleCustomTip(){
     tipValue = parseFloat(customInputTips.value / 100)
     tips.forEach(function(val){
         val.classList.remove("active-button");
    })
    calculateTotalAmount();
}


function handleClick(e){
    tips.forEach(function(val){
        val.classList.remove("active-button");
        if(e.target.innerHTML == val.innerHTML){
            val.classList.add("active-button");
            tipValue = parseFloat(val.innerHTML)/100
            // console.log(val)
        }
    });
    calculateTotalAmount()
}


// help from https://www.youtube.com/watch?v=etYv-pPfol4 and 
// https://github.com/juliponti/tip-calculator-app/blob/master/main.js
function calculateTotalAmount(){
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let totalAmount = (billValue * tipAmount) / peopleValue;
        tipPerPerson.innerHTML="$" + tipAmount.toFixed(2);
        totalValue.innerHTML="$" + totalAmount.toFixed(2);
    }
}


//RESETS ALL VALUES
function resetTipCalculator(){
    billInput.value = "0";
    handleBillInput();
    peopleInput.value ="1";
    handlePeopleInput();
    customInputTips.value="";
    resetBtn.disabled = true;
}