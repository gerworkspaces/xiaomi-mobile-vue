<template>
    <button :class="[
        'font-black transition-all duration-200 text-[16px] leading-[24px]',
        sizeClasses,
        variantClasses,
        props.disabled && disabledClasses,
        !props.disabled && hoverClasses,
        props.customClass
    ]" :disabled="props.disabled" @click="handleClick">
        <slot>{{ props.text }}</slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    variant?: 'primary' | 'secondary'
    size?: 'large' | 'small'
    disabled?: boolean
    text?: string
    customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'large',
    disabled: false,
    customClass: '',
})

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

const sizeClasses = computed(() => {
    return props.size === 'large'
        ? 'px-6 py-3 text-base'
        : 'px-4 py-2 text-sm'
})

const variantClasses = computed(() => {
    if (props.variant === 'primary') {
        // Primary: background #FFC700, text #1F1F1F
        return 'bg-primary-500 text-neutral-900 rounded-full'
    } else {
        // Secondary: border 1px, radius 100px, border #FFC700, transparent background
        return 'bg-transparent border border-primary-500 rounded-full text-neutral-200'
    }
})

const disabledClasses = computed(() => {
    if (props.variant === 'primary') {
        // Primary disabled: opacity 50%, background #FFC700, text #1F1F1F
        return 'opacity-50 cursor-not-allowed bg-primary-500 text-neutral-900'
    } else {
        // Secondary disabled: border 1px, radius 100px, border #FFC700, opacity 50%
        return 'opacity-50 cursor-not-allowed border-primary-500'

    }
})

const hoverClasses = computed(() => {
    if (props.variant === 'primary') {
        // Primary hover: background #C79B12, text #1F1F1F
        return 'hover:bg-primary-600 hover:text-neutral-900'
    } else {
        // Secondary hover: border 1px, radius 100px, border #FFE8AB
        return 'hover:border-primary-200'
    }
})

const handleClick = (event: MouseEvent) => {
    if (!props.disabled) {
        emit('click', event)
    }
}
</script>