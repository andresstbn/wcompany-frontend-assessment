<template>
    <UFormGroup :ui="config">
        <slot />
    </UFormGroup>
</template>

<script setup lang="ts">
const config = {
    wrapper: "border border-2 border-gray rounded-md p-2 relative my-1", // Acá
    label: {
        wrapper:
            "flex content-center items-center justify-between -top-5 relative -left-1",
        base: "block font-medium text-gray-700 dark:text-gray-200 rounded-full bg-gray-200 px-2",
    },
    container: "-mt-4 relative bg-white rounded-md",
};
</script>