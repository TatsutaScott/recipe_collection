<template>
    <span>{{ props.value }}</span>
</template>

<script setup>
import { defineProps} from 'vue'
// import { Fraction } from 'fractional'

const props = defineProps({
   value: Number 
});
</script>

<style>
</style>