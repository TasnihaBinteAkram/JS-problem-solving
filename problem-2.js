// ------------Problem-02---------------//
// This function takes a string as input and calculates if it's length is even or odd.

function evenOdd(inputString){
    if (typeof inputString != "string"){
        return "Please enter a string variable";
    }
    const size= inputString.length
    if (size % 2 == 0){
        return "even";
    }
    else if (size % 2 == 1){
        return "odd";
    }
}

