<script setup>
const teamMembers = [
    {
        name: '404',
        title: 'NOT FOUND',
        avatar: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80",
        contactLink: 'https://github.com/'
    },
    {
        name: 'Phiraphat Kakerd',
        title: 'ผมหิวไก่ 088',
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr69Y_z3QzFwV1-fzUJyK_A4yI68lNvafT-w&usqp=CAU",
        contactLink: 'https://github.com/'
    },
    {
        name: 'Pattarapon Makhirun',
        title: '63130500091',
        avatar: "https://hooksandharmony.com/wp-content/uploads/2020/07/Rick-Astley-then.jpg",
        contactLink: 'https://github.com/Joe-sit'
    },
    {
        name: `Varitchai Surachaitanawat`,
        title: '63130500103-กะเพราหมูสับไข่เจียว',
        avatar: "https://it-meme.com/wp-content/uploads/2021/07/image-10-edited.png",
        contactLink: 'https://github.com/willvaritchai'
    },
    {
        name: `404`,
        title: 'NOT FOUND',
        avatar: "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80",
        contactLink: 'https://github.com/'
    }

]

</script>
 
<template>
    <div class="flex items-center justify-center min-h-screen bg-white py-30">
        <div class="flex flex-col">
            <div class="flex flex-col mt-2">
                <div class="container max-w-8xl px-48">
                    <div class="flex justify-center text-center mb-20">
                        <div class="w-full lg:w-8/12 px-4">
                            <h1 class="text-gray-700 text-6xl font-bold mb-8">
                                S2-GROUP10
                            </h1>
                            <p class="text-gray-700 text-lg font-light">
                                INT203 | Client-side Web Programming
                            </p>
                        </div>
                    </div>

                    <!-- Team Members -->
                    <div class="flex">
                        <!-- Member #1 -->
                        <div v-for="(member, propKey, index) in teamMembers" :key="member.name"
                            class="md:w-7/14 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-8">
                            <div class="flex flex-col">
                                <!-- Avatar -->
                                <a :href="member.contactLink" class="mx-auto hover:animate-bounce">
                                    <img class="rounded-2xl drop-shadow-md hover:drop-shadow-2xl" :src="member.avatar">
                                </a>

                                <!-- Details -->
                                <div class="text-center mt-6">
                                    <!-- Name -->
                                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                                        {{ member.name }}
                                    </h1>

                                    <!-- Title -->
                                    <div class="text-gray-700 font-light mb-2">
                                        {{ member.title }}
                                    </div>

                                    <!-- {{ member.contactLink }} -->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style>
</style>