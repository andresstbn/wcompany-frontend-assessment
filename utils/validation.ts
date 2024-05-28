
export const validateCreditCard = (cardNumber: string) => {
    const sanitizedNumber = cardNumber.replace(/[\s-]/g, '');
    const visaRegex = /^4(\d{12}|\d{15})$/;
    const masterCardRegex = /^(5[1-5]\d{14}|2(2[2-9]\d{2}|[3-6]\d{3}|7[0-1]\d{2}|720)\d{12})$/;

    
    let cardType = null;
    if (visaRegex.test(sanitizedNumber)) {
        cardType = 'Visa';
    } else if (masterCardRegex.test(sanitizedNumber)) {
        cardType = 'Mastercard';
    } else {
        return {
            valid: false,
            cardType: null,
            message: 'Número de tarjeta no válido para Visa o Mastercard.'
        };
    }

    const isValid = luhnCheck(sanitizedNumber);

    return {
        valid: isValid,
        cardType: cardType,
    };
}
