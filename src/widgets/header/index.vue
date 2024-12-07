<template>
  <div class="flex flex-col md:flex-row justify-between items-center pt-4">
    <!-- Logo (Hidden on Small Screens) -->
    <h1 class="hidden md:block lg:block font-inter font-bold text-2xl">Exclusive</h1>

    <!-- Main Navigation Links -->
    <nav class="hidden md:flex flex-1 justify-center">
      <ul class="flex flex-row gap-4 md:gap-12 font-poppins text-base">
        <li>
          <RouterLink to="/" :class="isActive('/') ? 'border-gray-600 border-b-2' : 'hover:border-b-2 hover:border-gray-600 transition'">
            {{ $t('nav.home') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" :class="isActive('/contact') ? 'border-gray-600 border-b-2' : 'hover:border-b-2 hover:border-gray-600 transition'">
            {{ $t('nav.contact') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" :class="isActive('/about') ? 'border-gray-600 border-b-2' : 'hover:border-b-2 hover:border-gray-600 transition'">
            {{ $t('nav.about') }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Search Input and Icons -->
    <div class="flex items-center gap-3">
      <d-input :placeholder="$t('placeholder')" type="text" icon="search" class="w-full md:w-auto"/>
      <div class="flex items-center gap-2">
        <RouterLink to="/favorites">
          <v-icon name="favorites"/>
        </RouterLink>
        <RouterLink to="/cart">
          <v-icon name="cart"/>
        </RouterLink>
        <v-icon name="hamburger" class="md:hidden" @click="toggleMenu"/>
      </div>
      <select
          v-model="$i18n.locale"
          class="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  </div>
  <side-panel :show="menuOpen" @close="menuOpen = false">
    <h1 class="font-inter font-bold text-2xl">{{ $t('nav.home') }}</h1>
    <ul class="mt-36 flex flex-col items-center justify-center gap-y-12 md:gap-12 font-poppins text-base">
      <li>
        <RouterLink @click="menuOpen = false" to="/" :class="isActive('/') ? 'border-gray-600 border-b-2' : 'hover:border-b-2 hover:border-gray-600 transition'">
          {{ $t('nav.home') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink @click="menuOpen = false" to="/contact" :class="isActive('/contact') ? 'border-gray-600 border-b-2' : 'hover:border-b-2 hover:border-gray-600 transition'">
          {{ $t('nav.contact') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink @click="menuOpen = false" to="/about" :class="isActive('/about') ? 'border-gray-600 border-b-2' : 'hover:border-b-2 hover:border-gray-600 transition'">
          {{ $t('nav.about') }}
        </RouterLink>
      </li>
    </ul>
  </side-panel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import SidePanel from "@/shared/ui/sidebar/index.vue";
import DInput from "@/shared/ui/v-input/index.vue";
import VIcon from "@/shared/ui/v-icon/index.vue";

const route = useRoute();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const isActive = (path: string) => route.path === path;
</script>

<style scoped>
/* Add scoped styles here */
</style>
