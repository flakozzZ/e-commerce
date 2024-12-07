<template>
  <div class="flex flex-col md:flex-row font-poppins mt-8 md:mt-16 p-4">
    <div class="flex-1 md:mr-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-6">{{ $t('checkoutTitle') }}</h1>
      <form>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">{{ $t('name') }}</label>
          <v-input id="name" type="text" class="mt-1"/>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">{{ $t('email') }}</label>
          <v-input id="email" type="email" class="mt-1"/>
        </div>
        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-700">{{ $t('address') }}</label>
          <v-input id="address" type="text" class="mt-1"/>
        </div>
        <div class="mb-4">
          <label for="payment" class="block text-sm font-medium text-gray-700">{{ $t('paymentMethod') }}</label>
          <select id="payment" name="payment" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>{{ $t('bankTransfer') }}</option>
            <option>{{ $t('cash') }}</option>
          </select>
        </div>
        <div class="flex justify-center md:justify-end">
          <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{{ $t('placeOrder') }}</button>
        </div>
      </form>
    </div>
    <div class="flex-1 mt-8 md:mt-0">
      <h2 class="text-xl md:text-2xl font-semibold mb-4 font-poppins">{{ $t('orderSummary') }}</h2>
      <div class="space-y-4">
        <div v-for="item in product" :key="item.id" class="flex justify-between items-center">
          <img class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" :src="item.photo" :alt="item.title">
          <div class="flex-1 ml-2 md:ml-4 font-poppins">{{ item.title }}</div>
          <div class="font-poppins">₸{{ item.price }}</div>
        </div>
        <div class="flex justify-between font-poppins">
          <span>{{ $t('subtotal') }}</span>
          <span>₸{{ calculateSubtotal() }}</span>
        </div>
        <div class="flex justify-between font-poppins">
          <span>{{ $t('shipping') }}</span>
          <span>{{ $t('free') }}</span>
        </div>
        <div class="flex justify-between font-poppins">
          <span>{{ $t('total') }}</span>
          <span>₸{{ calculateTotal() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VInput from "@/shared/ui/v-input/index.vue";
import { useCardStore } from "@/shared/ui/cards/index.ts";
import { storeToRefs } from "pinia";

const store = useCardStore();
const { product } = storeToRefs(store);

const calculateSubtotal = () => {
  return product.value.reduce((total, item) => total + (item.price * item.stock), 0);
};

// Метод для динамического подсчета общей суммы (включая доставку)
const calculateTotal = () => {
  const subtotal = calculateSubtotal();
  // В данном примере доставка бесплатная, поэтому общая сумма равна подытогу
  return subtotal;
};
</script>

<style scoped>
.space-y-4 > * {
  display: flex;
  justify-content: space-between;
}
</style>
