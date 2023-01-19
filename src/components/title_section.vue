<template>
    <div id="titleSection">
        <h1>{{ props.title }}</h1>
        <div id="infoSection">
            <div class="info">
                <span class="descriptor">Source: </span>
                <a v-if="isURL(props.source)" :href="props.source">link</a>
                <span v-else>{{ props.source }}</span>
            </div>
            <div class="info">
                <span class="descriptor">Time: </span>
                <span>{{ props.time }}</span>
            </div>
            <div class="info">
                <span class="descriptor">Servings: </span>
                <span>{{ props.servings }}</span>
            </div>
            <div class="info">
                <span class="descriptor">Tags: </span>
                <span class="tag" v-for="tag in props.tags" :key="tag"> {{ tag }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String, 
    source: String, 
    time: Number, 
    servings: Number, 
    tags: Array
});

function isURL(text) {
    return text.slice(0, 4) == 'http';
}
</script>

<style>
h1{
    font-size: 3em;
    margin: 0;
}
#infoSection{
    margin: 0.5em 0;
    padding: 1em 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:flex-start;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
.info{
    margin-right: 1em;
    display: flex;
    align-items: center;
}
.descriptor{
    color: gray;
    font-size: 1em;
    margin-right: 0.25em;
}
.tag{
    font-size: 0.75em;
    padding: 0.125em 0.5em;
    margin-right: 0.5em;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: grey;
    color: white;
    transition: background-color 0.25s ease-out 50ms
}
.tag:hover{
    background-color: black;
    border: 1px solid black;
}
</style>
