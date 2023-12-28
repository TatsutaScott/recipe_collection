<template>
  <div>
    <div id="index-container">
      <div id="index-header">
        <h1>Recipe Index</h1>
        <p>
          ** In the future this section will include controls to sort and search
          through recipes **
        </p>
      </div>
      <div id="card-gallery">
        <recipeCard
          v-for="recipe in data.recipes"
          :key="recipe.id"
          :title="recipe.title"
          :tags="recipe.tags"
          :slug="recipe.slug"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "@/static/tableOfContents.json";
import recipeCard from "@/components/low_level_components/recipe_card.vue";
</script>

<style lang="scss">
#index-container {
  padding-left: 2rem;
}

#card-gallery {
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
