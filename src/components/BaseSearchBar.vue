<script setup>
import { ref, computed } from 'vue'
import IconSearch from './icons/IconSearch.vue';
defineEmits(['searchMe'])

//ตัวแปรสำหรับเก็บค่าจาก tag input
const inputValue = ref('')

//ทำการตรวจสอบว่า input มีข้อมูลหรือไม่
const checkNull = computed(() => {
    if (inputValue.value == '') return false
    else return true
}) 
</script> 

<template>
<!-- search bar สำหรับการค้นหาหนังสือตามแต่ละประเภท โดยจะมีปุ่มที่เรียกใช้ "IconSearch" ที่มี custom event
สำหรับการรับค่ารายการหนังสือในการค้นหาอีกที
-->
    <div class="flex justify-center m-auto border rounded-lg w-85 h-10">
        <input type="text" class="drop-shadow-sm w-80 border-slate-300 
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md" placeholder=" Search by category..."
            v-model="inputValue">

        <button @click="$emit('searchMe', { input: inputValue, isTrue: checkNull })"
            class="hover:scale-125 transition-transform	bg-blue-400 rounded-md w-10">
            <IconSearch />
        </button>

    </div>
</template>
 
<style>
</style>
