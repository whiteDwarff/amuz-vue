
<template>
  <div>
    <HeaderView />
    <!-- top banner -->
    <MainBanner  v-if="$route.path == '/'" />

    <!-- router-view -->
    <div id="router-view" class="xs:p-[0.5rem] sm:p-[1rem] md:p-[2rem]">
      <RouterView />
    </div>

    <!-- bottom banner -->
      <div v-if="$route.path == '/'"
        class="bg-black text-center xs:py-20 md:py-[13rem] xs:mt-[5rem] md:mt-[10rem]"
      >
        <h2 id="text-gradient" class="bold xs:mb-7 md:mb-14 xs:text-[30px] sm:text-[34px] md:text-[40px]">비즈니스 광고의 시작,<br>이제 샌드고와 함께 하세요.</h2>
        <router-link to="/message/post">
          <button class="xs:text-[15px] sm:text-[17px] md:text-[21px] text-white bg-[#6250FF] rounded-full">메시지 바로가기</button>
        </router-link>
      </div>
  </div>

  <FooterView />
</template>



<script setup>
import FooterView from './components/common/FooterView.vue';
import HeaderView from './components/common/HeaderView.vue';
import MainBanner from './components/index/MainBanner.vue';
</script>

<style scoped>
#text-gradient {
  background: linear-gradient(to right, #B6B7F7, #7FB2FE);
  -webkit-background-clip: text; 
  background-clip: text;
  color: transparent;
  font-weight: bold; 
}
  </style>

