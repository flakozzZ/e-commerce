<template>
  <div class="container mx-auto">
    <main-header/>
  </div>
  <hr class="mt-4">
  <div class="container mx-auto">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import MainHeader from "@/widgets/header/index.vue";
</script>

<style scoped>

</style>