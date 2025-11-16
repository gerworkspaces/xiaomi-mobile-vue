<template>
    <div class="w-full bg-[#18181A] py-6 sm:py-2 md:py-2">
        <div class="container mx-auto px-3 sm:px-4">
            <!-- Header with Title and Navigation -->
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3">
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFC700] font-['Inter'] italic">
                    TOP PRODUCT
                </h2>
                <div class="flex items-center gap-2 self-end sm:self-auto">
                    <button
                        class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#383A42] text-white hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="currentPage === 1" @click="prevPage" aria-label="Previous page">
                        <span class="text-sm sm:text-base">&lt;</span>
                    </button>
                    <button
                        class="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#383A42] text-white hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="currentPage === totalPages" @click="nextPage" aria-label="Next page">
                        <span class="text-sm sm:text-base">&gt;</span>
                    </button>
                </div>
            </div>

            <!-- Product Grid -->
            <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                <div v-for="(product, index) in visibleProducts" :key="index"
                    class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <!-- Product Image -->
                    <div class="aspect-w-3 aspect-h-4 w-full">
                        <img :src="product.image" :alt="product.title"
                            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            :class="{ 'h-[200px] sm:h-[280px] md:h-[340px] lg:h-[380px]': true }" loading="lazy" />
                    </div>

                    <!-- Hover Overlay -->
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                        <div class="w-full">
                            <h3 class="text-white text-base sm:text-lg font-medium mb-1 sm:mb-2">{{ product.title }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile Pagination Dots -->
            <div class="flex justify-center mt-6 sm:hidden">
                <div class="flex space-x-2">
                    <span v-for="page in totalPages" :key="page" class="w-2 h-2 rounded-full"
                        :class="{ 'bg-[#FFC700]': currentPage === page, 'bg-[#383A42]': currentPage !== page }">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Import your product images
import Product1 from '@/assets/images/topProduct/1-product.png';
import Product2 from '@/assets/images/topProduct/2-product.png';
import Product3 from '@/assets/images/topProduct/3-product.png';
import Product4 from '@/assets/images/topProduct/4-product.png';
import Product5 from '@/assets/images/topProduct/5-product.png';
import Product6 from '@/assets/images/topProduct/6-product.png';
// ... import other product images

const products = [
    {
        title: "",
        description: "",
        image: Product1,
    },
    {
        title: "",
        description: "",
        image: Product2,
    },
    {
        title: "",
        description: "",
        image: Product3,
    },
    {
        title: "",
        description: "",
        image: Product4,
    },
    {
        title: "",
        description: "",
        image: Product5,
    },
    {
        title: "",
        description: "",
        image: Product6,
    },
]

const itemsPerPage = 3;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(products.length / itemsPerPage));

const visibleProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
});

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>