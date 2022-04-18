<script setup>
defineEmits(['newWishList'])
defineProps({
    txtBtn: {
        type: String,
        require: true
    }
})
</script>
 
<template>
<!-- สำหรับกำหนดปุ่ม (แต่ ณ ตอนนี้ยัง set เป็น disabled ไว้ก่อน เพื่อแสดงราคาของหนังสือแต่ละเล่ม) -->
    <div>
        <button
            class="mt-3 inline-block px-6 py-2.5 bg-blue-600 text-white 
            font-medium text-xs leading-tight uppercase rounded 
            shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
            active:shadow-lg transition duration-150 ease-in-out"
            @click="$emit('newWishList')" disabled> {{ txtBtn }} </button>
    </div>
</template>
 
<style>
</style>