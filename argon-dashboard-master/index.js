

//section (01 - 99)
//phase = (1- 2)
// total consumption , payable amount
// var cusID;
// function unitsConsumed(){ //in KWh 

//     return (714 * .5 * Math.random());

// }
// function amountDue(){
//     var amountDue = unitPrice * Units 


var phase;
var unitPrice;
var consumerType;
var unitsConsumed;
var amountDue;
var dataMonth = new Array();
var hour = new Array();
var peakHour;
var peak_max;
var hourName = ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM","10 AM","12 PM","2 PM","4 PM","6 PM","8 PM","10 PM"] ;
// }
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function phasef() { 
     phase = 1;
    if(consumerType== 2 || consumerType==3){
        return 3;
    }
    min = Math.ceil(1);
    max = Math.floor(3);
    phase = Math.floor(Math.random() * (max - min + 1)) + min;
    if(phase == 2){
        phase = 3
    }
    return phase ;
} 

function unitPricef(){
    phase = phasef();
    
    if (phase == 1 ){
        unitPrice = 1;

    }
    else unitPrice = 1.25;
    return unitPrice;



}
function consumerTypef() { // consumer type 1. residential 2.commercial 3. industrial
    min = Math.ceil(1);
    max = Math.floor(3); 
    consumerType =  Math.floor(Math.random() * (max - min + 1)) + min;
    if (consumerType== 1){
        return "Residential"
    }else if (consumerType == 2){
        return "Commercial";
    }else return "Industrial";
}

function unitsConsumedf(){

    if (consumerType== 1){
        unitsConsumed=randomNumber(700,900);
    }
    else if (consumerType==2){
        unitsConsumed= randomNumber(800,1000);        
    }
    else unitsConsumed = randomNumber(1200,3000);
    return unitsConsumed;
}

function amountDuef(){
    amountDue = unitsConsumed * unitPrice;
    return amountDue;
}

function dataMonthf(){
    for (let i = 0; i < 11; i++) {
        dataMonth[i] = unitsConsumedf();

        
    }
    return dataMonth;
}
function dataHourf(){
    for (let i = 0; i < 12; i++) {
        hour[i] = randomNumber(4, 9);

        
    }
    // peakHour = Math.max(hour);
    return hour;
}

function peakHourf(){
    peak_max = hour[0];
    for (let index = 0; index < 12; index++) {
        if (peak_max < hour[index]){
            peak_max = hour[index];
        }
        
        
    }
    for (let index = 0; index < 12; index++) {
        if (peak_max == hour[index]){
            return hourName[index];
        }
        
        
    }
    
    
    
}