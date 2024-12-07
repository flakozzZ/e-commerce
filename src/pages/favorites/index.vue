<template>
  <div class="mt-8">
    <div
        v-if="favoriteCards.length > 0"
        class="relative font-poppins font-semibold text-base before:content-[''] before:w-[20px] before:h-[40px] before:bg-red-600 before:absolute before:rounded before:-left-6 before:-top-2">
      {{ $t('favorites') }}
      <cards class="mt-8" :cards="favoriteCards"/>
    </div>
    <div class="text-3xl p-3 text-center flex justify-center items-center" v-else>
      {{ $t('emptyFavorites') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Cards from "@/shared/ui/cards/index.vue";
import { useCardStore } from "@/shared/ui/cards/index.ts";
import { storeToRefs } from "pinia";

const store = useCardStore();
const { favoriteCards } = storeToRefs(store);
</script>

<style scoped>
</style>
