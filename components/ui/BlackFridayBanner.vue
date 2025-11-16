<template>
    <div class="relative overflow-hidden rounded-lg bg-gradient-to-r w-1/2">
        <!-- Navigation Arrows -->
        <div class="absolute top-4 right-4 z-10 flex gap-2">
            <div class="flex items-center gap-2 self-end sm:self-auto">
                <button
                    class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#383A42] text-white hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <span class="text-sm sm:text-base">&lt;</span>
                </button>
                <button
                    class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#383A42] text-white hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page">
                    <span class="text-sm sm:text-base">&gt;</span>
                </button>
            </div>
        </div>

        <!-- Banner Content -->
        <div class="relative h-full flex flex-col px-4 py-4">
            <!-- Black Friday Text -->
            <h2 class="text-3xl font-bold text-[#FFD700] px-44">BLACK FRIDAY</h2>

            <!-- TV Image -->
            <div class="relative transform translate-x-[70px] flex items-center justify-center">
                <div class="relative w-full max-w-xl">
                    <!-- TV Screen -->
                    <div class="relative rounded-lg overflow-hidden aspect-video">
                        <!-- TV Content -->
                        <div class="absolute items-center justify-center">
                            <img class="ml-[30px]" src="/assets/images/black-friday/black-friday.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const currentSlide = ref(1);
const totalSlides = 3;

const nextSlide = () => {
    currentSlide.value = currentSlide.value === totalSlides ? 1 : currentSlide.value + 1;
};

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 1 ? totalSlides : currentSlide.value - 1;
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
