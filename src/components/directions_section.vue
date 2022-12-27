<template>
    <h2>Directions</h2>
    <div v-if="props.directions.divided">
        <template v-for="section in props.directions.content" :key="section">
           <h3>{{ section.title }}</h3>
            <ol>
                <li v-for="direction in section.steps" :key="direction">{{ direction }}</li>
            </ol>
        </template>
    </div>
    <div v-else>
        <h2>hi</h2>
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'; 
    const props = defineProps({
        directions: Object
    })
</script>

<style>
ol{
    padding-left: 1em;
}
li{
    margin: 1em 0;
    line-height: 1.5em;
}
</style>