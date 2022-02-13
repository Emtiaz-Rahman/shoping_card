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
