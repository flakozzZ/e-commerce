<template>
  <div v-for="(card, index) in cards" :key="index" class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-100">
      <tr>
        <th scope="col" class="px-16 py-3">
          <span class="sr-only">{{ $t('image') }}</span>
        </th>
        <th scope="col" class="px-6 py-3">
          {{ $t('product') }}
        </th>
        <th scope="col" class="px-6 py-3">
          {{ $t('quantity') }}
        </th>
        <th scope="col" class="px-6 py-3">
          {{ $t('price') }}
        </th>
        <th scope="col" class="px-6 py-3">
          {{ $t('action') }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="p-4">
          <img :src="card.img" class="w-16 md:w-32 max-w-full max-h-full" :alt="card.name">
        </td>
        <td class="px-6 py-4 font-semibold text-gray-900">
          {{ card.name }}
        </td>
        <td class="px-6 py-4">
          <div class="flex items-center">
            <button
                class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                type="button" @click="decreaseQuantity(card)">
              <span class="sr-only">{{ $t('decreaseQuantity') }}</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
              </svg>
            </button>
            <div>
              <input type="number" v-model="card.quantity"
                     class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1"
                     required/>
            </div>
            <button
                class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                type="button" @click="increaseQuantity(card)">
              <span class="sr-only">{{ $t('increaseQuantity') }}</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 1v16M1 9h16"/>
              </svg>
            </button>
          </div>
        </td>
        <td class="px-6 py-4 font-semibold text-gray-900">
          ₸{{ calculatePrice(card) }}
        </td>
        <td class="px-6 py-4">
          <button @click="remove(card)" class="font-medium text-red-600 hover:underline">{{ $t('delete') }}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useCardStore } from "@/shared/ui/cards/index.ts";

interface ICard {
  img?: any;
  name?: string;
  price?: number;
  quantity?: number;
}

interface Props {
  cards: ICard[];
}

withDefaults(defineProps<Props>(), {});

const store = useCardStore();
const { removeFromCard } = store;

const remove = (card: ICard) => {
  removeFromCard(card);
};

const increaseQuantity = (card: ICard) => {
  card.quantity++;
};

const decreaseQuantity = (card: ICard) => {
  if (card.quantity > 1) {
    card.quantity--;
  }
};

const calculatePrice = (card: ICard) => {
  return card.price * card.quantity;
};
</script>

<style scoped>
/* Add any additional light theme styles here if needed */
</style>
