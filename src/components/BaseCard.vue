<script setup>
import { computed, ref, onBeforeMount, onMounted, reactive } from 'vue';
// import BookLists from './BookLists.vue'
import IconStar from '../components/icons/IconStar.vue'
import ButtonVue from './Button.vue';
import IconHeart from '../components/icons/IconHeart.vue'

// ทกสอบ obj-books
// const bookInfo = ref([
//     {
//         rating: 5,
//         bookName: 'Arduino UNO พื้นฐานสำหรับงาน IOT',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/262/9786162624780L.jpg?h=9793d59ad5230e538a2c6bcd36b1f6a8',
//         author: 'จีราวุท วารินทร์'
//     },
//     {
//         rating: 4.39,
//         bookName: 'พัฒนา Web Application ด้วย JavaScript และ Node.js',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160841356L.jpg?h=fd5b13c7b8b5759783c944067214a60d',
//         author: 'บัญชา ปะสีละเตสัง'
//     },
//     {
//         rating: 4.35,
//         bookName: 'พัฒนาเว็บและเพิ่มลูกเล่นด้วย JavaScript',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/262/9786162624964L.jpg?h=e075e71e43bd742003ca1ce22644feec',
//         author: 'สุพจน์ สง่ากอง'
//     },
//     {
//         rating: 4.20,
//         bookName: 'สร้างเว็บไซต์แบบ Responsive ด้วย Bootstrap ร่วมกับ CSS และ JavaScript',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/083/9786160834938L.jpg?h=e75862e8692c0b60e5f879e6d849ad11',
//         author: 'บัญชา ปะสีละเตสัง'
//     },
//     {
//         rating: 4.10,
//         bookName: 'พัฒนา Mobile App บนระบบ Android ด้วย Kotlin',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/083/9786160837809L.jpg?h=d067f4638ee6d036c6a5f21659b64222',
//         author: 'บัญชา ปะสีละเตสัง'
//     },
//     {
//         rating: 4.00,
//         bookName: 'เขียนโปรแกรมบนฐานข้อมูล MySQL',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/080/9786160804382L.jpg?h=b71f0c741c0b4aa37ba74122ae7100ea',
//         author: 'สมพงษ์ อริสริยวงศ์'
//     },
//     {
//         rating: 4.00,
//         bookName: 'เรียนรู้ AI : Deep Learning ด้วย Python',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/906/9786169065173L.jpg?h=2f36730bcfed33287b87e98486ba418e',
//         author: 'ผศ.ดร. กอบเกียรติ สระอุบล'
//     },
//     {
//         rating: 4.00,
//         bookName: 'เรียนรู้หลักการ Data Science ด้วย Python',
//         bookImg: 'https://images-se-ed.com/ws/Storage/Originals/978616/828/9786168282038L.jpg?h=e5b3d1482a0340741890e699d3923c58',
//         author: 'Joel Grus'
//     }
// ])

// POST -- book
const addWishList = async (newWishList) => {
    const res = await fetch('http://localhost:5001/wishlist-information', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ wish_book_name: newWishList })
    })
    const added = await res.json()
    bookInfo.value.push(added)
    alert('Book has been added to your wishlist')
}
const alertLike = () => alert('you like this huh ?')

// console.log(bookInfo[0].bookImg)


// แหล่ง url ปกหนังสือ
// const bookImg = ref([
//     'https://images-se-ed.com/ws/Storage/Originals/978616/262/9786162624780L.jpg?h=9793d59ad5230e538a2c6bcd36b1f6a8',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/084/9786160841356L.jpg?h=fd5b13c7b8b5759783c944067214a60d',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/262/9786162624964L.jpg?h=e075e71e43bd742003ca1ce22644feec',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/083/9786160834938L.jpg?h=e75862e8692c0b60e5f879e6d849ad11',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/083/9786160837809L.jpg?h=d067f4638ee6d036c6a5f21659b64222',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/080/9786160804382L.jpg?h=b71f0c741c0b4aa37ba74122ae7100ea',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/906/9786169065173L.jpg?h=2f36730bcfed33287b87e98486ba418e',
//     'https://images-se-ed.com/ws/Storage/Originals/978616/828/9786168282038L.jpg?h=e5b3d1482a0340741890e699d3923c58'
// ])

const bookName = ref(['Book Title'])
// // ทดสอบ method-GET
// const getBook = async () => {
//     const res = await fetch("http://localhost:5000/book-information")
//     bookName.value = await res.json()
// }
// onBeforeMount(async () => {
//     await getBook()
// })


// ทดสอบปุ่ม
// const test = () => alert('never gonna give you up !!!')
</script>
 
<template>
    <!-- <div class="grid grid-rows-4 grid-flow-col w-full h-screen flex items-center"> -->
    <div class="grid grid-cols-4 items-center justify-center bg-white text-gray-900 rouned-lg">
        <!-- <p v-for="(book, index) in bookInfo">
            {{ book.bookName }}
        <div v-for="img, index in bookInfo" :key="index">
            <img :src="img.bookImg" />
        </div>
        {{ book.author }}
        </p> -->
        <div class="mx-10 my-3 max-w-sm rounded-lg overflow-hidden shadow-lg" v-for="(book, index) in bookInfo"
            :key="index">
            <img class="object-cover" :src="book.bookImg" alt="Book Image" />
            <div class="px-6 py-4 text-left">
                <span class="flex text-xl font-bold">{{ book.rating }}
                    <IconStar />
                </span>

                <div class="font-bold text-xl mb-2 ">
                    <!-- ชื่อหนังสือ -->
                    {{ book.bookName }}
                </div>
                <span class="font-bold ">author: </span>{{ book.author }}
                <hr>
                <span class="flex">
                    <ButtonVue :txtBtn="'FREE'" @newWishList="addWishList" />
                    <button @click='alertLike'>
                        <IconHeart />
                    </button>
                </span>



            </div>

            <!-- <div class="px-6 pt-4 pb-2">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> -->
        </div>
    </div>
    <!-- </div> -->
</template>
 
<style>
</style>