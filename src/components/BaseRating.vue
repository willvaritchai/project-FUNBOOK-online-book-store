<script setup>
import IconStar from './icons/IconStar.vue'

const prop = defineProps({
    rating: {
        type: Number,
        require: true
    }
})

</script>
 
<template>
<!-- แสดง star-icon แบบวน loop ตามจำนวนค่า rating ของหนังสือแต่ละเล่ม -->
    <span v-for="i in parseInt(rating)" :key="i">
        <IconStar />
    </span>

</template>
 
<style>
</style>