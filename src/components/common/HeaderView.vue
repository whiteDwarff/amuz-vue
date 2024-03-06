<template>
  <PositionHeader 
    v-if="$route.path == '/'" 
    class="bg-black absolute z-20"
    :color="true"
  >
    <template #img>
      <img src="/src/assets/footer-logo.svg" class="xs:w-[100px] md:w-[132px]">
    </template>
  </PositionHeader>

  <PositionHeader class="header-white-bg sticky box-content" style="border-bottom: 1px solid #f2f2f2;">
    <template #img>
      <img src="/src/assets/logo.svg" class="xs:w-[100px] md:w-[132px]">
    </template>
  </PositionHeader>

  <!-- ohter menu -->
  <div 
    v-if="isCheckedPath"
    class="sub-menu bg-white xs:leading-[60px] md:h-[81px] md:leading-[81px]"
  >
    <div class="max-width mx-auto xs:text-center md:text-right">
      <router-link 
        v-for="item of nav" :key="item.path"
        :to="`/${item.key}${item.path}`"
        class="xs:text-[14px] sm:text-[16px] md:text-[20px] text-[#555555] xs:mx-2 md:mx-4"
        :class="{'bg-[#E1E7FD] text-violet rounded-2xl px-4 py-3' : $route.path == `/${item.key}${item.path}`}"
      >{{ item.menu }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import PositionHeader from './PositionHeader.vue';

const route = useRoute();

const nav = ref([]);
const subMenu = ref([
  { key: 'message', path: '/post', menu: '메시지 전송' },
  { key: 'message', path: '/callMng', menu: '발신번호 관리' },
  { key: 'message', path: '/adressMng', menu: '주소록관리' },
  { key: 'message', path: '/send', menu: '발송결과' },
  { key: 'credits', path: '/buy', menu: '크레딧 구매' },
  { key: 'credits', path: '/details', menu: '크레딧 내역' },
]);
const path = ref(null);
const isCheckedPath = ref(false);
// path 경로에 맞게 메뉴를 설정
const changeSubMenu = key => nav.value = subMenu.value.filter(item => item.key == key);
// route의 path가 변경되거나 새로고침 될 때 마다 nav의 value를 재할당
watch(() => route.path, (newValue, oldValue) => {
  path.value = newValue.substring(1, newValue.indexOf("/", 1));
  isCheckedPath.value = path.value !== '/';
  changeSubMenu(path.value);
});
</script>

<style scoped>
.header-white-bg {
  background-color: rgb(255,255,255, 0.9);
}
</style>