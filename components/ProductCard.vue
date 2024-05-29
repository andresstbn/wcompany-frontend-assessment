<template>
    <div class="border rounded-md hover:border-2 p-4">
        <h3 class="font-bold h-12" data-testid="product-title">{{ product.title }}</h3>
        <UDivider></UDivider>
        <div class="h-96">
            <img data-testid="product-image" :src="product.image" class="object-contain h-full mx-auto"/>
        </div>
        <p data-testid="product-price">{{ formatCOP(product.price) }}</p>
        <UButton  @click="$emit('selectProduct')" block data-testid="buy-button" icon="i-heroicons-arrow-right-circle-16-solid">
            Buy now 
        </UButton>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    product: Product
}>()

const emit = defineEmits(['selectProduct'])



</script>

<style scoped></style>