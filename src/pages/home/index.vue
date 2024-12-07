<template>
  <div>
    <home-page></home-page>
  </div>
</template>

<script setup lang="ts">
import HomePage from '@/widgets/home-page/index.vue'
import {useCardStore} from "@/shared/ui/cards/index.ts";


const store = useCardStore()
</script>

<style scoped>

</style>