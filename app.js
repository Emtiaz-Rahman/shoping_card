function updateIphoneNumber(isIncresing) {
    const iPhoneInput = document.getElementById('iPhone_number');
    const iPhoneNumber = iPhoneInput.value;
    if (isIncresing) {
        iPhoneInput.value = parseInt(iPhoneNumber) + 1;
    }
    else {
        iPhoneInput.value = parseInt(iPhoneNumber) - 1;
    }


}


document.getElementById('iPhone_plus').addEventListener('click', function () {
    updateIphoneNumber(true);

})

document.getElementById('iPhone_minus').addEventListener('click', function () {
    updateIphoneNumber(false);

})
