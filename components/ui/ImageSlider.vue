<template>
    <div class="relative w-full">
        <div class="relative overflow-hidden rounded-lg">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(slide, index) in slides" :key="index" class="min-w-full relative">
                    <div class="relative h-[722px] bg-cover bg-center"
                        :style="{ backgroundImage: `url(${slide.image})` }">
                        <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                        <div class="absolute inset-0 flex flex-col justify-center items-center px-4">
                            <h2 class="slider-title font-bold text-center w-full max-w-[527px] md:w-[527px] md:h-[58px]"
                                style="
                                font-family: 'Inter';
                                font-weight: 700;
                                font-size: clamp(24px, 5vw, 48px);
                                line-height: 100%;
                                background: linear-gradient(90deg, #FFFFFF 0%, #FFE8AB 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                background-clip: text;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            ">{{ slide.title }}</h2>
                            <p class="slider-subtitle font-light text-center mt-2 w-full max-w-[527px] md:w-[527px] md:h-[24px]"
                                style="
                            font-family: 'Inter';
                            font-weight: 300;
                            font-size: clamp(16px, 3vw, 32px);
                            line-height: 24px;
                            color: #FFFFFF;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            ">{{ slide.subtitle }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <!-- <button @click="previousSlide"
                class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-700 hover:bg-secondary-600 flex items-center justify-center text-white transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button @click="nextSlide"
                class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-700 hover:bg-secondary-600 flex items-center justify-center text-white transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button> -->
        </div>
    </div>
</template>

<script setup lang="ts">
interface Slide {
    title: string
    subtitle: string
    image: string
}

interface Props {
    slides: Slide[]
}

const props = defineProps<Props>()

const currentIndex = ref(0)

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

const previousSlide = () => {
    currentIndex.value = currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1
}

const goToSlide = (index: number) => {
    currentIndex.value = index
}

// Auto-play (optional)
onMounted(() => {
    const interval = setInterval(() => {
        nextSlide()
    }, 5000)

    onUnmounted(() => clearInterval(interval))
})
</script>