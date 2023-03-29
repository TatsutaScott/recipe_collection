<template>
  <div id="recipe">
    <div id="titleContainer">
      <titleSection
        v-if="recipe"
        id="titleSection"
        :title="recipe.title"
        :source="recipe.source"
        :time="recipe.time"
        :servings="recipe.servings"
        :tags="recipe.tags"
        :date="recipe.date"
      />
    </div>

    <div id="detailsContainer">
      <ingredientsSection
        v-if="recipe"
        id="ingredientsSection"
        :ingredients="recipe.ingredients"
      />

      <directionsSection
        v-if="recipe"
        id="directionsSection"
        :directions="recipe.directions"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

import titleSection from "../components/title_section.vue";
import ingredientsSection from "../components/ingredients_section.vue";
import directionsSection from "../components/directions_section.vue";

const props = defineProps({
  name: String,
});

const recipe = ref(null);
import(`../static/${props.name}.json`).then((data) => (recipe.value = data));
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#recipe {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 4fr;
  overflow-y: hidden;
}
// #titleContainer{}
#detailsContainer {
  display: flex;
  flex-direction: row;
  height: 87.5vh;
}

#titleContainer {
  @include container();
  height: 12.5vh;
}

#ingredientsSection {
  @include container();
}
#directionsSection {
  @include container();
}
</style>
