<template>
    <UModal v-model="show">
        <UCard>
            <template #header>
                <h4 class="font-bold">Credit card information</h4>
            </template>
            <div class="flex gap-3">
                <div class="grow">
                    We accept Visa and Mastercard
                </div>
                <div class="border rounded bg-gray-100 px-3 pt-[3px]">
                    <UIcon name="i-ri-visa-line" class="text-2xl"></UIcon>
                </div>
                <div class="border rounded bg-gray-100 px-3 pt-[3px]">

                    <UIcon name="i-ri-mastercard-fill" class="text-2xl"></UIcon>
                </div>

            </div>
            <BoxFormGroup label="Cardholder" class="my-4">
                <UInput variant="none" v-model="creditCardInfo.cardHolder" />
            </BoxFormGroup>
            <div class="flex flex-row gap-2">
                <BoxFormGroup label="Card number" class="grow">
                    <UInput data-testid="card-number-input" variant="none" v-model="creditCardInfo.cardNumber" />
                </BoxFormGroup>
                <div v-if="creditCardInfo.cardNumber?.length >= 13">
                    <UIcon data-testid="issuer-icon" name="i-ri-visa-line" class="text-5xl"
                        v-if="validation?.cardType == 'Visa'">
                    </UIcon>
                    <UIcon data-testid="issuer-icon" name="i-ri-mastercard-fill" class="text-5xl"
                        v-else-if="validation?.cardType == 'Mastercard'"></UIcon>
                    <UIcon data-testid="issuer-icon" name="i-ri-error-warning-fill" class="text-5xl" v-else></UIcon>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <BoxFormGroup label="Expiration month" class="my-4">
                    <UInput variant="none" v-model="creditCardInfo.expirationDate.month" max="12" min="1"
                        type="number" />
                </BoxFormGroup>
                <BoxFormGroup label="Expiration year" class="my-4">
                    <UInput variant="none" v-model="creditCardInfo.expirationDate.year" type="number" />
                </BoxFormGroup>
                <BoxFormGroup label="CVV" class="my-4">
                    <UInput variant="none" v-model="creditCardInfo.cvv" />
                </BoxFormGroup>
            </div>
            <UButton block class="mt-4" @click="show = false; $emit('proceedPayment')">
                Pay now {{ formatCOP(mainStore.selectedProduct.price) }}
            </UButton>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">

const show = defineModel<boolean>("show", { default: false })
const creditCardInfo = defineModel<CreditCardInfo>({ required: true })
const mainStore = useMainStore()
const emit = defineEmits(['proceedPayment'])

const validation = computed(() => {
    if (creditCardInfo.value.cardNumber && creditCardInfo.value.cardNumber.length >= 13)
        return validateCreditCard(creditCardInfo.value.cardNumber)
    return null
})

</script>

<style scoped></style>