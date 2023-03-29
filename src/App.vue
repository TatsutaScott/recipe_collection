<template>
  <div id="content">
    <navSection id="nav" />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import navSection from "./components/nav_section.vue";
</script>

<style lang="scss">
@import "./assets/styles/globalStyles.scss";

#content {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: 1fr 6fr;
  // overflow: hidden;
}

body {
  // overflow: hidden;
  margin: 0;
  font-family: $base-font;
}
// body {
//   font-family: Helvetica;
//   background-color: white;
//   color: black;
//   margin: 0;
// }
// // body::-webkit-scrollbar{
// //   width: 4em;
// // }
// #main{
//   padding:2em 4em;
//   max-width:800px;
//   margin: 0 auto;
//   background-color: $color-white;
//   filter: drop-shadow(0 0 0.5rem lightgrey);
//   border-radius:0 0 15px 15px ;
//   margin-bottom: 2em;
// }
// .hide{
//   display: none !important;
//   opacity: 0;
//   transition: opacity 1s;
// }
</style>
