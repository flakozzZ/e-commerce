<template>
  <div class="carousel-container bg-black rounded text-white flex flex-col lg:flex-row justify-between items-center relative p-6">
    <transition name="fade" mode="out-in">
      <div class="carousel-text flex flex-col lg:ml-24" :key="currentSlide?.name">
        <div class="flex items-center gap-3">
          <v-icon :name="currentSlide?.logo" />
          <div class="font-poppins text-base">{{ currentSlide?.name }}</div>
        </div>
        <div class="font-inter text-3xl sm:text-4xl md:text-5xl mt-4 font-semibold leading-tight">
          {{ currentSlide?.description }}
        </div>
        <div class="mt-4 text-base font-poppins">
          <RouterLink :to="currentSlide?.link">
            {{$t('shop')}}
          </RouterLink>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div class="carousel-image w-full h-full flex justify-center items-center" :key="currentSlide?.img">
        <img :src="currentSlide?.img" alt="slide image" class="max-w-full max-h-full object-contain" />
      </div>
    </transition>
    <div class="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex gap-3 cursor-pointer">
      <v-icon v-for="(slide, index) in carousel" :key="index" :name="getEllipseName(index)" @click="changeImage(slide.name)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import VIcon from "@/shared/ui/v-icon/index.vue";

interface ICarousel {
  logo: string;
  name: string;
  description: string;
  img: any;
  link?: any;
}

interface Props {
  carousel: ICarousel[];
}

const props = withDefaults(defineProps<Props>(), {});

const currentImageIndex = ref(0);

const changeImage = (name: string) => {
  const index = findIndexByName(name);
  if (index !== -1) {
    currentImageIndex.value = index;
  }
};

const getEllipseName = (index: number) => {
  return currentImageIndex.value === index ? 'active-ellipse' : 'ellipse';
};

const findIndexByName = (name: string) => {
  return props.carousel.findIndex(item => item.name === name);
};

const currentSlide = computed(() => props.carousel[currentImageIndex.value]);

const nextSlide = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.carousel.length;
};

onMounted(() => {
  const interval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
  onUnmounted(() => {
    clearInterval(interval); // Clear interval on component unmount
  });
});
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 892px;
  height: auto;
}

.carousel-text {
  flex: 1;
  text-align: center;
  margin-bottom: 1rem;
}

.carousel-image {
  flex: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 1024px) {
  .carousel-container {
    height: 344px;
  }
  .carousel-text {
    text-align: left;
    margin-bottom: 0;
  }
  .carousel-image {
    justify-content: flex-end;
  }
}
</style>
