<template>
    <div  class="subsection">
        <number value="12" />
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
import { defineProps, ref, defineExpose, onMounted } from 'vue'
import { Fraction } from 'fractional'
import number from './number_comp.vue';

const copyJSON = (data) => {
    return JSON.parse(JSON.stringify(data));
}

const props = defineProps({
    ingredientGroup: Object
});
defineExpose({
    hi, 
    multiplySection
});
const ingredientCopy = ref(copyJSON(props.ingredientGroup));
const title = ref(ingredientCopy.value.title);
const contents = ref(ingredientCopy.value.contents);
const optional = ref(ingredientCopy.value.optional);
onMounted(() =>{
    console.log(ingredientCopy.value)
    multiplySection(2);
    multiplySection(1)
})

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
    const res = new Fraction(decimal);
    return formatFraction(res);
}

function formatFraction(fraction){
    if (fraction.denominator == 1) return fraction.toString();
    const sup = ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹'];
    const sub = ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉'];
    return `${sup[fraction.numerator]}/${sub[fraction.denominator]}`;
}

function hi(){
    console.log(`${title.value} section loaded.`);
}

function multiplySection(mult){
    contents.value.forEach((ingredient, index) =>{
        if(typeof ingredient.amount == 'number'){
            ingredient.amount = props.ingredientGroup.contents[index].amount * mult;
        }else if (Array.isArray(ingredient.amount)){
            ingredient.amount[0] = props.ingredientGroup.contents[index].amount[0] * mult;
            ingredient.amount[1] = props.ingredientGroup.contents[index].amount[1] * mult;
        }
        
    });
}
</script>

<style scoped>
.subSectionTitle{
    font-size: 1em;
    width: 100%;
}
/* .amount{
    font-size: 112.5%;
} */
.ingredient {
    display: grid;
    grid-template-columns: 2fr 4fr 6fr;
    border-bottom: 1px solid lightgray;
    padding: 0.5em 0.5em;
}
.ingredient:hover{
    background-color: rgba(179, 179, 179, 0.424);
    border-radius: 5px;
}
span {
    font-size: 0.85em;
}
</style>