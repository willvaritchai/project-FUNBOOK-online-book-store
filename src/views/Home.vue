<script setup>
import { onBeforeMount, ref, computed } from 'vue'
import IconHeart from '../components/icons/IconHeart.vue'
import BaseRating from '../components/BaseRating.vue'
import BaseSearchBar from '../components/BaseSearchBar.vue'
import BaseButton from '../components/BaseButton.vue'
console.clear()

//link db
const linkBookInfo = 'http://localhost:5000/book-information'
const linkWishListInfo = 'http://localhost:5001/wishlist-information'

// ตัวแปร
const bookInfo = ref([])
const searchingInfo = ref([]) // ตัวแปรใช้เก็บรายการหนังสือที่จะทำการค้นหา

// function get from db
// get รายการหนังสือจาก db-bookinformation เพื่อแสดงหนังสือหน้าเว็บ
const getBook = async () => {
  const res = await fetch(linkBookInfo)
  bookInfo.value = await res.json()
}
//before mount
onBeforeMount(async () => {
  await getBook()
})

// function post to "wishlist.json"
// post หนังสือที่สนใจเข้ารายการ wishlist
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

//ตัวแปรสำหรับเก็บค่า boolean จาก input-search
let checkIn = ref(false)

// ฟังก์ชันการทำงาน ในการค้นหาหนังสือ โดยการค้นหาจะขึ้นกับ "ชนิดของหนังสือ"
const searching = (input) => {
  let checkE = undefined
  checkIn.value = input.isTrue
  searchingInfo.value = []

  console.log(`searching :${input.input} boolean: ${input.isTrue}`)

  if (checkIn) {
    for (let i = 0; i < bookInfo.value.length; i++) {
      for (let j = 0; j < bookInfo.value[i].category.length; j++) {
        checkE = bookInfo.value[i].category[j]
          .toLowerCase()
          .includes(input.input.toLowerCase())
        console.log(checkE)
        //ทำการ loop array และ obj จากชั้นนอกเข้าชั้นใน
        if (checkE === true) {
          searchingInfo.value.push(bookInfo.value[i])
        }
      }
    }
    console.log(searchingInfo.value)
  } else alert('Please enter your search information.') //ถ้าหาก user ยังไม่ได้กรอก แต่ทำการ click icon-search ก็จะขึ้น alert นี้
}
</script>

<template>
<!-- แสดงรายการหนังสือ(เป็นหน้า Home) โดยจะเป็นเว็บหน้าหลักของ FunBook  -->
<!-- จะมีการ code ส่วนการทำงานของการ search ชนิดหนังสือ -->
  <div>
    <div class="searching">
      <h4 style="text-align: center; font-weight: 600">search by category</h4>
      <div class="flex justify-center m-auto border rounded-lg w-85 h-10">
        <BaseSearchBar @searchMe="searching" />
      </div>
    </div>

    <div
      v-show="!checkIn"
      class="w-10/12 m-auto grid grid-cols-4 items-center justify-center bg-white text-gray-900"
    >
      <div
        class="mx-10 my-3 max-w-sm rounded-lg overflow-hinden shadow-lg"
        v-for="(book, index) in bookInfo"
        :key="index"
      >
        <div>
          <img
            class="object-fill h-80 w-fit rounded-lg m-auto"
            :src="book.bookImg"
            alt="Book Image"
          />
        </div>
        <div class="px-6 py-4 text-left">
          <div>
            <span class="flex text-xl font-bold">
              <BaseRating :rating="book.rating" />
              <span class="text-base py-1 px-1">{{ book.rating }}</span>
            </span>
          </div>

          <div>
            <div class="font-bold text-xl mb-2">
              <!-- ชื่อหนังสือ -->
              {{ book.bookName }}
            </div>
            <div><span class="font-bold">author: </span>{{ book.author }}</div>
          </div>

          <div>
            <span
              v-for="(cat, index) in book.category"
              :key="index"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{{ cat }}
            </span>
          </div>

          <hr />
          <div>
            <span class="flex">
              <BaseButton :txtBtn="'FREE'" />
              <button @click="addWishList(book)">
                <!-- ตรงนี้ทำการเอาข้อมูลส่งไปด้วย  -->
                <IconHeart class="hover:scale-125 transition-transform" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-show="checkIn == true"
      class="w-10/12 m-auto grid grid-cols-4 items-center justify-center bg-white text-gray-900"
    >
      <div
        class="mx-10 my-3 max-w-sm rounded-lg overflow-hinden shadow-lg"
        v-for="(search, index) in searchingInfo"
        :key="index"
      >
        <div>
          <img
            class="object-fill h-80 w-fit rounded-lg m-auto"
            :src="search.bookImg"
            alt="Book Image"
          />
        </div>
        <div class="px-6 py-4 text-left">
          <div>
            <span class="flex text-xl font-bold">
              <BaseRating :rating="search.rating" />
              <span class="text-base py-1 px-1">{{ search.rating }}</span>
            </span>
          </div>

          <div>
            <div class="font-bold text-xl mb-2">
              <!-- ชื่อหนังสือ -->
              {{ search.bookName }}
            </div>
            <div>
              <span class="font-bold">author: </span>{{ search.author }}
            </div>
          </div>

          <div>
            <span
              v-for="(cat, index) in search.category"
              :key="index"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{{ cat }}
            </span>
          </div>

          <hr />
          <div>
            <span class="flex">
              <AddB :txtBtn="'FREE'" />
              <button @click="addWishList(book)">
                <!-- ตรงนี้ทำการเอาข้อมูลส่งไปด้วย  -->
                <IconHeart class="hover:scale-125 transition-transform" />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.searching {
  width: fit-content;
  height: fit-content;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}
</style>
