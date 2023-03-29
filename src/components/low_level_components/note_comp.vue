<template>
  <div class="noteComp">
    <p class="noteTitle">{{ props.title }}</p>
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  content: String,
});
</script>

<style lang="scss">
.noteComp {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.noteTitle {
  margin-right: 1rem;
}
.noteContent {
}
</style>
