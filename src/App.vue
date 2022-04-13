<script setup>
const logoSize = 'width:85px;';
</script>
 
<template>
    <div>
        <!-- navbar goes here -->
        <nav class="bg-white drop-shadow-md rounded-lg">
            <div class="max-w-screen-xl mx-auto px-4">
                <div class="flex justify-between">
                    <div class="flex space-x-4">
                        <!-- logo -->
                        <div>
                            <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <img src="./assets/FUNBOOK-LOGO.png" alt="LOGO" :style="logoSize" />
                                <span class="font-bold text-xl">FUNBOOK<br><span class=" font-light">online book
                                        store</span></span>
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-center m-auto">
                        <input type="text" class="border rounded-lg w-80 h-10 drop-shadow-sm">
                    </div>

                    <!-- secondary nav -->
                    <div class="hidden md:flex items-center space-x-1">
                        <a href class="py-5 px-3">HOME</a>
                        <a href class="py-5 px-3">CONTACT US</a>
                    </div>
                </div>
            </div>
        </nav>


        <router-view />
    </div>
</template>
 
<style>
</style>