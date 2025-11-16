<template>
    <Popup v-model:isOpen="isPopupOpen" title="XIAOMI TV Max Series" subtitle="View to the max" :image="imageSlidePath"
        @see-more="handleSeeMore" />
    <div class="min-h-screen bg-[#18181A]">
        <div class="relative">
            <ImageSlider :slides="slides" />
        </div>

        <div class="min-h-screen bg-[#18181A] flex flex-col items-center justify-center py-10">
            <BestSellingTable :products="products" />
        </div>

        <!-- Top Products Section -->
        <div class="py-10 bg-[#18181A]">
            <ProductCard />
        </div>
        <BlackFridayBanner />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ImageSlider from '~/components/ui/ImageSlider.vue';
import Popup from '~/components/ui/Popup.vue';
import BestSellingTable from '~/components/sections/BestSellingTable.vue';
import ProductCard from '~/components/ui/ProductCard.vue';
import BlackFridayBanner from '~/components/ui/BlackFridayBanner.vue';
definePageMeta({
    layout: "default",
});

const isPopupOpen = ref(false);
const imageSlidePath = '/images/imageSlide.png';
const iconRank = '/images/icon-rank';

// Show popup when page loads
onMounted(() => {
    setTimeout(() => {
        // Show popup every time page reloads
        isPopupOpen.value = true;
    }, 300);
});

const handleSeeMore = () => {
    // Navigate to product page or handle see more action
    navigateTo('/product');
};

// Slides data for ImageSlider
const slides = [
    {
        title: 'XIAOMI TV max Series',
        subtitle: 'View to the max',
        image: imageSlidePath
    },
    {
        title: 'XIAOMI TV max Series',
        subtitle: 'View to the max',
        image: imageSlidePath
    },
    {
        title: 'XIAOMI TV max Series',
        subtitle: 'View to the max',
        image: imageSlidePath
    }
];
const products = [
    {
        iconRank: '1-rank.png',
        rank: 1,
        name: 'XIAOMI MAX 24',
        quantity: 1424042,
        price: '$7,090,099',
    },
    {
        rank: 2,
        name: 'XIAOMI MAX 24',
        quantity: 1424042,
        price: '$7,090,099',
    },
    {
        rank: 3,
        name: 'XIAOMI MAX 24',
        quantity: 1424042,
        price: '$7,090,099',
    },
    {
        rank: 4,
        name: 'XIAOMI MAX 24',
        quantity: 1424042,
        price: '$7,090,099',
    },
    {
        rank: 5,
        name: 'XIAOMI MAX 24',
        quantity: 1424042,
        price: '$7,090,099',
    },
]
</script>