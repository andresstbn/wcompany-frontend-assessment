const LOCAL_STORAGE_KEY = 'assessment'

export const useMainStore = defineStore('main', () => {
    const selectedProduct = ref({} as Product)
    const creditCardInfo = ref({
        expirationDate: {
            month: '',
            year: ''
        },
        cardHolder: '',
        cardNumber: '',
        cvv: ''
    } as CreditCardInfo)

    const validationResult = computed(() => {
        if (creditCardInfo.value.cardNumber && creditCardInfo.value.cardNumber.length >= 13)
            return validateCreditCard(creditCardInfo.value.cardNumber)
        return null
    })

    return { selectedProduct, creditCardInfo, validationResult }
}, {
    persist: true
})