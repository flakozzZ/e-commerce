<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row mt-14 gap-8 lg:gap-24">
      <main-nav class="flex-none"/>
      <carousel :carousel="items" class="flex-1"/>
    </div>

    <div class="mt-14 flex flex-col gap-y-8">
      <div
          class="relative font-poppins font-semibold text-base before:content-[''] before:w-5 before:h-10 before:bg-red-600 before:absolute before:rounded before:-left-6 before:-top-2">
        {{ $t('today_products') }}
      </div>
      <cards :cards="limitedCardItems" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainNav from "@/widgets/nav/index.vue";
import Carousel from "@/shared/ui/carousel/index.vue";
import Cards from "@/shared/ui/cards/index.vue";
import axios from "axios";
import {useI18n} from "vue-i18n";
import {ref, onMounted, computed, watch} from "vue";
import axiosInstance from "@/app/providers/axios.ts";
import {CategoriesType} from "@/app/types/CategoryTypes.ts";
import {ProductTypes} from "@/app/types/ProductTypes.ts";

interface ICarousel {
  logo: string;
  name: string;
  description: string;
  img: string;
  link?: string;
}

interface ICard {
  logo: string;
  name: string;
  description: string;
  img: string;
}

const locale = useI18n().locale;
const items = ref<ICarousel[]>([]);
const cardItems = ref<ICard[]>([]);

const limit = ref<number>(4);

const fetchCarouselAndCardItems = async () => {
  try {
    const response = await axios.get(`/locales/${locale.value}.json`);
    items.value = response.data.carousel;
    cardItems.value = response.data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchCarouselAndCardItems();
});

watch(() => locale.value, () => {
  fetchCarouselAndCardItems();
});

const products = ref<ProductTypes[]>([]);
const categories = ref<CategoriesType[]>([]);
const fetchCategories = async () => {
  try {
    const response = await axiosInstance.get<CategoriesType[]>('/v1/store/category/get-all/');
    categories.value = response.data;
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

const fetchProductsByCategories = async (fetchedCategories: CategoriesType[]) => {
  try {
    const allProducts = [];
    for (const category of fetchedCategories) {
      const response = await axiosInstance.get(
          `/v1/store/product/get-by-category-slug/${category.slug}/`
      );
      allProducts.push(...response.data);
    }
    products.value = allProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

onMounted(async () => {
  const fetchedCategories = await fetchCategories();
  await fetchProductsByCategories(fetchedCategories);
})


const limitedCardItems = computed(() => {
  return products.value.slice(0, limit.value);
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
