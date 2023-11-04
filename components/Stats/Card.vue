<template>
    <div class="flex gap-6">
        <div v-for="stat in stats" class="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
            <div class="flex items-center gap-x-3">
                <div class="p-2 bg-gray-800 rounded-lg">
                    <Icon :name="stat.icon" class="text-blue-300" size="20"/>
                </div>
                <span class="text-xs font-medium" :class="stat.status === 'up' ? 'text-[#50D1AA]' : 'text-[#FF7CA3]'">
                    {{ stat.percentage }}
                </span>
                <div class="p-0.5 rounded-full" :class="stat.status === 'up' ? 'bg-[#50D1AA]/20' : 'bg-[#FF7CA3]/20'">
                    <Icon size="20" v-if="stat.status === 'up'" name="heroicons:arrow-small-up"
                        class="fill-current text-[#50D1AA]" />
                    <Icon size="20" v-else name="heroicons:arrow-small-down" class="fill-current text-[#FF7CA3]" />
                </div>
            </div>
            <div class="text-3xl font-semibold text-white">{{ stat.value }}</div>
            <div class="text-sm tracking-wide text-gray-500">{{ stat.title }}</div>
        </div>
    </div>
</template>

<script setup>
const stats = [
    {
        title: "Total Revenue",
        percentage: "+32.40%",
        value: "$10,243.00",
        status: "up",
        icon: "ph:coins",
    },
    {
        title: "Total Dish Ordered",
        percentage: "-12.40%",
        value: "23,456",
        status: "down",
        icon: "material-symbols:book",
    },
    {
        title: "Total Customer",
        percentage: "+2.40%",
        value: "1,234",
        status: "up",
        icon: "material-symbols:account-circle-full",
    },
];
</script>