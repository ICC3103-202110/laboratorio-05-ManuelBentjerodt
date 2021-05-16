//we return the changes maked by the user with the input, rembember input its the inputForm function in ./view
//so we have to access of the element of each dictionary
function update(input,model){
    return {
        billAmount: input["billAmount"],
        tip: input["percentage"],
        percentage: input["billAmount"]*input["percentage"]/100,
        total: (input["billAmount"]*(1+input["percentage"]/100)).toFixed(3) //toFixed(3) we round to the third decimal, for some cases
    }
}

module.exports = {
    update
}