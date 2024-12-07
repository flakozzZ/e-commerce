<template>
  <div class="mt-14 flex flex-col gap-y-8">
    <div
        class="relative font-poppins font-semibold text-base before:content-[''] before:w-[20px] before:h-[40px] before:bg-red-600 before:absolute before:rounded before:-left-6 before:-top-2">
      {{ $t('all_products') }}
    </div>
    <cards :cards="products" />
  </div>
</template>

<script setup lang="ts">

import Cards from "@/shared/ui/cards/index.vue";
import axios from "axios";
import {onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";
import axiosInstance from "@/app/providers/axios.ts";



</script>

<style scoped>

</style>