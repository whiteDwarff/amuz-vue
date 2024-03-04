<template>
  <header class="bg-white">
      <!-- main menu-->
      <div class="flex items-center px-3 xs:w-full xs:justify-between sm:justify-around md:justify-stretch md:w-9/12 mx-auto xs:h-[60px] xs:leading-[60px] md:h-[81px] md:leading-[81px]">
        <!-- index -->
        <router-link to="/" class="md:mr-[10rem]">
          <img src="/src/assets/logo.svg" class="xs:w-[100px] md:w-[132px]">
        </router-link>
        <!-- nav -->
        <div class="">
          <div class="flex xs:ml-auto">
            <a
              @click="changeSubMenu('message')"
              class="xs:text-[14px] sm:text-[16px] md:text-[20px] xs:px-5 md:px-10 cursor-pointer"
              :class="{'current-page' : $route.path == '/message'}"
            >메시지</a>
            <a
              @click="changeSubMenu('credits')"
              class="xs:text-[14px] sm:text-[16px] md:text-[20px] xs:px-5 md:px-10 cursor-pointer"
              :class="{'current-page' : $route.path == '/credits'}"
            >크레딧</a>
          </div>
        </div>
    </div>
    
    <!-- ohter menu -->
    <div 
      v-if="$route.path != '/'"
      class="sub-menu bg-white xs:leading-[60px] md:h-[81px] md:leading-[81px]"
    >
      <div class="max-width mx-auto text-right">
        <router-link 
          v-for="item of nav" :key="item.key"
          :to="item.path"
          class="xs:text-[14px] sm:text-[16px] md:text-[20px] text-[#555555] mx-4"
          :class="{'bg-[#E1E7FD] text-violet rounded-2xl px-4 py-3' : $route.path == item.path}"
        >{{ item.menu }}</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nav = ref([]);
const subMenu = ref([
  { key: 'message', path: '/message', menu: '메시지 전송' },
  { key: 'message', path: '/callManagement', menu: '발신번호 관리' },
  { key: 'message', path: '/adressManagement', menu: '주소록관리' },
  { key: 'message', path: '/shipping', menu: '발송결과' },
  { key: 'credits', path: '/credits', menu: '크레딧 구매' },
  { key: 'credits', path: '/creditDetails', menu: '크레딧 내역' },
]);

const changeSubMenu = key => {
  nav.value = [];
  subMenu.value.forEach(item => {
    if(item.key == key) nav.value.push(item);
  });
  router.push(`/${key}`);
}

</script>

<style scoped>
.current-page {
  color: #4E43ED;
  border-bottom: 2px solid #4E43ED;
}
/* .sub-menu:last-child {
  margin-right: 0;
} */
</style>