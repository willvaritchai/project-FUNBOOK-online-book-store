<script setup>
const teamMembers = [
    {
        name: 'Tranter Jaskulski',
        title: 'Founder & Specialist',
        Linkedin: '#', twitter: '#', instagram: '#',
        avatar: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
    },
    {
        name: 'Phiraphat Kakerd',
        title: 'ผมหิวไก่ 088',
        Linkedin: '#', twitter: '#', instagram: '#',
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr69Y_z3QzFwV1-fzUJyK_A4yI68lNvafT-w&usqp=CAU"
    },
    {
        name: 'Pattarapon Makhirun',
        title: '63130500091',
        Linkedin: '#', twitter: '#', instagram: '#',
        avatar: "https://hooksandharmony.com/wp-content/uploads/2020/07/Rick-Astley-then.jpg"
    },
    {
        name: `Varitchai Surachaitanawat`,
        title: '63130500103-กะเพราหมูสับไข่เจียว',
        Linkedin: '#', twitter: '#', instagram: '#',
        avatar: "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
    },
    {
        name: `Doesn't matter`,
        title: 'Will be fired',
        Linkedin: '#', twitter: '#', instagram: '#',
        avatar: "https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
    }

]

</script>
 
<template>
    <div class="flex items-center justify-center min-h-screen bg-white py-20">
        <div class="flex flex-col">
            <div class="flex flex-col mt-8">
                <div class="container max-w-7xl px-4">
                    <div class="flex flex-wrap justify-center text-center mb-24">
                        <div class="w-full lg:w-6/12 px-4">
                            <h1 class="text-gray-900 text-6xl font-bold mb-8">
                                S2-GROUP10
                            </h1>
                            <p class="text-gray-700 text-lg font-light">
                                INT203 | Client-side Web Programming
                            </p>
                        </div>
                    </div>

                    <!-- Team Members -->
                    <div class="flex flex-wrap">
                        <!-- Member #1 -->
                        <div v-for="(member, propKey, index) in teamMembers" :key="member.name"
                            class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                            <div class="flex flex-col">
                                <!-- Avatar -->
                                <a href="#" class="mx-auto">
                                    <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                        :src="member.avatar">
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

                                    <!-- Social Icons -->
                                    <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                        <!-- Linkedin -->
                                        <a :href="member.Linkedin"
                                            class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                            <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                        </a>

                                        <!-- Twitter -->
                                        <a :href="member.twitter" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                            <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                        </a>

                                        <!-- Instagram -->
                                        <a :href="member.instagram"
                                            class="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                            <i class="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                        </a>
                                    </div>
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