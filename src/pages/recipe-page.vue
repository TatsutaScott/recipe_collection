<template>
  <div id="recipe">
    <div class="title">
      <titleSection v-if="recipe" id="title" :title="recipe.title" :source="recipe.source" :time="recipe.time" :servings="recipe.servings" :tags="recipe.tags" />
    </div>
    <div class="details">
      <ingredientsSection v-if="recipe" id="ingredients" :ingredients="recipe.ingredients" />
      <directionsSection v-if="recipe" id="directions" :directions="recipe.directions" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

import titleSection from '../components/title_section.vue'
import ingredientsSection from '../components/ingredients_section.vue'
import directionsSection from '../components/directions_section.vue'

const props = defineProps({
  name: String
}); 

const recipe = ref(null);
import(`../static/${props.name}.json`)
  .then(data =>recipe.value = data);
</script>

<style lang="scss">
@import '@/assets/styles/globalStyles.scss';

#recipe{
  display: flex; 
  flex-direction: column;
}
.details{
  display: flex;
  flex-direction: row;
}
</style>