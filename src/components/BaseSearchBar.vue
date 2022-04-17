<script setup>
import { ref, computed } from 'vue'
import IconSearch from './icons/IconSearch.vue';
defineEmits(['searchMe'])
const inputValue = ref('')

</script>

<template>
    <div class="flex justify-center m-auto border rounded-lg w-85 h-10">
        <input type="text" class="drop-shadow-sm w-80 border-slate-300 
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md" placeholder=" Search book title..."
            v-model="inputValue">
        <button @click="$emit('searchMe', inputValue)" class="hover:animate-ping">
            <IconSearch />
        </button>

    </div>
</template>
 
<style>
</style>