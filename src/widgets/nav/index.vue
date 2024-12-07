<template>
  <div class="relative">
    <ul class="font-poppins text-base flex flex-col gap-y-2.5 lg:pr-32 lg:items-start items-center">
            <li v-for="nav in navItems" :key="nav.slug">
              <RouterLink
                  :to="`/category/${nav.slug}`"
                  class="hover:border-b-2 hover:border-gray-600"
              >
                {{ nav.title }}
              </RouterLink>
            </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'main-nav'
}
</script>


<script setup lang="ts">
import axiosInstance from "@/app/providers/axios.ts";
import {onMounted, ref} from "vue";

const navItems = ref([])
const fetchAllProducts = async () => {
  try {
    const response = await axiosInstance('v1/store/category/get-all/');
    navItems.value = response.data;
    console.log(response.data)
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  fetchAllProducts()
})
</script>

<style scoped>
/* Additional styles */
ul {
  position: relative; /* Ensure the <ul> is relatively positioned */
}

/* Style the ::after pseudo-element for all screen sizes */
ul::after {
  content: '';
  position: absolute;
  top: -57px; /* Adjust the top position as needed */
  bottom: 10%; /* Adjust the bottom position as needed */
  right: 0;
  width: 1px;
  background-color: #e5e7eb;
  height: 300px;
}

@media (max-width: 767px) {
  ul::after {
    top: auto; /* Reset top position for mobile */
    bottom: 0; /* Position at the bottom for mobile */
    left: 0; /* Align with the left for mobile */
    right: auto; /* Reset right position for mobile */
    width: 100%; /* Full width for mobile */
    height: 1px; /* Thin line for mobile */
  }
}
</style>
