<script setup>
import { onBeforeMount, ref } from 'vue';
import BaseCard from '../components/BaseCard.vue'
// import BookLists from '../components/BookLists.vue'
// import BaseWishlist from '../components/BaseWishlist.vue'
// import NotFound from '../views/NotFound.vue'
// import ContactUs from '../views/ContactUs.vue'

// const test = ref([])
// const getTest = async () => {
//     const res = await fetch('http://localhost:5000/book-information')
//     test.value = await res.json()
// }
// const getWishlist = async () => {
//     const res = await fetch('http://localhost:5001/wishlist-information')
//     test.value = await res.json()
// }

// onBeforeMount(async () => {
//     await getTest(),getWishlist()
    
// })

</script>
 
<template>
    <div>
        <!-- <h1>Home (TEST)</h1>
        <BookLists :books="test" />

        <BaseWishlist :wishlists="test"/> -->
        <BaseCard />
    </div>
</template>
 
<style>
</style>