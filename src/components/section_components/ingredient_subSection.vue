<template>
  <div class="subsection">
    <h3 class="subSectionTitle">
      {{ props.ingredientGroup.title }}
      <span class="note" v-if="props.ingredientGroup.notes">{{
        props.ingredientGroup.notes
      }}</span>
    </h3>

    <Ingredient_comp
      v-for="ingredient in props.ingredientGroup.contents"
      :key="ingredient.name"
      :note="ingredient.note"
      :name="ingredient.name"
      :amount="ingredient.amount"
      :unit="ingredient.unit"
    />
  </div>
</template>

<script setup>
import { defineProps, defineExpose } from "vue";
import Ingredient_comp from "../low_level_components/ingredient_comp.vue";

const props = defineProps({
  ingredientGroup: Object,
});

defineExpose({ hi });

function hi() {
  console.log(`${props.ingredientGroup.title} section loaded.`);
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
