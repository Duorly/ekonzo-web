<template>
    <div class="flex flex-col gap-y-4 items-center py-8  w-24 bg-gray-900">
        <button class="p-2 bg-opacity-20 rounded-xl bg-[#EB966A]">
            <Icon name="bxs-store" size="20"/>
        </button>

        <div class="flex flex-col gap-y-4 items-end self-end">
            <div v-for="menu in menus" :class="activeMenu === menu.name
                    ? 'bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top  after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
                    : ''
                ">
                <button class="p-4 my-4 mr-4 ml-3 rounded-xl" @click="activeMenu = menu.name" :class="activeMenu === menu.name
                        ? 'text-white shadow-primary bg-primary'
                        : 'text-primary'
                    ">
                    <Icon :name="menu.icon" size="20" class="fill-current"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeMenu = ref("Graph");

const menus = [
    { name: "Dashboard", icon: "bxs-store" },
    { name: "Discounts", icon: "bxs-home" },
    { name: "Graph", icon: "bxs-discount" },
    { name: "Messages", icon: "bxs-award" },
    { name: "Notifications", icon: "bxs-notification" },
    { name: "Settings", icon: "bxs-cog" },
    { name: "Logout", icon: "bxs-log-out" },
];
</script>