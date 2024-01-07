<template>
  <div id="titleSection">
    <h1 v-if="typeof props.title == 'string'" id="main-title">
      {{ props.title }}
    </h1>
    <div id="title-heading" v-else>
      <h1 id="main-title">{{ props.title.foreign }}</h1>
      <h2 id="sub-title">{{ props.title.english }}</h2>
    </div>

    <div id="infoSection">
      <div class="info" id="source">
        <span class="descriptor">Source: </span>
        <a v-if="isURL(props.source)" :href="props.source" class="plain link"
          >link</a
        >
        <span v-else>{{ props.source }}</span>
      </div>
      <div class="info" id="time">
        <span class="descriptor">Time: </span>
        <span>{{ `${props.time.amount} ${props.time.unit}` }}</span>
      </div>
      <div class="info" id="servings">
        <span class="descriptor">Makes: </span>
        <span>{{ `${props.servings.amount} ${props.servings.unit}` }}</span>
      </div>
      <div class="info" id="date">
        <span class="descriptor">Date: </span>
        <span>{{ `${dateToString(props.date)}` }}</span>
      </div>
      <div class="info" id="tags">
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

@include mobile {
  #titleSection {
    margin-bottom: 1rem;
    h1 {
      margin: 0;
    }
    h2 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
      color: gray;
    }
  }

  #infoSection {
    @include flex(row, start, center);
    flex-wrap: wrap;
    row-gap: 0.25rem;
    column-gap: 1rem;
    padding: 0.5rem 0;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
}
</style>
