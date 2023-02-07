// ------------Problem-04---------------//
// this function detects bad data i.e negative data from an array.
// then returns the quantity of bad data available in the array.

function findingBadData(data){
    if (!(Array.isArray(data))){    
    return "Please enter an array as input";
    }
    badData=[];
    for (i of data){
        if (i < 0){
            badData.push(i)
        }
    }
    return badData.length
}

