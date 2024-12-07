<template>
  <div class="flex flex-col p-2" v-if="product.length > 0">
    <div>
      <v-table :products="product"/>
    </div>
    <div class="md:ml-auto md:w-[470px] md:h-[324px] md:mt-8 flex flex-col justify-end"
         v-if="product.length > 0">
      <div class="border p-6">
        <div class="font-poppins text-lg font-medium text-center">{{ $t('totalCart') }}</div>
        <div class="flex justify-between items-center mt-4 font-poppins">
          <div>{{ $t('subtotal') }}</div>
          <div>₸{{ calculateSubtotal() }}</div>
        </div>
        <hr class="my-2">
        <div class="flex justify-between items-center font-poppins">
          <div>{{ $t('shipping') }}</div>
          <div>{{ $t('free') }}</div>
        </div>
        <hr class="my-2">
        <div class="flex justify-between items-center font-poppins">
          <div>{{ $t('total') }}</div>
          <div>₸{{ calculateTotal() }}</div>
        </div>
        <div class="mt-4 flex justify-center">
          <RouterLink to="/checkout">
            <v-button size="lg" type="secondary">{{ $t('proceedToCheckout') }}</v-button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div class="text-3xl p-3 text-center flex justify-center items-center" v-else>
    {{ $t('emptyCart') }}
  </div>
</template>

<script setup lang="ts">
import {useCardStore} from "@/shared/ui/cards/index.ts";
import {storeToRefs} from "pinia";
import VTable from "@/shared/ui/v-table/index.vue";
import VButton from "@/shared/ui/button/index.vue";

const store = useCardStore();
const { product } = storeToRefs(store);

const calculateSubtotal = () => {
  return product.value.reduce((total, item) => total + (item.price * item.stock), 0);
};

const calculateTotal = () => {
  return calculateSubtotal();
};



</script>

<style scoped>
</style>
