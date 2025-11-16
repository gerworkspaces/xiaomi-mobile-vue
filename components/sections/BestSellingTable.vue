<template>
    <section class="py-8 sm:py-8 md:py-8 bg-[#18181A]">
        <div class="container mx-auto px-3 sm:px-4">
            <!-- Section Title -->
            <div class="mb-8 sm:mb-12 text-center">
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFC700] font-['Inter'] italic">
                    TOP BEST-SELLING PRODUCTS
                </h2>
                <div
                    class="h-1 w-20 sm:w-24 bg-gradient-to-r from-transparent via-[#FFC700] to-transparent mx-auto mt-2">
                </div>
            </div>

            <!-- Table Container -->
            <div class="overflow-x-auto">
                <!-- Desktop Table -->
                <div class="hidden sm:block">
                    <StatusTitle />
                    <RankingList :items="products" />
                </div>

                <!-- Mobile Cards -->
                <div class="sm:hidden space-y-3">
                    <div v-for="(product, index) in products" :key="index"
                        class="bg-[#1F2023] rounded-xl p-4 shadow-md">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <span
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-white text-sm font-medium mr-2"
                                    :class="getRankBadgeClass(index)">
                                    {{ index + 1 }}
                                </span>
                                <h3 class="text-white font-medium">{{ product.name }}</h3>
                            </div>
                            <span class="text-[#FF6700] font-medium">{{ product.price }}</span>
                        </div>
                        <div class="flex justify-between items-center text-sm text-gray-400">
                            <span>Quantity:</span>
                            <span>{{ formatNumber(product.quantity) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import StatusTitle from '~/components/sections/StatusTitle.vue';
import RankingList from '~/components/ui/RankingList.vue';

interface Product {
    name: string;
    quantity: number;
    price: string;
}

const products: Product[] = [
    { name: 'XIAOMI MAX 24', quantity: 1424042, price: '7.090.099$' },
    { name: 'XIAOMI MAX 24', quantity: 1424042, price: '7.090.099$' },
    { name: 'XIAOMI MAX 24', quantity: 1424042, price: '7.090.099$' },
    { name: 'XIAOMI MAX 24', quantity: 1424042, price: '7.090.099$' },
];

// Format number with thousands separator
const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Get rank badge class based on position
const getRankBadgeClass = (index: number): string => {
    switch (index) {
        case 0:
            return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
        case 1:
            return 'bg-gradient-to-br from-gray-300 to-gray-500';
        case 2:
            return 'bg-gradient-to-br from-amber-600 to-amber-800';
        default:
            return 'bg-[#383A42]';
    }
};
</script>

<style scoped>
/* Desktop styles are handled by the RankingList component */
/* Mobile styles */
@media (max-width: 639px) {
    .product-card {
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .product-card:active {
        transform: scale(0.98);
    }
}

.rank-icon {
    width: 24px;
    height: 24px;
}

.rank-number {
    color: #5D5D5D;
    font-weight: 900;
    font-style: italic;
    font-size: 14px;
    line-height: 24px;
}

.product-name {
    width: 170px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.quantity {
    width: 170px;
    color: #5D5D5D;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
}

.price {
    width: 107px;
    text-align: right;
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
}
</style>