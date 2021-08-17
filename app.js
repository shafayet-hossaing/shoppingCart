function updateProductInput(product,price,isIncrease) {
    const productInput = document.getElementById(product+"Input")
    let productInputAmount = productInput.value

    if(isIncrease){
        productInputAmount = parseInt(productInputAmount) + 1
    }else if(productInputAmount > 0){
        productInputAmount = parseInt(productInputAmount) - 1
    }
    productInput.value = productInputAmount


    const productTotal = document.getElementById(product+"Total")
    productTotal.innerText = productInputAmount * price

    // getTotalCostOfProduct function calling
    getTotalCostOfProduct()
}


function getInputValue (product){
    const productInput = document.getElementById(product+"Input")
    const productInputValue = productInput.value
    return productInputValue
}

function getTotalCostOfProduct(){
    const phoneTotal = getInputValue("mobile") * 1219
    const caseTotal = getInputValue("case") * 59
    const subTotal = phoneTotal + caseTotal
    const tax = subTotal / 10
    const total = subTotal + tax
    // Updating subTotal
    document.getElementById("subTotal").innerText = subTotal
    document.getElementById("taxTotal").innerText = tax
    document.getElementById("totalTotal").innerText = total

}





// phone handling
document.getElementById("phoneBtnPlus").addEventListener("click", function(){
    updateProductInput("mobile",1219,true)
})
document.getElementById("phoneBtnMinus").addEventListener("click", function(){
    updateProductInput("mobile",1219,false)
})




// case handling
document.getElementById("caseBtnPlus").addEventListener("click", function(){
    updateProductInput("case",59,true)
})
document.getElementById("caseBtnMinus").addEventListener("click", function(){
    updateProductInput("case",59,false)
})