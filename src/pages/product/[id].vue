<template>
  <div class="mt-32">
    <card-detail :cards="cardItems" />
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import CardDetail from "@/shared/ui/card-detail/index.vue";
import {useI18n} from "vue-i18n";

const cardItems = ref([]);
const route = useRoute();

const fetchProductBySlug = async () => {
  try {
    const { categoryId, productId } = route.params;
    const response = await axios.get(`/v1/store/category/${categoryId}/product/${productId}/`);
    product.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
};

onMounted(() => {
  fetchProductBySlug();
})
</script>

<style scoped>
/* Ваши стили */
</style>
