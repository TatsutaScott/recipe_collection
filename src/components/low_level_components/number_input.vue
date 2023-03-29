<template>
  <div class="inputWrap">
    <button class="dec" @click="dec">-</button>
    <input type="number" :value="currentValue" />
    <button class="inc" @click="inc">+</button>
  </div>
</template>

<script setup>
import { defineProps, watch, ref, defineEmits } from "vue";

const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
  },
});

const emit = defineEmits(["input"]);

const currentValue = ref(props.value);

watch("value", (val) => {
  this.currentValue = val;
});

function inc() {
  let newVal = currentValue.value + props.step;
  _updateValue(newVal);
}

function dec() {
  let newVal = currentValue.value - props.step;
  _updateValue(newVal);
}

function _updateValue(newVal) {
  currentValue.value = newVal;
  emit("input", currentValue.value);
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/globalStyles.scss";
.inputWrap {
  margin-left: 0.5em;
  padding: 0.125em;
}

button {
  border: none;
  background-color: $color-white;
  color: $color-weak;
}

.dec {
  border-radius: 4px 0 0 4px;
}
.inc {
  border-radius: 0 4px 4px 0;
}

input {
  width: 2em;
  border: none;
  color: $color-weak;
}

/* removing the arrows */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
