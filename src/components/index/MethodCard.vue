<template>
  <div :class='[`text-[${background}]`]'>
    <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold'">
      {{ title }}
  </h5>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  background: String
});
</script>

<style scoped>

</style>