<template>
    <div class="max-w-xl mx-auto mt-8">
        <h4 class="font-bold text-xl">Order summary</h4>
        <h5 class="font-bold">Products: </h5>
        <UButton block @click="$router.push('/card_info')" icon="i-heroicons-credit-card-20-solid" class="my-4">
            Proceed to payment
        </UButton>
    </div>
    <UCard class="max-w-xl mx-auto mt-8">
        <div class="flex items-center flex-col gap-3 justify-between my-2">
            <div>
                <span class="font-light italic">Product: </span>
                <span class="font-semibold">{{ mainStore.selectedProduct.title }}</span><br />
                <span class="font-light italic">Price: </span>
                <span class="font-semibold">{{ formatCOP(mainStore.selectedProduct.price) }}</span>
                <p>
                    <span class="font-light italic">Description: </span><br/>
                    <span>{{ mainStore.selectedProduct.description }}</span>
                </p>
            </div>
            <div class="border">
                <img :src="mainStore.selectedProduct.image" class="w-60 h-60 object-contain" />
            </div>
        </div>
        
    </UCard>
</template>

<script setup lang="ts">

const mainStore = useMainStore()
</script>