<template>
  <div class="flex flex-col md:flex-row justify-center items-center md:items-stretch mb-8 p-4">
    <div class="w-full md:w-[500px] md:h-[600px] bg-gray-100 flex justify-center items-center mb-4 md:mb-0">
      <img class="w-full h-[400px]" :src="product.photo" alt="Product Image">
    </div>
    <div class="w-full md:w-[600px] mx-auto md:ml-8">
      <div class="font-inter text-xl md:text-2xl font-semibold text-center md:text-left mb-4">{{ product.title }}</div>
      <div class="flex gap-1 justify-center md:justify-start items-center mb-4">
        <template v-for="star in 5" :key="star">
          <v-icon :name="getStarIcon(product.rating, star)" class="text-[#F59E0B]"/>
        </template>
        <div class="flex items-center md:ml-4">
          <div class="font-poppins text-xs text-gray-500">{{ product.stock }} {{ $t('reviews') }}</div>
          <div class="mx-2">|</div>
          <div class="text-[#00FF66] font-poppins text-sm">{{ $t('inStock') }}</div>
        </div>
      </div>
      <div class="font-poppins text-lg md:text-xl text-center md:text-left mb-4">₸{{ calculatedPrice(product) }}</div>
      <div class="font-poppins text-base md:text-lg mb-4 text-center md:text-left">{{ product.description }}</div>
      <hr class="mb-4">
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-start mb-4">
        <div class="flex mt-4 border rounded w-full md:w-[220px]">
          <button class="w-1/3 h-[44px] flex justify-center items-center" @click="decreaseQuantity">
            <v-icon name="minus"/>
          </button>
          <input type="number" class="quantity-input w-1/3 h-[44px] text-[#000000] border-l border-r-0 text-center"
                 v-model.number="quantity" min="1">
          <button class="w-1/3 h-[44px] bg-red-600 flex justify-center items-center" @click="increaseQuantity">
            <v-icon name="plus"/>
          </button>
        </div>
        <div class="flex gap-4">
          <div class="mt-4 md:ml-4">
            <v-button @click="buy(product)" type="secondary" size="lg">{{ $t('shop') }}</v-button>
          </div>
          <div class="w-[40px] h-[40px] border flex justify-center items-center mt-4 md:ml-4">
            <v-icon @click="handleFavorite(product)" class="cursor-pointer" name="favorites"
                    :fill="favorite(product) ? 'red' : 'white'"/>
          </div>
        </div>
      </div>

      <div class="w-full md:w-[399px] h-[180px] border rounded flex flex-col justify-between mb-4">
        <div class="flex gap-3 p-4 items-center h-[90px]">
          <div>
            <v-icon name="delivery"/>
          </div>
          <div>
            <div class="font-poppins text-base font-medium">
              {{ $t('freeShippingTitle') }}
            </div>
            <div class="font-poppins text-xs font-medium underline">
              {{ $t('freeShippingText') }}
            </div>
          </div>
        </div>
        <hr>
        <div class="flex gap-3 p-4 items-center h-[90px]">
          <div>
            <v-icon name="return"/>
          </div>
          <div>
            <div class="font-poppins text-base font-medium">
              {{ $t('returnPolicyTitle') }}
            </div>
            <div class="font-poppins text-xs font-medium underline">
              {{ $t('returnPolicyText') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VIcon from "@/shared/ui/v-icon/index.vue";
import {onMounted, ref} from "vue";
import VButton from "@/shared/ui/button/index.vue";
import {useCardStore} from "@/shared/ui/cards/index.ts";
import {useRoute, useRouter} from "vue-router";
import {ProductTypes} from "@/app/types/ProductTypes.ts";
import axiosInstance from "@/app/providers/axios.ts";


interface Props {
  cards: ProductTypes[]
}

withDefaults(defineProps<Props>(), {})

const quantity = ref(1)

const store = useCardStore()
const router = useRouter()
const {toggleFavorite, isFavorite, addToCart} = store

const getStarIcon = (rating, starIndex) => {
  if (starIndex <= Math.floor(rating)) {
    return 'active-star'; // Full star
  } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
    return 'semi-active-star'; // Half star
  } else {
    return 'star'; // Inactive star
  }
};

const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const calculatedPrice = (product: ProductTypes) => {
  return (product.price * quantity.value).toFixed(2);
}

const handleFavorite = (product: ProductTypes) => {
  toggleFavorite(product)
}

const favorite = (product: ProductTypes) => {
  return isFavorite(product)
}

const buy = (product: ProductTypes) => {
  addToCart(product)
  router.push('/checkout')

}

const route = useRoute();

const product = ref({
  id: 0,
  title: "",
  slug: "",
  price: 0,
  is_available: false,
  description: "",
  stock: 0,
  category: {
    id: 0,
    title: "",
    slug: "",
    description: "",
    sub_categories: []
  },
  photo: "",
  rating: 0,
})
const fetchProductBySlug = async () => {
  try {
    const {categoryId, productId} = route.params;
    const response = await axiosInstance.get(`/v1/store/category/${categoryId}/product/${productId}/`);
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
.size-btn {
  padding: 8px 12px;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;
}

.size-btn:hover {
  background-color: #f0f0f0;
}

.size-btn:focus,
.size-btn:active {
  background-color: #EF4444; /* Red */
}

.quantity-input {
  -webkit-appearance: none; /* Safari и Chrome */
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield;
  text-align: center;
}

.quantity-input::-webkit-inner-spin-button,
.quantity-input::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Safari и Chrome */
  margin: 0; /* Удаление внутренних отступов */
}
</style>

