// ------------Problem-05---------------//
// the function takes 3 parameters. which are the quantity of gems three friends has.
// then with some calculation it returns the amount of diamond they can get from their gems.

function gemsToDiamond(gems1, gems2, gems3){
    if(typeof gems1 !== "number" || typeof gems2 !== "number" || typeof gems3 !== "number"){
        return "Please enter a number";
    }
    const gemsPower1 = 21;
    const gemsPower2 = 32;
    const gemsPower3 = 43;
    let totalDiamond = gems1 * gemsPower1 + gems2 * gemsPower2 + gems3 * gemsPower3;
    if (totalDiamond > 1000*2){
        totalDiamond -= 2000;
        return totalDiamond;
    }
    else {
        return totalDiamond
    }
}