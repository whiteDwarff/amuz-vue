<template>
  <header class="top-0 left-0 w-full">
    <!-- main menu-->
    <div class="flex items-center pl-5 xs:w-full md:w-10/12 xs:justify-between md:justify-around lg:justify-stretch mx-auto xs:h-[60px] xs:leading-[60px] md:h-[81px] md:leading-[81px]">
      <!-- index -->
      <router-link to="/" class="md:mr-[10rem]">
        <slot name="img"></slot>
      </router-link>
      <!-- nav -->
      <div>
        <div class="flex xs:ml-auto xs:text-[14px] sm:text-[16px] md:text-[20px] ">
          <router-link 
            to="/message/post"
            class="xs:px-5 md:px-10"
            :class="[{'current-page': $route.path.includes('/message')}, textColor ]"
          >메시지</router-link>
          <router-link 
            to="/credits/buy"
            class="xs:px-5 md:px-10"
            :class="[{'current-page': $route.path.includes('/credit')}, textColor ]"
          >크레딧</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  color: {
    type: Boolean,
    default: false,
  }
});
const textColor = props.color ? 'text-[#D9D9D9]' : 'text-black';
</script>

<style scoped>
.current-page {
  color: #4E43ED;
  border-bottom: 2px solid #4E43ED;
}
</style>