function update(input,model){
    const updateBillAmount = input["billAmount"];
    const updateBillTip = input["billTip"];

    return {
        billAmount: updateBillAmount,
        billTip: updateBillTip
    }
}

module.exports = {
    update
}