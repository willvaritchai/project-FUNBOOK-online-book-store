<script setup>
import { computed, ref, onBeforeMount } from 'vue';
import BookLists from './BookLists.vue'
const books = ref(1)
const booksImage = "../assets/9786162624780l.jpg"

// ทกสอบ obj-books
const bookName = ref([])
// ทดสอบ method-GET
const getBook = async () => {
    const res = await fetch("http://localhost:5000/book-information")
    bookName.value = await res.json()
}
onBeforeMount(async () => {
    await getBook()
})

</script>
 
<template>
    <!-- <div class="grid grid-rows-4 grid-flow-col w-full h-screen flex items-center"> -->
    <div class="grid grid-cols-4 items-center justify-center bg-white" v-for="bookName, index in bookName" :key="index">
        <div class="mx-10 my-5 max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img class="w-full" src="../assets/9786162624780l.jpg" alt="Book Image">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                    <!-- ชื่อหนังสือ -->
                    {{ bookName.name }}
                </div>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                    perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
 
<style>
</style>