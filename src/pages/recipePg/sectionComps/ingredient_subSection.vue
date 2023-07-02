<template>
  <div class="subsection">
    <h3 class="subSectionTitle">
      {{ props.ingredientGroup.title }}
      <span class="note" v-if="props.ingredientGroup.notes">{{
        props.ingredientGroup.notes
      }}</span>
    </h3>

    <Ingredient_comp
      v-for="ingredient in ingredients.contents"
      :key="ingredient.name"
      :note="ingredient.note ? ingredient.note : null"
      :name="ingredient.name"
      :amount="ingredient.amount"
      :unit="ingredient.unit"
    />
  </div>
</template>

<script setup>
import { defineProps, defineExpose, ref } from "vue";
import Ingredient_comp from "@/pages/recipePg/lowLevelComps/ingredient_comp.vue";
import Frac from "@/pages/recipePg/js/Frac.js";

const props = defineProps({
  ingredientGroup: Object,
});

const ingredients = ref(JSON.parse(JSON.stringify(props.ingredientGroup)));
ingredients.value.contents.forEach((i) => {
  if (Array.isArray(i.amount)) {
    i.amount = [new Frac(i.amount[0]), new Frac(i.amount[1])];
  } else {
    i.amount = new Frac(i.amount);
  }
});

defineExpose({ hi, multiplySection });
multiplySection(1);
function hi() {
  console.log(`${props.ingredientGroup.title} section loaded.`);
}

function multiplySection(m) {
  ingredients.value.contents.forEach((i) => {
    if (Array.isArray(i.amount)) {
      i.amount[0].mult(m);
      i.amount[1].mult(m);
    } else {
      i.amount.mult(m);
    }
  });
}
</script>

<style scoped>
/* .subSectionTitle {
  font-size: 1em;
   width: 100%; 
}
 .amount{
    font-size: 112.5%;
} */
</style>
