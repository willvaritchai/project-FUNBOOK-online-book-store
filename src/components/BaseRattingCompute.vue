<script setup>
import IconHeart from './icons/IconHeart.vue'
defineEmits(['clickMe','hoverMe'])
const prop = defineProps({
    buttonName:{
        type:String,
        default:'button kub'
    }
})

//คิดว่าจะต้องมีการเชื่อ db เดี๋ยวค่อยทำ

</script>
 
<template>
<!-- เมื่อกดแล้วจะส่ง ratting ไปยัง db แล้วคำนวณค่าออกมาเป็น status แต่ค่อยทำเรียน db ก่อน 5555 -->
<button @click="$emits('clickMe',เดี๋ยวเอาค่าจาก response ที่ส่งจาก db มา)">{{ buttonName }}</button>
</template>
 
<style>

</style>