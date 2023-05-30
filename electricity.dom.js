// DOM element(s) references
const buyBtn = document.querySelector(".topupNow");
const unitsAvail = document.querySelector(".unitsAvailable");
const unitsTotal = document.querySelector(".totalUnits");
const totalAmount = document.querySelector(".totalAmount");
const useBtn = document.querySelector(".useNow");


// Factory Function instance
const electricity =  Electricity();
//Function to check the radio button selected
function selectTopUp(){
    const topUpBtn = document.querySelector(
        "input[name='buyElectricity']:checked"
      );
    
    
        var topUp = topUpBtn.value;


    if (topUp == "10") {
       electricity.topUpElectricity()
      }
      if (topUp == "20") {
        electricity.topUpElectricity()
       }
       if (topUp == "50") {
        electricity.topUpElectricity()
       }
       if (topUp == "advance") {
        electricity.topUpElectricity()
       }
}



// DOM events here 


// add click even to the by button
buyBtn.addEventListener("click", function(){
    electricity.topUpElectricity()
    totalAmount.innerHTML = electricity.topUpElectricity();
    unitsTotal.innerHTML = electricity.topUpElectricity();
    unitsAvail.innerHTML = electricity.topUpElectricity();


})