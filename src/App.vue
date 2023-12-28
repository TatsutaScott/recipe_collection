<template>
  <div id="main">
    <navSection id="nav" />
    <RouterView id="content" :class="{ mobile: isMobile }"></RouterView>
  </div>
</template>

<script setup>
import navSection from "./components/section_components/nav_section.vue";
import { ref } from "vue";

const width_cutoff = 500;
const isMobile = ref(window.innerWidth < width_cutoff);
</script>

<style lang="scss">
@import "./assets/styles/globalStyles.scss";

#nav {
  @include container;

  top: 0px;
  box-sizing: border-box;
}

#main {
  margin: 0;
  padding: 0;

  display: flex;
}

@include mobile {
  #nav {
    @include flex(row, flex-end, center);

    position: static;
    height: 150px;
    width: 100vw;
  }
  #main {
    @include flex(column, flex-start, flex-start);
  }
}

@include desktop {
  #nav {
    @include flex(column, flex-end, center);

    position: sticky;
    height: 100vh;
    width: 150px;
  }
  #main {
    @include flex(row, flex-start, flex-start);
  }
}

#content {
  width: 100%;
}
</style>
