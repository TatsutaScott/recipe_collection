<template>
  <div id="titleSection">
    <h1>{{ props.title }}</h1>
    <div id="infoSection">
      <div class="info">
        <span class="descriptor">Source: </span>
        <a v-if="isURL(props.source)" :href="props.source">link</a>
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
        <span class="tag" v-for="tag in props.tags" :key="tag"> {{ tag }}</span>
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

<style lang="scss">
@import "../assets/styles/globalStyles.scss";
#title {
  @include container;
  @include flex;

  // padding: auto 2rem !important;
}
#titleSection {
  // margin: auto 2rem;
  @include basic;
  @include flex(row, flex-start, baseline);
}
#infoSection {
  @include flex(row);
  margin-left: 3em;
}
h1 {
  font-size: 3em;
  margin: 0;
}
.tag {
  font-size: 0.75em;
  padding: 0.125em 0.5em;
  margin-right: 0.5em;
  border: 1px solid $color-weak;
  border-radius: 5px;
  background-color: $color-weak;
  color: white;
  transition: background-color 0.25s ease-out 50ms;
}
.tag:hover {
  background-color: black;
  border: 1px solid black;
}

.info {
  margin-right: 1em;
  display: flex;
  align-items: center;
}
.descriptor {
  color: $color-weak;
  font-size: 1em;
  margin-right: 0.25em;
}
</style>
