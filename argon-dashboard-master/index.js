

//section (01 - 99)
//phase = (1- 2)
// total consumption , payable amount
// var cusID;
// function unitsConsumed(){ //in KWh 

//     return (714 * .5 * Math.random());

// }
// function amountDue(){
//     var amountDue = unitPrice * Units 



// }
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function phase() { 
    var phase = 1;
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

function unitPrice(){
    if (phase==1){
        uniPrice = 1;

    }
    else unitPrice = 1.25;
    return unitPrice;



}
function consumerType() { // consumer type 1. residential 2.commercial 3. industrial
    min = Math.ceil(1);
    max = Math.floor(3); 
    var consumerType =  Math.floor(Math.random() * (max - min + 1)) + min;
    if (consumerType== 1){
        return "Residential"
    }else if (consumerType == 2){
        return "Commercial";
    }else return "Industrial";
}

function unitsConsumed(){

    if (consumerType== 1){
        var unitsConsumed=randomNumber(700,900);
    }
    else if (consumerType==2){
        var unitsConsumed= randomNumber(800,1000);        
    }
    else unitsConsumed = randomNumber(1200,3000);
    return unitsConsumed;
}

function amountDue(){
    amountDue = unitsConsumed * unitsConsumed;
    return amountDue;
}

