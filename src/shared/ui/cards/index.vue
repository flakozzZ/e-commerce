<script lang="ts">
export default {
  name: 'cards'
}
</script>

<template>
  <div class="flex flex-auto flex-wrap gap-24 p-3">
    <div class="w-[270px] h-[350px]" v-for="card in cards" :key="card.id">
      <div class="relative w-[270px] h-[250px] bg-[#F5F5F5] flex justify-center items-center group">
        <div class="absolute top-2 right-2 flex flex-col gap-y-2 ">
          <div class="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center">
            <v-icon @click="handleFavorite(card)" class="cursor-pointer" name="favorites"
                    :fill="favorite(card) ? 'red' : 'white'"/>
          </div>
          <div class="w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center">
            <RouterLink :to="`product/${card.id}`">
              <v-icon class="cursor-pointer" name="eye"/>
            </RouterLink>
          </div>
        </div>
        <div class="w-[190px] h-[180px]">
          <img :src="card.photo" alt="img">
        </div>
        <div class="hidden absolute group-hover:block bottom-0 w-full">
          <v-button @click="handleCart(card)" type="primary" size="lg" full-width>{{ $t('addToCart') }}</v-button>
        </div>
      </div>
      <div class="font-poppins text-base uppercase mt-2 font-medium">
        {{ card.name }}
      </div>
      <div class="flex gap-4 mt-2" v-if="card.discount">
        <span class="text-red-500 font-poppins text-base font-medium">₸{{ card.price }}</span>
        <span class="line-through font-poppins text-base font-medium text-gray-500">₸{{ card.originalPrice }}</span>
      </div>
      <div class="mt-2 text-red-500 font-poppins text-base font-medium" v-else>
        ₸{{ card.price }}
      </div>

      <div class="flex gap-1 mt-2 items-center">
        <template v-for="star in 5" :key="star">
          <v-icon :name="getStarIcon(card.rating, star)"/>
        </template>
        <div class="font-poppins text-xs text-gray-500 ml-2 mt-1">({{ (card.count) }})</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import VIcon from "@/shared/ui/v-icon/index.vue";
import VButton from "@/shared/ui/button/index.vue";
import { useCardStore } from "@/shared/ui/cards/index.ts";
import "@/shared/ui/cards/index.vue";
import VueToast from "vue-toast-notification";
import {toast} from "@/app/providers/toast.ts";
import {useI18n} from "vue-i18n";
import {i18n} from "@/app/providers/i18n.ts";

export interface ICards {
  id?: number
  img?: any
  name?: string
  price?: string
  originalPrice?: string
  discount?: number
  rating?: number
  count?: number
  isFavorite?: boolean  // новое свойство для отслеживания избранного
}


interface Props {
  cards: ICards[]
}

const store = useCardStore()
const { toggleFavorite, isFavorite, addToCart } = store

withDefaults(defineProps<Props>(), {})

const handleFavorite = (card) => {
  toggleFavorite(card)
}

const favorite = (card) => {
  return isFavorite(card)
}

const {t} = useI18n()
const handleCart = (card) => {
  addToCart(card)
  const message = t('success')
  toast.success(message)
}
const getStarIcon = (rating, starIndex) => {
  if (starIndex <= Math.floor(rating)) {
    return 'active-star'; // Полная звезда
  } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
    return 'semi-active-star'; // Полузвезда
  } else {
    return 'star'; // Неактивная звезда
  }
};
</script>

<style scoped>

</style>
