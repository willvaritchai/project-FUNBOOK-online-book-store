<script setup>
import { onBeforeMount, ref } from 'vue';
import IconHeart from '../components/icons/IconHeart.vue';
import AddB from '../components/Button.vue';
import BaseRating from '../components/BaseRating.vue';



const linkRating = 'http://localhost:5002/rating'
const linkBookInfo = 'http://localhost:5000/book-information'
const linkWishListInfo = 'http://localhost:5001/wishlist-information'

// ตัวแปรสำหรับรับค่าที่ได้จาก db
const bookInfo = ref([])
// const wishlishInfo = ref([])



// function get from db
const getBook = async () => {
    const res = await fetch(linkBookInfo)
    bookInfo.value = await res.json()

}
// const getWishlist = async () => {
//     const res = await fetch(linkWishListInfo)
//    wishlishInfo.value = await res.json()
// }


// function post to "wishlist.json"
const addWishList = async (newWishList) => {
    const res = await fetch(linkWishListInfo, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            bookName: newWishList.bookName,
            bookImg: newWishList.bookImg,
            author: newWishList.author,
            rating: newWishList.rating
        })
    })
    if (res.status === 201) {
        // const added = await res.json()
        // wishlishInfo.value.push(added)
        alert('Book has been added to your wishlist')
    } else {
        alert('System error Please try again.')
    }

}

const alertA = (a) => console.log(a.bookName)

onBeforeMount(async () => {
    await getBook()
})

</script>
 
<template>


    <div class=" grid grid-cols-4 items-center justify-center bg-white  text-gray-900">

        <div class=" mx-10 my-3 max-w-sm rounded-lg overflow-hidden shadow-lg"
            v-for="(book, index) in bookInfo" :key="index">
            <img class="object-cover " :src="book.bookImg" alt="Book Image" />
            <div class="px-6 py-4 text-left">
                <span class="flex text-xl font-bold">
                    <BaseRating :rating="book.rating" />
                    {{ book.rating }}

                </span>

                <div class="font-bold text-xl mb-2 ">
                    <!-- ชื่อหนังสือ -->
                    {{ book.bookName }}
                </div>
                <span class="font-bold ">author: </span>{{ book.author }}
                <hr>
                <span class="flex">
                    <AddB :txtBtn="'FREE'" />
                    <button @click='addWishList(book)'>
                        <!-- ตรงนี้ทำการเอาข้อมูลส่งไปด้วย  -->
                        <IconHeart />
                    </button>
                </span>



            </div>


        </div>
    </div>



</template>
 
<style>
</style>