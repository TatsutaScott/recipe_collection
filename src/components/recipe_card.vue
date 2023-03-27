<template>
  <router-link :to="`/recipe/${props.slug}`" class="recipeCardContainer">
    <h3 class="cardTitle">{{ props.title }}</h3>
    <div class="tagContainer">
      <span class="cardTag" v-for="tag in props.tags" :key="tag">{{
        tag
      }}</span>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  tags: Array,
  slug: String,
});
</script>

<style scoped lang="scss">
.recipeCardContainer {
  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 20px;
  color: black;
  text-decoration: none;
  background-color: white;
}
.recipeCardContainer:hover {
  background-color: lightgray;
}
.cardTitle {
  margin: 0;
  font-size: 1.5rem;
}
.cardTag {
  margin-right: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem;
  border: 1px solid black;
  border-radius: 10px;
}
.tagContainer {
  margin: 0.5rem 0;
}
</style>
