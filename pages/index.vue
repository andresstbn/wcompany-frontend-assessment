<template>
    <h5 class="font-bold text-lg my-2">Fantástico ecommerce de prueba</h5>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<script setup lang="ts">

const PRODUCTS_API_URL = "https://fakestoreapi.com/products"

const { data: products } = useFetch<Product[]>(PRODUCTS_API_URL)

</script>
