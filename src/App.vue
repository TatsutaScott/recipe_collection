<template>
  <div id="main">
    <titleSection
      :title="recipe.title" 
      :source="recipe.source" 
      :time="recipe.time" 
      :servings="recipe.servings"
      :tags="recipe.tags" 
    />
    <ingredientsSection
      :ingredients="recipe.ingredients"
    />
    <directionsSection
      :directions="recipe.directions"
    />
  </div>
 
</template>

<script setup>
  import recipe from './static/baked_beans.json';
  import titleSection from './components/title_section.vue'
  import ingredientsSection from './components/ingredients_section.vue'
  import directionsSection from './components/directions_section.vue'
</script>

<style>
body{
  font-family: Helvetica;
  margin: 2em;
}
#main{
  max-width:800px;
  margin: 0 auto;
}
</style>
