const validator = require('validator');
const validate = {
    validateString(strng) {
        return strng !== '' || 'Please enter a Correct value';
    },
    validateSalary(numbr) {
        if (validator.isDecimal(numbr)) return true;
        return 'Please enter a Correct value';
    },
    isSame(strng1, strng2) {
        if (strng1 === strng2) return true;
    },
};
module.exports = validate;