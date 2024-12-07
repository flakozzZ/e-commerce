<template>
  <Suspense timeout="0">
    <component :is="defaultLayout">
      <RouterView/>
    </component>
  </Suspense>
</template>

<script setup lang="ts">

import {defineAsyncComponent} from "vue";

const defaultLayout = defineAsyncComponent(() => import("@/app/layouts/default.vue"))
</script>

<style scoped>

</style>