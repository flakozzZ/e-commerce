<template>
  <div>
    <div class="mt-52 flex flex-col md:flex-row lg:flex-row justify-between items-center">
      <div class="w-full md:w-[340px] lg:w-[340px] h-auto md:h-[457px] lg:h-[457px] flex flex-col gap-4 bg-[#] p-4">
        <!-- Контактная информация -->
        <div class="flex flex-col gap-2">
          <div class="flex gap-2 items-center">
            <VIcon name="phone"/>
            <div class="font-poppins text-base">{{ $t('contactUs') }}</div>
          </div>
          <div class="font-poppins text-sm flex flex-col gap-2">
            <div>{{ $t('contactAvailability') }}</div>
            <div>{{ $t('phoneNumber') }}: +8801611112222</div>
          </div>
        </div>
        <hr class="my-4"/>
        <div class="flex flex-col gap-2">
          <div class="flex gap-2 items-center">
            <VIcon name="mail"/>
            <div class="font-poppins text-base">{{ $t('writeToUs') }}</div>
          </div>
          <div class="font-poppins text-sm flex flex-col gap-2">
            <div>{{ $t('writeToUsDescription') }}</div>
            <div>{{ $t('emailAddress') }}: customer@lichi.com</div>
            <div>{{ $t('supportEmailAddress') }}: support@lichi.com</div>
          </div>
        </div>
      </div>
      <!-- Форма -->
      <form @submit.prevent="" class="w-full md:w-[800px] lg:w-[800px] p-4 flex flex-col gap-4">
        <div class="flex flex-col gap-4">
          <VInput :placeholder="$t('yourName')" type="text" class="w-full"/>
          <VInput :placeholder="$t('yourEmail')" type="text" class="w-full"/>
          <VInput :placeholder="$t('yourPhone')" type="phone" class="w-full"/>
        </div>
        <textarea
            class="w-full h-40 bg-[#F5F5F5] rounded p-4"
            :placeholder=" $t('yourMessage') "
        ></textarea>
        <div class="flex justify-end">
          <VButton type="secondary" size="lg">{{ $t('sendMessage') }}</VButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import VIcon from "@/shared/ui/v-icon/index.vue";
import VInput from "@/shared/ui/v-input/index.vue";
import VButton from "@/shared/ui/button/index.vue";
</script>

<style scoped>

</style>
