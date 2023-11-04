<script setup lang="ts">
import { computed } from 'vue';

interface buttonAttributes {
    href?: string | null
    type?: 'submit' | 'button' | 'reset'
    size?: string
    variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
    icon?: boolean
    round?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
    isUppercase?: boolean
    textSize?: 'xs' | 'sm' | 'md' | 'base' | 'lg'
    loading?: boolean
    notBackground?: boolean
}

const props = withDefaults(defineProps<buttonAttributes>(), ({
    size: 'md',
    type: 'button',
    isUppercase: true,
    textSize: 'xs',
    loading: false,
    round: 'xl',
    href: null,
}))

const sizeClasses = computed(() => {
    const isIcon = props.icon

    const sizeMappings = {
        sm: `h-9 text-sm ${isIcon ? 'px-3 ' : 'px-4'}`,
        md: `h-10 ${isIcon ? 'px-3.5' : 'px-6'}`,
        lg: `text-lg  h-11 ${isIcon ? 'px-3' : 'px-12'}`,
    }

    return sizeMappings[props.size as keyof typeof sizeMappings] || sizeMappings.md
})

const variantClasses = computed(() => {
    switch (props.variant) {
        case 'primary':
            return props.notBackground ? 'text-blue-600 hover:text-blue-600 bg-none ' : 'bg-blue-500 hover:bg-blue-600 text-white'
        case 'secondary':
            return props.notBackground ? 'text-gray-600 hover:text-gray-600 bg-none ' : 'bg-gray-500 hover:bg-gray-600 text-white'
        case 'success':
            return props.notBackground ? 'text-green-600 hover:text-green-600 bg-none ' : 'bg-green-500 hover:bg-green-600 text-white'
        case 'danger':
            return props.notBackground ? 'text-red-600 hover:text-red-600 bg-none ' : 'bg-red-500 hover:bg-red-600 text-white'
        case 'warning':
            return props.notBackground ? 'text-yellow-600 hover:text-yellow-600 bg-none ' : 'bg-yellow-500 hover:bg-yellow-600 text-white'
        case 'info':
            return props.notBackground ? 'text-cyan-600 hover:text-cyan-600 bg-none ' : 'bg-cyan-500 hover:bg-cyan-600 text-white'
        default:
            return 'bg-[#023f73] hover:bg-[#035a9c]'
    }
})

const btnClasses = computed(() => {
    const borderRadiusClasses = props.round ? `rounded-${props.round}` : 'rounded-sm'

    const textClasses = props.isUppercase ? 'uppercase' : ''

    const size = `text-${props.textSize}`

    return `${variantClasses.value} ${sizeClasses.value} ${borderRadiusClasses} ${textClasses} ${size}`
})

const buttonType = computed(() => {
    return props.href ? 'a' : 'button'
})
</script>

<template>
    <button :type="type" :class="btnClasses"
        class="font-bold  transition-all border-0 cursor-pointer hover:-translate-y-px active:opacity-85 ease-in disabled:bg-gray-400 disabled:hover:bg-gray-700 disabled:cursor-default">
        <span v-if="!loading">
            <slot />
        </span>

        <span v-else class="flex items-center gap-x-3">
            <Icon name="svg-spinners:3-dots-scale" size="20" />
        </span>
    </button>
</template>