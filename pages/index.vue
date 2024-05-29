<template>
    <h5 class="font-bold text-lg mt-8 mb-4">Fantástico ecommerce de prueba</h5>
    <UProgress v-if="pending" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" @select-product="selectProduct(product)"/>
    </div>
</template>

<script setup lang="ts">
const mainStore = useMainStore()
const router = useRouter()

const PRODUCTS_API_URL = "https://fakestoreapi.com/products"

const { data: products, pending } = useFetch<Product[]>(PRODUCTS_API_URL)


const selectProduct = (product: Product) => {
    mainStore.selectedProduct = product
    router.push('/summary')
}

</script>
