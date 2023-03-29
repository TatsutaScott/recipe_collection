<template>
  <div id="titleSection">
    <h1>{{ props.title }}</h1>
    <div id="infoSection">
      <div class="info">
        <span class="descriptor">Source: </span>
        <a v-if="isURL(props.source)" :href="props.source" class="plain link"
          >link</a
        >
        <span v-else>{{ props.source }}</span>
      </div>
      <div class="info">
        <span class="descriptor">Time: </span>
        <span>{{ `${props.time.amount} ${props.time.unit}` }}</span>
      </div>
      <div class="info">
        <span class="descriptor">Makes: </span>
        <span>{{ `${props.servings.amount} ${props.servings.unit}` }}</span>
      </div>
      <div class="info">
        <span class="descriptor">Date: </span>
        <span>{{ `${dateToString(props.date)}` }}</span>
      </div>
      <div class="info">
        <span class="descriptor">Tags: </span>
        <span class="chip" v-for="tag in props.tags" :key="tag">
          {{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  source: String,
  time: Object,
  servings: Object,
  date: Array,
  tags: Array,
});

function isURL(text) {
  return text.slice(0, 4) == "http";
}

function monthToString(monthNumber) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error("Invalid month number.");
  }

  return monthNames[monthNumber - 1];
}

function dateToString(dateArray) {
  return `${monthToString(dateArray[1])} ${dateArray[0]}, ${dateArray[2]}`;
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/globalStyles.scss";

#titleSection {
  @include basic;
  @include flex(row, space-between, center);
}

h1 {
  font-size: 2em;
  margin: 0;
  padding: 0;
}

#infoSection {
  @include flex(row);
  margin-left: 3em;
}

.info {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
}
.descriptor {
  color: $color-weak;

  margin-right: 0.25rem;
}
</style>
