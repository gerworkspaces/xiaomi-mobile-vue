<template>
    <div class="status-title">
        <span class="no">NO.</span>
        <span class="product">PRODUCT</span>
        <span class="quantity">QUANTITY</span>
        <span class="price">PRICE</span>
    </div>
</template>

<script lang="ts" setup>
// Component logic goes here
</script>

<style scoped>
.status-title {
    display: flex;
    align-items: center;
    width: 1104px;
    height: 40px;
    background-color: #131415;
    border-radius: 8px;
    padding: 8px 24px;
    justify-content: space-between;
}

.status-title span {
    font-family: 'Inter';
    font-weight: 900;
    font-style: italic;
    font-size: 14px;
    line-height: 24px;
    color: #5D5D5D;
    text-transform: capitalize;
    height: 24px;
    display: flex;
    align-items: center;
}

.no {
    width: 40px;
}

.product,
.quantity {
    width: 170px;
}

.price {
    width: 107px;
    justify-content: flex-end;
    text-align: right;
}
</style>
