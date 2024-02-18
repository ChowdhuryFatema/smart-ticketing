// get inner text number 
function getInnerTextNumber(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNum = parseInt(elementText);
    return elementNum
}

// set inner text value
function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}