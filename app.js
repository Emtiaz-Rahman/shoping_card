function updateIphoneNumber(isIncresing) {
    const iPhoneInput = document.getElementById('iPhone_number');
    let iPhoneNumber = iPhoneInput.value;
    if (isIncresing) {
        iPhoneNumber = parseInt(iPhoneNumber) + 1;
    }
    else if (iPhoneNumber > 0) {
        iPhoneNumber = parseInt(iPhoneNumber) - 1;
    }
    iPhoneInput.value = iPhoneNumber;
    const priceTotal = document.getElementById('price_total');
    priceTotal.innerText = iPhoneNumber * 1219;
}
document.getElementById('iPhone_plus').addEventListener('click', function () {
    updateIphoneNumber(true);
})
document.getElementById('iPhone_minus').addEventListener('click', function () {
    updateIphoneNumber(false);
})
//    ========================iPhone Part complete


function updateCaseNumber(isIncresing) {
    const caseInput = document.getElementById('case_number');
    let caseNumber = caseInput.value;
    if (isIncresing) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const casePriceTotal = document.getElementById('casePrice_total');
    casePriceTotal.innerText = caseNumber * 59;
}
document.getElementById('case_plus').addEventListener('click', function () {

    updateCaseNumber(true);
})
document.getElementById('case_minus').addEventListener('click', function () {
    updateCaseNumber(false);

})



