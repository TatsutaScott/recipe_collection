<template>
    <div id="navDiv">
        <div id="navOptions">
            <router-link to="/index">index</router-link>
            
            <span class="navOption">about</span>
            <input type="search" id="search" class="navOption" placeholder="search">
        </div>
        <div id="siteTitle">
            <span>龍田食堂</span>
        </div>
        <div id="viewOptions">
                <span id="small">A</span>
                <span id="medium">A</span>
                <span id="large">A</span>
            
            <span @click="toggleDarkMode" v-if="darkMode" class="material-symbols-outlined">dark_mode</span>
            <span @click="toggleDarkMode" v-else class="material-symbols-outlined a">light_mode</span>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const darkMode = ref(false);
function toggleDarkMode(){
    darkMode.value = !darkMode.value;
}
</script>

<style lang="scss">
@import '../assets/styles/globalStyles.scss';
#nav{
    @include flex(column, flex-end, center);
    @include container;
}
#navOptions{
    @include flex(column, flex-start, left);
    @include basic;
    margin-bottom: 1rem;
    span {
        margin: .25rem 0;
        color: $color-weak;
    }
    span:hover {
        color: $color-text;
    }
    input{
        margin: .25rem 0;
    }
}
#viewOptions{
    @include flex(row, space-between, baseline);
    width:50%;
    color: $color-weak;
}
#small {
    font-size: $base-font-size * 0.75;
}

#medium {
    font-size: $base-font-size * 1;
}

#large {
    font-size: $base-font-size * 1.5;
}
#siteTitle{
    font-size: 2rem;
    color: $color-primary;
}
#search {
    border-radius: 5px;
    width: 10em;
    border: 1px solid $color-weak;
    appearance: none;
    outline: none;
}
#search::placeholder{
    color: $color-weak;
}
#search:focus{
    border: 2px solid $color-weak;
}
#search::-webkit-search-cancel-button {
    -webkit-appearance: none;
    position: relative;
    right: 1px;
    content: URL('../assets/icons/close_FILL0_wght400_GRAD0_opsz48.svg');
    width: 20px;
    height: 20px;
}
// #navDiv{
//     // position: fixed;
//     // top: 0;
//     // left: 0;
//     // @include flex(column);
//     width: 100%;
    
//     display: flex;
//     justify-content: flex-start;
//     flex-direction: column;
 
//     background-color: $color-white;
//     margin-left: 2em;
// }
// #siteTitle{
//     font-size: 4em;
//     font-family: 'Noto Sans JP', sans-serif;
//     margin: 0.5em 0;
//     color: $color-primary;
// }
// 

// #navOptions{
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
// }
// .navOption{
//     margin: 0.25em 0;
//     font-size: 1.5em;
//     color: lightgray;
// }
// .navOption:hover{
//     color: $color-weak;
// }
</style>