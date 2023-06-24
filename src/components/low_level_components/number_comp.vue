<template>
  <span>
    <span v-if="findWhole(num)">{{ findWhole(num) }}</span>
    <div v-if="findRemainder(num) > 0" class="frac">
      <span>{{ findRemainder(num) }}</span>
      <span class="symbol">/</span>
      <span class="bottom">{{ num.denominator }}</span>
    </div>
  </span>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { Fraction } from "fractional";

const props = defineProps(["val"]);

const num = ref(null);

if (typeof props.val == "number") {
  num.value = new Fraction(props.val);
} else if (typeof props.val == "object") {
  num.value = new Fraction(props.val.numerator, props.val.denominator);
}

function findWhole(fraction) {
  const { numerator, denominator } = fraction;
  if (numerator > denominator || numerator == denominator) {
    return Math.floor(numerator / denominator);
  } else {
    return 0;
  }
}

function findRemainder(fraction) {
  const { numerator, denominator } = fraction;
  return numerator % denominator;
}
</script>

<style lang="scss" scoped>
.frac {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  letter-spacing: 0.001em;
  text-align: center;
  width: fit-content;
}
.frac > span {
  display: block;
  padding: 0.1em;
  font-size: 0.75rem;
}
.frac span.bottom {
  border-top: thin solid black;
}
.frac span.symbol {
  display: none;
}
</style>
