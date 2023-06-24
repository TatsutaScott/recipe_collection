<template>
  <div id="directions">
    <div id="directionsTitle">
      <h2>Directions</h2>
    </div>
    <Directions_subSection
      v-for="section in props.directions"
      :key="section.title"
      :title="section.title"
      :steps="section.steps"
    />
  </div>
</template>

<script setup>
import Directions_subSection from "@/pages/recipePg/sectionComps/directions_subSection.vue";
import { defineProps } from "vue";
const props = defineProps({
  directions: Object,
});
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

h2 {
  margin: 0;
  text-align: left;
}
</style>
