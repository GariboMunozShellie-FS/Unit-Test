const validateCardNumber = (number) => {
    let regexp = /(^[0-9]{12,16})$/;
    if (regexp.test(number)) {
        return true;
    } else {
        return "Enter a valid Credit card";
    }
}

module.exports = validateCardNumber