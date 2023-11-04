<template>
    <header class="gap-6 p-4">
        <h1 class="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
        <div class="text-gray-200 capitalize">{{ formatDate }}</div>
    </header>
</template>

<script setup lang="ts">
const today = new Date();

const formatDate = today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' });
</script>

<style scoped></style>