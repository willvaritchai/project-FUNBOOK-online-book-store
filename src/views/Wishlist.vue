<script setup>
import { ref, onBeforeMount } from 'vue'
import BaseWishlist from '../components/BaseWishlist.vue'

// ref-obj: from wishlist.json
const wish = ref([])

// method: GET
const getWishlist = async () => {
  const res = await fetch('http://localhost:5001/wishlist-information')
  wish.value = await res.json()
}
onBeforeMount(async () => {
  await getWishlist()
})

// method: DELETE -- wishlist
const deleteWishList = async (removeWishId) => {
  let text = 'Do you want to remove this book ?'
  if (confirm(text) == true) {
    const res = await fetch(
      `http://localhost:5001/wishlist-information/${removeWishId}`,
      {
        method: 'DELETE'
      }
    )
    wish.value = wish.value.filter((items) => items.id !== removeWishId)
    alert('remove successfully')
  }
}
</script>

<template>
  <div>
    <!--Header-->
    <div class="text-gray-700">
      <h1 class="text-center font-bold text-5xl my-10">WISHLIST</h1>
    </div>

    <BaseWishlist :wishlists="wish" @removeWishList="deleteWishList" />
  </div>
</template>

<style>
</style>
