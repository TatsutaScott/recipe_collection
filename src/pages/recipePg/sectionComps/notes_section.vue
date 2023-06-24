<template>
  <div id="notes">
    <h2>Notes:</h2>
    <div id="notesList">
      <Note
        v-for="note in props.notes"
        :title="note.title"
        :content="note.content"
        :key="note.title"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import Note from "@/pages/recipePg/lowLevelComps/note_comp.vue";

const props = defineProps({
  notes: Array,
});
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#notes {
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  height: 100%;
}
#notesList {
}
</style>
