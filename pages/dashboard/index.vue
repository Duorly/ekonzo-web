<template>
    <div class="flex w-full">
        <div class="flex flex-col flex-1 gap-6 p-4">
            <StatsCard />
            <OrderReport />
        </div>
        <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">
            <MostOrdered />
            <MostTypeOfOrder />
        </aside>
        
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "dashboard",
});
</script>