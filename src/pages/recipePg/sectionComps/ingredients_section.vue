<template>
  <div id="ingredients">
    <div id="ingredientHeader">
      <h2>Ingredients</h2>
      <div id="multipliers">
        <span
          @click="
            activeMult = 'half';
            subIngredients.forEach((s) => s.multiplySection(0.5));
          "
          :class="[activeMult == 'half' ? 'active' : 'inactive', 'multButton']"
          >half</span
        >
        <span
          @click="
            activeMult = 'normal';
            subIngredients.forEach((s) => s.multiplySection(1));
          "
          :class="[
            activeMult == 'normal' ? 'active' : 'inactive',
            'multButton',
          ]"
          >normal</span
        >
        <span
          @click="
            activeMult = 'double';
            subIngredients.forEach((s) => s.multiplySection(2));
          "
          :class="[
            activeMult == 'double' ? 'active' : 'inactive',
            'multButton',
          ]"
          >double</span
        >
        <div
          id="custom"
          :class="[
            activeMult == 'custom' ? 'active' : 'inactive',
            'multButton',
          ]"
        >
          <span @click="activeMult = 'custom'">custom </span>
          <number
            v-if="activeMult == 'custom'"
            :value="1"
            :step="0.25"
            @input="(n) => subIngredients.forEach((s) => s.multiplySection(n))"
          />
        </div>
      </div>
      <!-- <button class="menuToggle" @click="toggleIngredients">{{ hideIngredients? '▼':'▲'}}</button> -->
    </div>
    <div id="ingredientList" :class="hideIngredients ? 'hide' : ''">
      <subsection
        v-for="ingredient in props.ingredients"
        :key="ingredient.title"
        :ingredientGroup="ingredient"
        ref="subIngredients"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import subsection from "@/pages/recipePg/sectionComps/ingredient_subSection.vue";

const props = defineProps({
  ingredients: Array,
});

const subIngredients = ref();

onMounted(() => {
  subIngredients.value.forEach((i) => {
    i.hi();
    i.multiplySection(1);
  });
});

const activeMult = ref("normal");

const hideIngredients = ref(false);
// function toggleIngredients(){
//     hideIngredients.value = !hideIngredients.value;
// }
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#ingredients {
  @include container;
  @include basic;
  @include flex(column, flex-start, flex-start);
  @include scroll;
  height: 100%;
}
#ingredientHeader {
  @include flex(row, space-between, center);
  background-color: $color-white;
  width: 100%;
}
#ingredientList {
  width: 100%;
}
#multipliers {
  @include flex(row, flex-end, center);
  span {
    margin-left: 0.25em;
  }
}

// .menuToggle {
//     border: none;
//     color: $color-weak;
//     background: none;
// }
// #ingredients{
//     margin: 2em 0;
// }
//
// #ingredientHeader>h2{
//     margin: 0.25em 0;
// }
#multipliers {
  margin: auto 0;
  display: flex;
  align-items: center;
}

.multButton {
  width: 75px;
  cursor: pointer;
  background-color: white;
  margin-left: 0.3em;
  text-align: center;
}

.active {
  // border: 1px solid $color-weak;
  border-radius: 0.75rem;
  background-color: $color-weak;
  color: $color-white;
  transition: background-color 1s 0.025s;
}
.basic {
  color: $color-weak;
  background-color: $color-white;
  padding: 0.125em 0.5em;
}
// #ingredientList{
//     display: grid;
//     grid-template-columns: 1fr 1fr;
// }

// #custom {
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// }
// #customValue {
//   margin-left: 1em;
//   max-width: 4em;
// }
// // .note{
// //     color: $color-weak;
// //     font-style: italic;
// //     font-weight: 50;
// //     font-size: 1em;
// //     margin-left: 1em;
// // }
</style>
