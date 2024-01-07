<template>
  <div id="main">
    <navSection id="nav" />
    <RouterView id="content"></RouterView>
  </div>
</template>

<script setup>
import navSection from "./components/section_components/nav_section.vue";
</script>

<style lang="scss">
@import "./assets/styles/globalStyles.scss";

#main {
  margin: 0;
  padding: 0;

  display: flex;
}

#content {
  width: 100%;
}
#nav {
  @include container;
  box-sizing: border-box;
}

@include mobile {
  #nav {
    width: 100vw;
    padding: 1rem;
  }
  #main {
    @include flex(column, flex-start, flex-start);
  }
}

@include desktop {
  #nav {
    position: sticky;
    height: 100vh;
    width: 150px;
  }
  #main {
    @include flex(row, flex-start, flex-start);
  }
}
</style>
