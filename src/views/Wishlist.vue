<script setup>

</script>
 
<template>
    <div>
        <!--Header-->
        <div class="text-gray-700">
            <h1 class="text-center font-bold text-5xl my-10">WISHLIST</h1>
        </div>

        <div>
            <!--Wishlist items goes here-->
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full border text-center">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            book-cover
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            book-title
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 border-r">
                                            book-rating
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b ">
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r ">
                                            book picture here
                                        </td>
                                        <td
                                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            book title here
                                        </td>
                                        <td
                                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                            book raing here
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            remove button
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