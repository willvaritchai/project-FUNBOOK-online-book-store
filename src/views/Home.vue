<script setup>
import { onBeforeMount, ref } from 'vue';
import ListsTestVue from '../components/ListsTest.vue';
import BaseCard from '../components/BaseCard.vue'


const test = ref([])
const getTest = async () => {
    const res = await fetch('http://localhost:5000/test')
    test.value = await res.json()
}
onBeforeMount(async () => {
    await getTest()
})
</script>
 
<template>
    <div>
        <h1>Home (TEST)</h1>
        <ListsTestVue :test="test" />
        <BaseCard />
    </div>
</template>
 
<style>
</style>