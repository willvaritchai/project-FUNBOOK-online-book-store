<script setup>
defineEmits(['removeWishList'])
defineProps({
    wishlists: {
        type: Array,
        require: true
    }
})


</script>

<template>
    <div class="w-4/5 m-auto" >
        <div>
            <!--Wishlist items goes here-->
            <div class="flex flex-col">
                <div class="overflow-x-auto">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full border text-center">
                                <thead class="border-b">
                                    <tr class="text-xl font-medium text-gray-900 px-6 py-4">
                                        <th scope="col" class="border-r ">Image</th>
                                        <th scope="col" class="border-r ">book-title</th>
                                        <th scope="col" class="border-r ">book-rating</th>
                                        <th scope="col" class="px-6 py-4 ">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- ส่วนติดต่อกับ wishlist.json -->
                                    <tr class="border-b text-xl text-gray-900 px-6 py-4 whitespace-nowrap font-normal "
                                        v-for="(items,index ) in wishlists" :key="index">
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r ">
                                            <!-- <BaseWishlist :wishlists="wish"/> -->
                                            <img :src="items.bookImg" class="w-36 mx-auto rounded-lg" />
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap border-r">
                                            {{ items.bookName }}
                                        </td>
                                        <td class="border-r">
                                            {{ items.rating }}
                                        </td>
                                        <td class="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <!--remove button:: ทดสอบก่อน แล้วเด่วค่อย clean code -->
                                            <button
                                                class="mt-3 inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                                @click="$emit('removeWishList',items.id)">
                                                remove
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
