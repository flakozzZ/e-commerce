<script lang="ts">
export default {
  name: 'v-input'
}
</script>

<template>
  <div class="field">
    <div class="input-wrapper">
      <input
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          v-model.trim="model"
          class="field__input">
      <v-icon class="field__icon" :name="icon"/>
    </div>
  </div>
</template>

<script setup lang="ts">


import VIcon from "@/shared/ui/v-icon/index.vue";

interface Props {
  type: 'text' | 'password' | 'email' | 'phone'
  placeholder?: string
  disabled?: boolean
  bgColor?: string
  autocomplete?: boolean
  icon?: string
}

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

withDefaults(defineProps<Props>(), {
  autocomplete: true
})
const model = defineModel()



</script>

<style scoped src="./index.scss">

</style>