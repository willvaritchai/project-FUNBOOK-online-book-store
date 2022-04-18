<script setup>
import { ref, onBeforeMount } from 'vue'
import BaseWishlist from '../components/BaseWishlist.vue'

//link db
const wishList ='http://localhost:5001/wishlist-information'

// ref-obj: from wishlist.json
// obj ชื่อ wish เก็บค่ารายการหนังสือเป็นประเภท array โดยจะมีการใช้ ref เพื่อความ reactive
const wish = ref([])

// method: GET
// GET รายการหนังสือมาแสดงผลหน้า WishList
const getWishlist = async () => {
  const res = await fetch(wishList)
  wish.value = await res.json()
}
onBeforeMount(async () => {
  await getWishlist()
})

// method: DELETE -- wishlist
// DELETE ทำการลบรายการหนังสือออกจากหน้า WishList (เมื่อกดปุ่ม remove)
const deleteWishList = async (removeWishId) => {
  let text = 'Do you want to remove this book ?'
  if (confirm(text) == true) {
    const res = await fetch(`${wishList}/${removeWishId}`,
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
