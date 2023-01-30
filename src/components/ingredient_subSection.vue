<template>
    <div  class="subsection">
        <h3  class="subSectionTitle">{{title}} <span class="note" v-if="optional">optional</span></h3>
        <template v-for="ingredient in contents" :key="ingredient.name">
            <div class="ingredient">
                <span class="amount">{{ formatAmount(ingredient.amount) }}</span>
                <span class="unit">{{ ingredient.unit }}</span>
                <div>
                    <span class="name">{{ ingredient.name }}</span>
                    <span class="note" v-if="ingredient.note">{{ ingredient.note }}</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { Fraction } from 'fractional'

const props = defineProps({
    ingredientGroup: Object
});
const title  = ref(props.ingredientGroup.title);
const contents = ref(props.ingredientGroup.contents);
const optional = ref(props.ingredientGroup.optional);

function formatAmount(amount){
    if(typeof amount == 'number'){
        return toFraction(amount); 
    }else if(amount.length == 2){
        return `${toFraction(amount[0])} - ${toFraction(amount[1])}`;
    }else{
        return 'error'; 
    }
}

function toFraction(decimal) {
    if(typeof decimal != 'number'){return decimal}
    return new Fraction(decimal).toString();
}
</script>

<style scoped>
.subSectionTitle{
    font-size: 1em;
}
.ingredient {
    display: grid;
    grid-template-columns: 2fr 4fr 6fr;
    border-bottom: 1px solid lightgray;
    padding: 0.5em 0.5em;
}
.ingredient:hover{
    background-color: rgba(179, 179, 179, 0.424);
    border-radius: 5px;
    /* border: 3px solid gray; */
    /* padding: 1em; */
}
span {
    font-size: 0.85em;
}
</style>