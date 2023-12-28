<template>
  <router-link :to="`/recipe/${props.slug}`" class="recipeCardContainer plain">
    <h3 v-if="typeof props.title == 'string'" class="cardTitle main">
      {{ props.title }}
    </h3>
    <div else>
      <h3 class="cardTitle main">{{ props.title.foreign }}</h3>
      <span class="cardTitle sub">{{ props.title.english }}</span>
    </div>
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
  width: 250px;
  height: 75px;

  margin: 0.5rem 1rem 1rem 0;
  padding: 1rem;

  border: 1px solid black;
  border-radius: 5px;
  background-color: white;

  transition: all 0.5s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.recipeCardContainer:hover {
  background-color: rgba(191, 191, 191, 0.2);
}
.cardTitle {
  margin: 0;
}
.main {
  font-size: 1.25rem;
}
.sub {
  font-size: 0.9rem;
  color: gray;
}
.cardTag {
  margin-right: 0.25rem;
  padding: 0.25rem;

  font-size: 0.75rem;

  border: 1px solid black;
  border-radius: 5px;

  background-color: white;
}
.tagContainer {
  margin: 0.5rem 0;
}
</style>
