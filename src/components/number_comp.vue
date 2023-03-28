<template>
  <span>
    <!-- if its a whole number -->
    <span v-if="whole > 0">{{ whole }}</span>

    <!-- if its a fraction -->
    <span v-if="denominator > 1" class="frac">
      <sup>{{ numerator }}</sup>
      <span>&frasl;</span>
      <sub>{{ denominator }}</sub>
    </span>
  </span>
</template>

<script setup>
import { defineProps, ref, defineExpose } from "vue";
import { Fraction } from "fractional";

const props = defineProps({
  val: Number,
});
defineExpose({
  multiply,
});

let num = new Fraction(props.val);
const denominator = ref(num.denominator);
const numerator = ref(findNumerator(num));
const whole = ref(findWhole(num));

// const num = new Fraction(props.val);
// const denominator = ref(num.denominator);
// const numerator = ref(findNumerator(num));
// const whole = ref(findWhole(num));

function findWhole(frac) {
  return frac.numerator > frac.denominator ||
    frac.numerator === frac.denominator
    ? Math.floor(frac.numerator / frac.denominator)
    : 0;
}

function findNumerator(frac) {
  const thing =
    frac.numerator > frac.denominator
      ? frac.numerator % frac.denominator
      : frac.numerator;
  console.log(thing);
  return thing;
}

function multiply(mult) {
  num = new Fraction(props.val * mult);
  denominator.value = num.denominator;
  numerator.value = findNumerator(num);
  whole.value = findWhole(num);
}
</script>

<style lang="scss" scoped>
@mixin subSup {
  display: block;
  font: inherit;
  padding: 0 0.3em;
  font-size: 75%;
}
.frac {
  display: inline-block;
  text-align: center;
  vertical-align: middle;

  sub {
    @include subSup;
  }
  sup {
    @include subSup;
    border-bottom: 0.08em solid;
  }
  span {
    display: none;
  }
}
</style>
