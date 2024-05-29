<template>
    <UCard class="max-w-xl mx-auto mt-8">
        <h4 class="font-bold">Proceed to payment</h4>

        <div class="flex md:flex-row items-center flex-col gap-3 justify-between my-2">
            <div>
                <span class="font-light italic">Product: </span>
                <span class="font-semibold">{{ mainStore.selectedProduct.title }}</span><br />
                <span class="font-light italic">Price: </span>
            </div>
            <div class="border">
                <img :src="mainStore.selectedProduct.image" class="w-32 h-32 object-contain" />
            </div>

        </div>
        <h4 class="text-lg font-semibold">TOTAL: {{ formatCOP(mainStore.selectedProduct.price) }}</h4>
        <UButton block @click="showModal = true" icon="i-heroicons-credit-card-20-solid">
            Pay with credit card
        </UButton>
    </UCard>
    <CreditCardModal v-model:show="showModal" v-model="mainStore.creditCardInfo" @proceed-payment="proceedPayment" />
</template>

<script setup lang="ts">
const mainStore = useMainStore()
const showModal = ref(false)
const toast = useToast()
const router = useRouter()

const validatePayment = () => {
    return mainStore.creditCardInfo.cardHolder.length > 0 &&
        mainStore.creditCardInfo.cardNumber.length >= 13 &&
        mainStore.creditCardInfo.expirationDate.month.toString().length > 0 &&
        mainStore.creditCardInfo.expirationDate.year.toString().length > 0 &&
        mainStore.creditCardInfo.cvv.length === 3 &&
        mainStore.validationResult && mainStore.validationResult.valid
}

const proceedPayment = () => {
    const isValid = validatePayment()
    if (!isValid) {
        mainStore.creditCardInfo.validated = false
        toast.add({ title: "Invalid payment information" })
    }
    else {
        mainStore.creditCardInfo.validated = true
        toast.add({ title: "Payment successful" })
    }
    router.push('/final')
}
</script>