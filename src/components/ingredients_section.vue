<template>
    <div id="ingredientHeader">
        <h2>Ingredients</h2>
        <div id="multipliers">
            <span @click="activeMult = 'half';" :class="[activeMult == 'half'? 'active' : 'basic', 'button']">half</span> 
            <span @click="activeMult = 'normal';" :class="[activeMult == 'normal'? 'active' : 'basic', 'button']">normal</span>
            <span @click="activeMult = 'double';" :class="[activeMult == 'double'? 'active' : 'basic', 'button']">double</span>
        </div>
    </div>
    <div id="ingredientList">
        <subsection 
            v-for="ingredient in props.ingredients" 
            :key="ingredient.title" 
            :ingredientGroup="ingredient"
        />
    </div>
</template>

<script setup>
import {defineProps, ref} from 'vue'
// import {Fraction} from 'fractional'
import subsection from './ingredient_subSection.vue'

const props = defineProps({
    ingredients: Array
}); 

const activeMult = ref('normal');
// const ingredients = ref(JSON.parse(JSON.stringify(props.ingredients)));

// function ingredientMultiply(mult){
//     ingredients.value = JSON.parse(JSON.stringify(props.ingredients))
//     for(let sub of ingredients.value){
//         if(sub.subsection){
//             sub.contents.forEach(i =>{ 
//                 if(typeof i.amount == 'number'){
//                     i.amount *= mult; 
//                 }else{
//                     i.amount[0] *= mult;
//                     i.amount[1] *= mult;
//                 } 
//             });
//         }
//     }
//     console.log(ingredients.value)
// }
</script>

<style>
#ingredientHeader{
    display: flex;
    justify-content: space-between;
    align-content: center;
}
#multipliers{
    margin: auto 0;
}
#multipliers>span{
    margin-left: 1em;
}
#ingredientList{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
/* .ingredientSubsection:nth-of-type(odd){
   margin-right: 1em;
} */
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