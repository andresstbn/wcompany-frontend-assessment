<template>
    <div class="border rounded-md hover:border-2 p-4">
        <h3 class="font-bold h-12" data-testid="product-title">{{ product.title }}</h3>
        <UDivider></UDivider>
        <div class="h-96">
            <img data-testid="product-image" :src="product.image" class="object-contain h-full mx-auto"/>
        </div>
        <p data-testid="product-price">{{ formatCOP(product.price) }}</p>
        <UButton  @click="selectProduct" data-testid="buy-button">
            Buy
        </UButton>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    product: Product
}>()


const mainStore = useMainStore()
const router = useRouter()

const selectProduct = () => {
    mainStore.selectedProduct = props.product
    router.push('/card_info')
}

</script>

<style scoped></style>