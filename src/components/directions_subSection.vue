<template>
  <div>
    <h3>{{ props.title }}</h3>
    <ol>
      <li v-for="direction in props.steps" :key="direction" class="step">
        <p v-if="typeof direction == 'string'">{{ direction }}</p>
        <div v-else-if="typeof direction == 'object'">
          <p>{{ direction.step }}</p>
          <p class="note">{{ direction.note }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  steps: Array,
});
</script>

<style scoped lang="scss">
.step {
  font-size: 1rem;
  line-height: 150%;
  letter-spacing: 0.25px;
  .note {
    text-align: right;
  }
}
li {
  margin: 0.5em 0;
}
</style>
