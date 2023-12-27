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

    <div
      id="detailsContainer"
      :class="recipe.notes ? 'sixEighths' : 'sevenEighths'"
    >
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
    <div id="notesContainer" v-if="recipe.notes">
      <notesSection :notes="recipe.notes" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

import titleSection from "@/pages/recipePg/sectionComps/title_section.vue";
import ingredientsSection from "@/pages/recipePg/sectionComps/ingredients_section.vue";
import directionsSection from "@/pages/recipePg/sectionComps/directions_section.vue";
import notesSection from "@/pages/recipePg/sectionComps/notes_section.vue";

const props = defineProps({
  name: String,
});

const recipe = ref(null);
import(`../../static/recipes/${props.name}.json`).then(
  (data) => (recipe.value = data)
);
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#recipe {
  height: 100vh;
  display: grid;
  overflow-y: hidden;
}
// #titleContainer{}
#detailsContainer {
  display: flex;
  flex-direction: row;
}

#titleContainer {
  @include container();
  @include flex(row, space-between, center);
  height: 12.5vh;
}
#notesContainer {
  @include container();
  height: 12.5vh;
}
.sevenEighths {
  height: 87.5vh;
}

.sixEighths {
  height: 75vh;
}
#ingredientsSection {
  @include container();
}
#directionsSection {
  @include container();
}
</style>
