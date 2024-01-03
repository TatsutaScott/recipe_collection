<template>
  <div id="nav-div" :class="{ hide_nav: showNavbar }">
    <div id="nav-options">
      <router-link to="/index" class="plain">index</router-link>
      <router-link to="/about" class="plain">about</router-link>
    </div>
    <div id="site-title">
      <router-link to="/" class="plain"> 龍田食堂 </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showNavbar = ref(false); // eslint-disable-line no-unused-vars

window.addEventListener("scroll", onScroll);
let lastScrollPosition;

function onScroll() {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;
  // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
  if (currentScrollPosition < 0) {
    return;
  }
  // Here we determine whether we need to show or hide the navbar
  showNavbar.value = currentScrollPosition > lastScrollPosition;
  // Set the current scroll position as the last scroll position
  lastScrollPosition = currentScrollPosition;
}
</script>

<style lang="scss">
@import "@/assets/styles/globalStyles.scss";

#site-title {
  font-size: 2rem;
  text-align: center;
}

#nav-options {
  a {
    transition: 0.5s;
  }
  a:hover {
    margin: 0.5rem 0;
    border-width: 2px;
    border-style: solid none;
  }
}

@include mobile {
  #nav-options {
    font-size: 1rem;
    @include flex(row, center, center);
    a {
      margin: 0.5rem 0.75rem;
    }
  }
  #nav {
    @include flex(column-reverse, flex-end, center);
    position: sticky;
    top: 0;
    transition: all 0.5s;
    background-color: white;
  }
  .hide_nav {
    transform: translateY(-200px);
  }
}

@include desktop {
  #nav {
    @include flex(column, flex-end, center);
  }
  #nav-options {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    @include flex(column, flex-start, center);
  }
  #site-title {
    font-size: 2rem;
    padding: 0.5rem;
    line-height: 105%;
  }
}
</style>
