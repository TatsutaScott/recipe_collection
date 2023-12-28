<template>
  <div id="navDiv">
    <div id="navOptions">
      <router-link to="/index" class="plain">index</router-link>
      <router-link to="/about" class="plain">about</router-link>
    </div>
    <div id="siteTitle">
      <router-link to="/" class="plain"> 龍田<br />食堂 </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#navOptions {
  @include flex(column, flex-start, left);
  @include basic;
  margin-bottom: 1rem;
  span {
    margin: 0.25rem 0;
    color: $color-weak;
  }
  span:hover {
    color: $color-text;
  }
  input {
    margin: 0.25rem 0;
  }
}

#siteTitle {
  font-size: 2rem;
  color: $color-primary;
}
</style>
