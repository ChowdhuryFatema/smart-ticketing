// calculate Total and Grand total price 
function calculatePrice(elementId){
    const element = document.getElementById(elementId);
    const totalPrice = parseFloat(element.innerText) + 550;
    element.innerText = totalPrice;
}

// set inner text value
function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function clearInputValue(elementId){
    document.getElementById(elementId).value = '';
}
