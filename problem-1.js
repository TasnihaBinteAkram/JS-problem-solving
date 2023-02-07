// ------------Problem-01---------------//
// This function takes a number as input and does some mathematical calculation to it.
// then returns the result as number.

function mindGame(number){
    if(typeof number !== "number"){
        return "Please enter a number";
    }

    const result= ((number*3+10)/2)-5;
    return result;
}


