<template>
  <div class="text-center p-10 bg-[#F0F0FA] rounded-[28px]">
    <img :src='`/assets/index/${img}.png`' class="xs:w-9 md:w-11 lg:w-[50px] inline">
    <h5 class="xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold my-3" v-html="title"></h5>
    <span class="xs:text-[14px] sm:text-base md:text-[20px] text-[#6E7583]" v-html="subTitle"></span>
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
