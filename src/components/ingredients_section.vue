<template>
    <div id="ingredientHeader">
        <h2>Ingredients</h2>
        <div id="multipliers">
            <span>half</span> 
            <span>normal</span>
            <span>double</span>
            <span>custom</span>
        </div>
    </div>
    <div>
        <template v-for="i in props.ingredients" :key="i.name">
            <template v-if="i.subsection">
                <h3>{{i.title}} <span class="note" v-if="i.optional">optional</span></h3>
                <template v-for="ingredient in i.contents" :key="ingredient.name">
                    <div class="ingredient">
                        <span>{{ toFraction(ingredient.amount)}}</span>
                        <span>{{ ingredient.unit }}</span>
                        <div>
                            <span>{{ ingredient.name }}</span>
                            <span class="note" v-if="ingredient.note">{{ingredient.note}}</span>
                        </div>
                        
                    </div>
                </template>
            </template>
            <template v-else>
                <div class="ingredient">
                    <span>{{ i.amount }}</span>
                    <span>{{ i.unit }}</span>
                    <span>{{ i.name }}</span>
                </div>
            </template>
        </template>
        <p>{{ f }}</p>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {Fraction} from 'fractional'

const props = defineProps({
    ingredients: Array
}); 

function toFraction(decimal){
    if(typeof decimal != 'number'){return decimal}
    return new Fraction(decimal).toString();
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
.note{
    color: grey;
    font-size: 1em;
    margin-left: 1em;
}
.ingredient{
    display: grid;
    grid-template-columns: 1fr 2fr 10fr;
    border-bottom: 1px solid lightgray;
    padding: 1em 0;
}
</style>