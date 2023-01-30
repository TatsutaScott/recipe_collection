<template>
  <navSection />
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
  import navSection from './components/nav_section.vue'
  import titleSection from './components/title_section.vue'
  import ingredientsSection from './components/ingredients_section.vue'
  import directionsSection from './components/directions_section.vue'
</script>

<style>
body{
  font-family: Helvetica;
  background-color: white;
  margin: 0;
}

#main{
  padding:2em 4em;
  max-width:800px;
  margin: 0 auto;
  background-color: white;
  
}
</style>
