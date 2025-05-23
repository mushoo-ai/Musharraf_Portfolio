var currencyone=100;
var currencytwo=0;
var exchangerate=1.2;
function convertcurrency(amount, rate){
    return amount*rate;
}
currencytwo=convertcurrency(currencyone, exchangerate);
console.log(currencytwo);