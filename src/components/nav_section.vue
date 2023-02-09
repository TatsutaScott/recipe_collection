<template>
    <div id="navDiv">
        <div id="siteTitle">
            <span>TITLE</span>
        </div>
        
        <div id="navOptions">
            <span class="navOption">index</span>
            <span class="navOption">about</span>
            <input type="search" id="search" class="navOption" placeholder="search">
        </div>
        
    </div>
</template>

<script setup>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@900&display=swap');
@import '../assets/styles/globalStyles.scss';

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
// #search{
//     border-radius: 5px;
//     width: 10em;
//     border: 1px solid lightgray;
//     appearance: none;
//     outline: none;
// }
// #search::placeholder{
//     color: lightgray;
// }
// #search:focus{
//     border: 2px solid lightgray;
// }
// #search::-webkit-search-cancel-button {
//     -webkit-appearance: none;
//     position: relative;
//     right: 1px;
//     content: URL('../assets/icons/close_FILL0_wght400_GRAD0_opsz48.svg');
//     width: 20px;
//     height: 20px;
// }

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