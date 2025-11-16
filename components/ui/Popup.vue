<template>
    <Teleport to="body">
        <Transition name="popup">
            <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                @click.self="close">
                <div class="relative bg-secondary-800 rounded-lg max-w-2xl w-full mx-2 md:mx-4 overflow-hidden">
                    <button @click="close"
                        class="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center text-white hover:text-primary-500 transition-colors z-10">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="relative bg-secondary-800">
                        <!-- Title and Subtitle at the top -->
                        <div class="p-4 md:p-6 pt-6 md:pt-8 pb-2">
                            <h3 class="text-center mb-2" style="
                                font-family: 'Inter', sans-serif;
                                font-weight: 700;
                                font-size: clamp(28px, 4vw, 48px);
                                line-height: 100%;
                                background: linear-gradient(90deg, #FFFFFF 0%, #FFE8AB 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                            ">{{ title }}</h3>
                            <p class="text-center" style="
                                font-family: 'Inter', sans-serif;
                                font-weight: 300;
                                font-size: clamp(18px, 2.5vw, 32px);
                                line-height: 24px;
                                color: #FFFFFF;
                            ">{{ subtitle }}</p>
                        </div>

                        <!-- Image popup in the middle -->
                        <div v-if="image" class="relative h-64 md:h-80 lg:h-96 bg-cover bg-center"
                            :style="{ backgroundImage: `url(${image})` }">
                            <div class="absolute inset-0 bg-gradient-to-t from-secondary-800/50 to-transparent"></div>
                        </div>

                        <!-- Button at the bottom -->
                        <div class="p-4 md:p-6 pb-6 md:pb-8 flex justify-center">
                            <Button customClass="text-neutral-900 italic text-xs px-3 py-1.5" variant="primary"
                                size="large" text="SEE MORE" @click="handleSeeMore" />
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
interface Props {
    isOpen: boolean
    title: string
    subtitle: string
    image?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
    'update:isOpen': [value: boolean]
    'see-more': []
}>()

const close = () => {
    emit('update:isOpen', false)
}

const handleSeeMore = () => {
    emit('see-more')
    close()
}
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
    transition: opacity 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
    opacity: 0;
}
</style>