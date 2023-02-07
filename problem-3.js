// ------------Problem-03---------------//
// the function takes a number as input then takes a difference with seven.
// it it's lesser than seven it returns the difference else it will twice the given number.

function isLGSeven(number){
    if(typeof number !== "number"){
        return "Please enter a number";
    }
    const difference= number - 7;
    if (difference < 7){
        return difference;
    }
    else{
        return number*2;
    }
}