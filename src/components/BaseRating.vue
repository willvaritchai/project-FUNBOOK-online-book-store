<script setup>
import IconStar from './icons/IconStar.vue'

defineEmits(['clickMe', 'hoverMe'])
const prop = defineProps({
    rating: {
        type: Number,
        require: true
    }
})

</script>
 
<template>
    <span v-for="i in parseInt(rating)" :key="i">
        <IconStar />
    </span>

</template>
 
<style>
</style>