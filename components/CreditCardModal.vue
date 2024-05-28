<template>
    <UModal v-model="show">
        <UCard>
            <BoxFormGroup label="Cardholder" class="my-4">
                <UInput variant="none" v-model="creditCardInfo.cardHolder" />
            </BoxFormGroup>
            <div class="flex flex-row gap-2">

                <BoxFormGroup label="Card number" class="grow">
                    <UInput  data-testid="card-number-input" variant="none" v-model="creditCardInfo.cardNumber" />
                </BoxFormGroup>
                <div v-if="creditCardInfo.cardNumber?.length >= 13">
                    <UIcon data-testid="issuer-icon" name="i-ri-visa-line" class="text-5xl" v-if="validationResult?.cardType == 'Visa'"></UIcon>
                    <UIcon data-testid="issuer-icon" name="i-ri-mastercard-fill" class="text-5xl"
                        v-else-if="validationResult?.cardType == 'Mastercard'"></UIcon>
                    <UIcon data-testid="issuer-icon" name="i-ri-error-warning-fill" class="text-5xl" v-else></UIcon>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <BoxFormGroup label="Expiration date" class="my-4">
                    <UInput variant="none" v-model="creditCardInfo.expirationDate" />
                </BoxFormGroup>
                <BoxFormGroup label="CVV" class="my-4">
                    <UInput variant="none" v-model="creditCardInfo.cvv" />
                </BoxFormGroup>
            </div>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">

const show = defineModel<boolean>("show", { default: false })
const creditCardInfo = defineModel<CreditCardInfo>({ required: true })


const validationResult = computed(() => {
    if (creditCardInfo.value.cardNumber && creditCardInfo.value.cardNumber.length >= 13)
        return validateCreditCard(creditCardInfo.value.cardNumber)
    return null
})
</script>

<style scoped></style>