<template>
    <div class="flex w-full min-h-screen font-sans bg-gray-800">
        <NavigationSidebar />
        <main class="w-full">
            <NavigationHeader />
            <hr class="border-gray-700" />
            <slot />
        </main>
    </div>
</template>