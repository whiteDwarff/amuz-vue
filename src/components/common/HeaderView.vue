<template>
  <header class="bg-white h-[81px] leading-[81px]">
      <div class="flex items-center w-10/12 mx-auto">
        <router-link to="/" class="xs:mr-[2rem] md:mr-[10rem]">
          <img src="/src/assets/logo.svg" class="w-[132px]">
        </router-link>
        <div class="flex">
          <router-link
            to="/message"
            class="xs:text-[16px] md:text-[20px]  xs:px-5 md:px-10"
            :class="{'current-page' : $route.path == '/message'}"
          >메시지</router-link>
          <router-link
            to="/credits" 
            class="xs:text-[16px] md:text-[20px] xs:px-5 md:px-10"
            :class="{'current-page' : $route.path == '/credits'}"
          >크레딧</router-link>
        </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.current-page {
  color: #4E43ED;
  border-bottom: 2px solid #4E43ED;
}
</style>