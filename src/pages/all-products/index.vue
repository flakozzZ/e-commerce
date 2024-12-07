<template>
  <div class="mt-14 flex flex-col gap-y-8">
    <div
        class="relative font-poppins font-semibold text-base before:content-[''] before:w-[20px] before:h-[40px] before:bg-red-600 before:absolute before:rounded before:-left-6 before:-top-2">
      {{ $t('all_products') }}
    </div>
    <cards :cards="productsByCategory" />
  </div>
</template>

<script setup lang="ts">

import Cards from "@/shared/ui/cards/index.vue";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axiosInstance from "@/app/providers/axios.ts";

const productsByCategory = ref([]);
const route = useRoute();

const fetchProductsByCategory = async () => {
  try {
    const { categoryId } = route.params;
    const response = await axiosInstance.get(`/v1/store/product/get-by-category-slug/${categoryId}/`);
    productsByCategory.value = response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
};

onMounted(fetchProductsByCategory);



</script>

<style scoped>

</style>