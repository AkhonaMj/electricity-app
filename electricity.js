function Electricity() {
var unitsAvailable = 0;


    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    let advance = false;

    function topUpElectricity(amount) {
        if(amount == 10){
             unitsAvailable +=7
        }
         if(amount == 20){
             unitsAvailable +=14
        }
         if(amount == 50){
             unitsAvailable +=35
        }   
         if(amount == "advance" && advance == false){
            unitsAvailable +=21
            advance = true
       }
        
    }

    function getUnitsAvailable() {   
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if(unitsAvailable < 7 && appliance == "Stove"){
            return false

        }

    
        
    }

    function advanceTaken() {
        if(advance == true){
            return advance
        }else{
            return false
        }
       
     
    }

    function totalAmountSpent() {
      
    }

    function totalUnitsBought(){

    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}