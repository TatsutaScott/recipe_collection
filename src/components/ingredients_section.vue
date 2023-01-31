<template>
<div id="ingredients">
    <div id="ingredientHeader">
        <h2>Ingredients</h2>
        <div id="multipliers">
            <span @click="activeMult = 'half'; subIngredients.forEach(s => s.multiplySection(0.5));"
                :class="[activeMult == 'half'? 'active' : 'basic', 'button']">half</span>
            <span @click="activeMult = 'normal'; subIngredients.forEach(s => s.multiplySection(1))"
                :class="[activeMult == 'normal' ? 'active' : 'basic', 'button']">normal</span>
            <span @click="activeMult = 'double'; subIngredients.forEach(s => s.multiplySection(2))"
                :class="[activeMult == 'double' ? 'active' : 'basic', 'button']">double</span>
            <div id="custom" :class="[activeMult == 'custom' ? 'active' : 'basic', 'button']">
                <span @click="activeMult = 'custom';">custom </span>
                <number v-if="activeMult == 'custom'" :value="1" :step="0.25"
                    @input="(n) => subIngredients.forEach(s => s.multiplySection(n))" />
            </div>

        </div>
    </div>
    <div id="ingredientList">
        <subsection v-for="(ingredient) in props.ingredients" :key="ingredient.title" :ingredientGroup="ingredient"
            ref="subIngredients" />
    </div>
</div> 
</template>

<script setup>
import {defineProps, onMounted, ref} from 'vue'
import subsection from './ingredient_subSection.vue'
import number from './number_input.vue'

const props = defineProps({
    ingredients: Array
}); 
const subIngredients = ref();

onMounted(() =>{
    subIngredients.value.forEach(i =>{
        i.hi();
    });
})

const activeMult = ref('normal');
</script>

<style>
#ingredients{
    margin: 2em 0;
}
#ingredientHeader{
    display: flex;
    justify-content: space-between;
    align-content: center;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.25em 0.5em;
    background-color: rgba(255,255,255, 1);
}
#ingredientHeader>h2{
    margin: 0.25em 0;
}
#multipliers{
    margin: auto 0;
    display: flex;
    align-items: center;
}
#multipliers>span{
    margin-left: 0.25em;
}
#ingredientList{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#custom{
    position:relative;
    display: flex;
    flex-direction: row;
    align-items: center;
}
#customValue{
    margin-left: 1em;
    max-width: 4em;
}
.note{
    color: grey;
    font-style: italic;
    font-weight: 50;
    font-size: 1em;
    margin-left: 1em;
}

.active{
    background-color: black;
    padding: 0.125em 0.5em;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: grey;
    color: white;
    transition: background-color 0.25s ease-out 50ms;
    transition: border 0.25s ease-out 50ms;
}

.basic{
    color:grey;
    padding: 0.125em 0.5em;
}

.button{
    cursor: pointer;
}
</style>