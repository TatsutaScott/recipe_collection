<template>
  <div id="index">
    <h1>index</h1>
    <div id="cardGallery">
      <recipeCard
        v-for="recipe in data.recipes"
        :key="recipe.id"
        :title="recipe.title"
        :tags="recipe.tags"
        :slug="recipe.slug"
      />
    </div>
  </div>
</template>

<script setup>
import data from "@/static/tableOfContents.json";
import recipeCard from "@/components/low_level_components/recipe_card.vue";
</script>

<style lang="scss">
#index {
  padding: 2rem;
}
#cardGallery {
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
