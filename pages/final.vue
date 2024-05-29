<template>
    <div class="max-w-xl mx-auto mt-8 " v-if="mainStore.creditCardInfo.validated">
        <h3 class="font-bold text-xl text-green-500" >Thank you for your purchase</h3>
        <h5 class="font-bold">Products: {{ mainStore.selectedProduct.title }}</h5>
    </div>
    <div class="max-w-xl mx-auto mt-8" v-else>
        <h3 class="font-bold text-xl text-red-500" >Invalid payment information</h3>
        <h5 class="font-bold">Please go back and try again</h5>
    </div>
</template>

<script setup lang="ts">
const mainStore = useMainStore()
</script>