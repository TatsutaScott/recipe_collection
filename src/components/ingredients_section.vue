<template>
    <div id="ingredientHeader">
        <h2>Ingredients</h2>
        <div id="multipliers">
            <span @click="ingredientMultiply(0.5); activeMult = 'half';" :class="[activeMult == 'half'? 'active' : 'basic', 'button']">half</span> 
            <span @click="ingredientMultiply(1); activeMult = 'normal';" :class="[activeMult == 'normal'? 'active' : 'basic', 'button']">normal</span>
            <span @click="ingredientMultiply(2); activeMult = 'double';" :class="[activeMult == 'double'? 'active' : 'basic', 'button']">double</span>
            <!-- <span :class="activeMultiplier == 'custom'? 'active' : 'basic' ">custom</span> -->
        </div>
    </div>
    <div id="ingredientList">
        <template v-for="i in ingredients" :key="i.name">
            <template v-if="i.subsection">
                <div class="ingredientSubsection">
                <h3>{{i.title}} <span class="note" v-if="i.optional">optional</span></h3>
                <template v-for="ingredient in i.contents" :key="ingredient.name">
                    <div class="ingredient">
                        <span class="amount" v-if="typeof(ingredient.amount) == 'number'">{{ toFraction(ingredient.amount)}}</span>
                        <span  class="amount" v-else>{{ `${toFraction(ingredient.amount[0])} - ${toFraction(ingredient.amount[1])}`}}</span>
                        <span>{{ ingredient.unit }}</span>
                        <div>
                            <span>{{ ingredient.name }}</span>
                            <span class="note" v-if="ingredient.note">{{ingredient.note}}</span>
                        </div>
                        
                    </div>

                </template>
                </div>
            </template>
            <template v-else>
                <div class="ingredient">
                    <span class="amount">{{ i.amount }}</span>
                    <span>{{ i.unit }}</span>
                    <span>{{ i.name }}</span>
                </div>
            </template>
        </template>
        <!-- <p>{{ f }}</p> -->
    </div>
</template>

<script setup>
import {defineProps, ref} from 'vue'
import {Fraction} from 'fractional'

const props = defineProps({
    ingredients: Array
}); 

const activeMult = ref('normal');
const ingredients = ref(JSON.parse(JSON.stringify(props.ingredients)));

function toFraction(decimal){
    if(typeof decimal != 'number'){return decimal}
    return new Fraction(decimal).toString();
}

function ingredientMultiply(mult){
    ingredients.value = JSON.parse(JSON.stringify(props.ingredients))
    for(let sub of ingredients.value){
        if(sub.subsection){
            sub.contents.forEach(i =>{ 
                if(typeof i.amount == 'number'){
                    i.amount *= mult; 
                }else{
                    i.amount[0] *= mult;
                    i.amount[1] *= mult;
                } 
            });
        }
    }
    console.log(ingredients.value)
}
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
.ingredientSubsection:nth-of-type(odd){
   margin-right: 1em;
}
.note{
    color: grey;
    font-style: italic;
    font-size: 1em;
    margin-left: 1em;
}
.ingredient{
    display: grid;
    grid-template-columns: 2fr 4fr 6fr;
    border-bottom: 1px solid lightgray;
    padding: 1em 0;
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
.amount{
    font-size: 1em;
}
.button{
    cursor: pointer;
}
</style>