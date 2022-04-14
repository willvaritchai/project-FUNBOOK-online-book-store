<script setup>
defineProps({
    books: {
        type: Array,
        require: true
    }
})
</script>
 
<template>
    <div>
        <ul>
            <li v-for="(book, index) in books" :key="index">
                {{ book.id }} {{ book.name }}
            </li>
        </ul>
    </div>
</template>
 
<style>
</style>