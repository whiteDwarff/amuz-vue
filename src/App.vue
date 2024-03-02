
<template>
  <div>
    <header>
      <div class="wrap">
        <router-link to="/"><h1>LOGO</h1></router-link>
        <router-link to="/message" :class="{currentPage : currentView == 'message'}" @click="changeViewMode('message')" >메시지</router-link>
        <router-link to="/credits" :class="{currentPage : currentView == 'credits'}" @click="changeViewMode('credits')">크레딧</router-link>
      </div>
    </header>
    <!-- <index /> -->
    <div id="router-view">
      <RouterView />
    </div>
  </div>

  <FooterView />
</template>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FooterView from './components/common/FooterView.vue';

const router = useRouter();

const currentView = ref('message');
const changeViewMode = view => {
  currentView.value = view;
  router.push(view);
}
</script>
<style scoped>

</style>

