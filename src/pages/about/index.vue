<template>
  <div>
    <div class=" p-2 mt-8 md:mt-32 flex flex-col md:flex-row justify-between items-center">
      <!-- Текстовая информация -->
      <div class="md:w-[500px]">
        <div class="font-inter text-2xl md:text-4xl font-semibold mb-4">{{ $t('our_history.title') }}</div>
        <div class="text-base">
          {{ $t('our_history.description') }}
        </div>
        <div class="mt-4 text-base">
          {{ $t('our_history.offer') }}
        </div>
      </div>
      <!-- Изображение -->
      <div class="mt-8 md:mt-0 md:ml-8">
        <img src="@/shared/assets/img/about.png" alt="About Us" class="w-full md:w-auto max-w-full h-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
/* Добавьте стили по желанию */
</style>
