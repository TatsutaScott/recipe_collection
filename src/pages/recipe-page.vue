<template>
    <div id="content">
        <h1>recipe</h1>
        <!-- <titleSection id="title" :title="recipe.title" :source="recipe.source" :time="recipe.time" :servings="recipe.servings" :tags="recipe.tags" />
    <ingredientsSection id="ingredients" :ingredients="recipe.ingredients" />
    <directionsSection id="directions" :directions="recipe.directions" /> -->
    </div>
</template>

<script setup>
// import {router} from './main'
// // import recipe from './static/baked_beans.json';
// import navSection from './components/nav_section.vue'
  // import titleSection from './components/title_section.vue'
  // import ingredientsSection from './components/ingredients_section.vue'
  // import directionsSection from './components/directions_section.vue'
</script>

<style lang="scss">
@import './assets/styles/globalStyles.scss';

#content {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    grid-template-rows: 1fr 5fr;
    grid-template-areas:
        "n t t"
        "n i d";
}

#nav {
    grid-area: n;
}

#ingredients {
    grid-area: i;
}

#title {
    grid-area: t;
}

#directions {
    grid-area: d;
}

body {
    overflow: hidden;
    margin: 0;
    font-family: $base-font;
}

