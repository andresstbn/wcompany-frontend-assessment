const LOCAL_STORAGE_KEY = 'ac_'

export const useMainStore = defineStore('main', () => {
    const selectedProduct = ref({} as Product)
    const creditCardInfo = ref({} as CreditCardInfo)

    if (process.client)
        selectedProduct.value = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}')

    watch(selectedProduct, () => {
        if (process.client)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(selectedProduct.value))
    })

    return { selectedProduct, creditCardInfo }
})