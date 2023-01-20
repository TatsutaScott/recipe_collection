<template>
    <div  class="subsection">
        <h3>{{title}} <span class="note" v-if="optional">optional</span></h3>
        <template v-for="ingredient in contents" :key="ingredient.name">
            <div class="ingredient">
                
            </div>
        </template>
        <!-- <template v-for="ingredient in i.contents" :key="ingredient.name">
            <div class="ingredient">
                <span class="amount" v-if="typeof(ingredient.amount) == 'number'">{{ toFraction(ingredient.amount)}}</span>
                <span class="amount" v-else>{{ `${toFraction(ingredient.amount[0])} -
                    ${toFraction(ingredient.amount[1])}`}}</span>
                <span>{{ ingredient.unit }}</span>
                <div>
                    <span>{{ ingredient.name }}</span>
                    <span class="note" v-if="ingredient.note">{{ingredient.note}}</span>
                </div>
        
            </div>
        </template> -->
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
    ingredientGroup: Object
});
const title  = ref(props.ingredientGroup.title);
const contents = ref(props.ingredientGroup.title);
const optional = ref(props.ingredientGroup.optional);
</script>

<style scoped>

</style>