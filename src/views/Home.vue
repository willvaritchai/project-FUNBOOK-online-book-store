<script setup>
import { onBeforeMount, ref } from 'vue';
import BaseCard from '../components/BaseCard.vue'
import BookLists from '../components/BookLists.vue'

const test = ref([])
const getTest = async () => {
    const res = await fetch('http://localhost:5000/book-information')
    test.value = await res.json()
}
onBeforeMount(async () => {
    await getTest()
})
</script>
 
<template>
    <div>
        <!-- <h1>Home (TEST)</h1> -->
        <!-- <BookLists :books="test" /> -->
        <BaseCard />
    </div>
</template>
 
<style>
</style>