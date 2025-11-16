<template>
    <div class="ranking-list" bg-secondary-500>
        <div v-for="(item, index) in items" :key="index" class="ranking-item" :class="`rank-${index + 1}`">
            <div class="rank-info">
                <img v-if="index === 0" :src="rank1" class="rank-icon" />
                <img v-else-if="index === 1" :src="rank2" class="rank-icon" />
                <img v-else-if="index === 2" :src="rank3" class="rank-icon" />
            </div>
            <div class="product-name">{{ item.name }}</div>
            <div class="quantity">{{ formatNumber(item.quantity) }}</div>
            <div class="price">{{ formatPrice(item.price) }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import rank1 from '~/assets/images/icon-rank/1-rank.png';
import rank2 from '~/assets/images/icon-rank/2-rank.png';
import rank3 from '~/assets/images/icon-rank/3-rank.png';
interface RankingItem {
    name: string;
    quantity: number;
    price: number;
}

const props = defineProps<{
    items: RankingItem[];
}>();

const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatPrice = (price: number): string => {
    return `$${formatNumber(price)}`;
};
</script>

<style scoped>
.ranking-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
    max-width: 1104px;
    margin: 0 auto;
}

.ranking-item {
    display: flex;
    align-items: center;
    width: 1104px;
    background: linear-gradient(#131415, #CACACA 50%, #000000 100%);
    border-radius: 16px;
    padding: 16px;
    height: 76px;
    justify-content: space-between;
}

.rank-1 {
    background: linear-gradient(#131415, #FFD700 80%, #000000 10%);
}

.rank-2 {
    background: linear-gradient(#131415, #C0C0C0 70%, #000000 10%);
}

.rank-3 {
    background: linear-gradient(#131415, #99735A 60%, #000000 10%);
}

.rank-info {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rank-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
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
    padding: 4px;
    display: flex;
}

.quantity {
    width: 170px;
    color: #5D5D5D;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
}

.price {
    width: 107px;
    justify-content: flex-end;
    text-align: right;
    color: white;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 0 16px;
}
</style>