<template>
  <div class="text-center xs:mb-10 xs:mt-20 md:mb-20 md:mt-[10rem]">
    <img v-if="img != 'trust'" :src='`/src/assets/index/${img}.png`' class="xs:w-9 md:w-11 lg:w-[50px]  inline">
    <img v-else :src='`/src/assets/index/${img}.svg`' class="xs:w-9 md:w-11 lg:w-[50px]  inline">
    <h2 class="xs:text-[30px] sm:text-[34px] md:text-[40px] font-bold my-5" v-html="title"></h2>
    <span class="text-[#5C5C5C] sm:text-lg sm:text-xl md:text-2xl">{{ subTitle }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
  img: {
    type: String,
  }
});
</script>
