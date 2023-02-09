<template>
    <div>
        <div id="directionsTitle">
            <h2>Directions</h2>
            <button class="menuToggle" @click="toggleDirections">{{ hideDirections? '▼':'▲'}}</button>
        </div>
        
        <div v-if="props.directions.divided" :class="hideDirections ? 'hide': ''">
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
    </div>
</template>

<script setup>
    import {ref, defineProps} from 'vue'; 
    const props = defineProps({
        directions: Object
    });

    const hideDirections = ref(false);
    function toggleDirections(){
        hideDirections.value = !hideDirections.value;
    }
</script>

<style scoped>
h2{
    margin: 0.25em 0;
}
.menuToggle{
    border: none;
    color: grey;
    background: none;
}   
#directionsTitle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0.25em 0.5em;
}
ol{
    padding-left: 1em;
}
li{
    margin: 0.5em 0;
    line-height: 1.25em;
}
</style>