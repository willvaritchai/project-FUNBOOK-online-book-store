<script setup>

defineProps({
    test: {type: Array,
    require: true}
})    
</script>
 
<template>
<div>
    <ul>
        <li v-for="testList,index in test" :key="index">
            {{testList.id}} {{testList.name}}

        </li>
    </ul>
</div>
</template>
 
<style>

</style>