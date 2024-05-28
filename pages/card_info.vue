<template>
    <h4>Proceed to payment</h4>
    <UCard class="max-w-xl mx-auto">    
        <div class="flex md:flex-row items-center flex-col gap-3 justify-between my-2">
            <div>
                Product: {{ mainStore.selectedProduct.title }}<br/>
                Price: {{ formatCOP(mainStore.selectedProduct.price) }}
            </div>
            <div class="border">
                <img :src="mainStore.selectedProduct.image" class="w-32 h-32 object-contain"/>
            </div>
        </div>
        <UButton block @click="showModal = true">
            Pay with credit card
        </UButton>
    </UCard>
<CreditCardModal v-model:show="showModal" v-model="mainStore.creditCardInfo" />
</template>

<script setup lang="ts">

const mainStore = useMainStore()
const showModal = ref(false)
</script>