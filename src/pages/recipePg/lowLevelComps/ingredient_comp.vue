<template>
  <div class="ingredient">
    <div v-if="Array.isArray(props.amount)">
      <span>{{ props.amount[0].toString() }}</span>
      <span> - </span>
      <span>{{ props.amount[1].toString() }}</span>
    </div>
    <div v-else>
      <span>{{ props.amount.toString() }}</span>
    </div>
    <span class="unit">{{ props.unit ? props.unit.toLowerCase() : "" }}</span>
    <div>
      <span class="name">{{ props.name }}</span>
      <span class="note" v-if="props.note">{{ props.note }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// import Number_comp from "./number_comp.vue";

const props = defineProps(["name", "unit", "amount", "note"]);
</script>

<style lang="scss">
.ingredient {
  display: grid;
  grid-template-columns: 1fr 2fr 6fr;
  align-items: center;
  justify-content: left;
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.5rem;
  .name {
    font-weight: 550;
  }
}
.ingredient:hover {
  background-color: rgba(179, 179, 179, 0.424);
  border-radius: 5px;
}

span {
  font-size: 1rem;
}
</style>
