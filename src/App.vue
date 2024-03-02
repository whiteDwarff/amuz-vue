
<template>
  <div style="max-width: 1920px">
    <header>
      <div class="wrap">
        <router-link to="/"><h1>LOGO</h1></router-link>
        <router-link to="/message" :class="{currentPage : currentView == 'message'}" @click="changeViewMode('message')" >메시지</router-link>
        <router-link to="/credits" :class="{currentPage : currentView == 'credits'}" @click="changeViewMode('credits')">크레딧</router-link>
      </div>
    </header>
    
    <!-- <index /> -->
    <RouterView />
  </div>

  <footer>footer</footer>
</template>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentView = ref('message');
const changeViewMode = view => {
  currentView.value = view;
  router.push(view);
}
</script>

<style>
* {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 10px;
  margin: 0;
  padding: 0;
}
input, textarea, select  {
  outline: none;
}

a {
  color: black;
  text-decoration: none;
}
header .wrap {
  display: flex;
  align-items: center;
}

.currentPage {
  color: #4E43ED;
  border-bottom: 1px solid #4E43ED;
}



/* font-size */
.text-38 {
  font-size: 3.8rem;
}
.text-30 {
  font-size: 3rem;
}
.text-24 {
  font-size: 2.4rem;
}
.text-20 {
  font-size: 2rem;
}
.text-22 {
  font-size: 2.2rem;
}
.text-19 {
  font-size: 1.9rem;
}
.text-18 {
  font-size: 1.8rem;
}
.text-16 {
  font-size: 1.6rem;
}
.text-14 {
  font-size: 1.4rem;
}
/* text-color */
.color-white {
  color: #fff;
}
.color-grey {
  color: #525252;
}
.color-grey-1 {
  color: #555555;
}
.color-grey-2 {
  color: #6E6E6E;
}
.color-grey-3 {
  color: #7B7B7B;
}
.color-grey-4 {
  color: #8D8D8D;
}
.color-blue {
  color: #2116BF;
}
.color-violet {
  color: #5E2BFF;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
/* background */
.bg-white {
  background-color: #fff;
}
.bg-light-grey {
  background-color: #F6F6F6;
}
.bg-grey {
  background-color: #F4F5F6;
}
.bg-grey-1 {
  background-color: #F5F6FA;
}
.bg-sky-blue {
  background-color: #E0EDFF;
}
.bg-blue {
  background-color: #5146F0;
}
.bg-violet {
  background-color: #5E2BFF;
}
.bold {
  font-weight: bold;
}
/* display */
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-end {
  justify-content: end;
}
.align-items-center {
  align-items: center;
}
.full-width {
  width: 100%;
}

/* margin */
.mx-auto {
  margin: 0 auto;
}
.mx-1 {
  margin: 0 1rem;
}
.mx-2 {
  margin: 0 2rem;
}
.mx-3 {
  margin: 0 3rem;
}
.m-y-auto {
  margin: auto 0;
}
.my-1 {
  margin: 1rem 0;
}
.my-2 {
  margin: 2rem 0;
}
.my-3 {
  margin: 3rem 0;
}
.mt-1 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 2rem;
}
.mt-3 {
  margin-top: 3rem;
}
.mb-1 {
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 2rem;
}
.mb-3 {
  margin-bottom: 3rem;
}
.ml-1 {
  margin-left: 1rem;
}
.ml-2 {
  margin-left: 2rem;
}
.ml-3 {
  margin-left: 3rem;
}
.mr-1 {
  margin-left: 1rem;
}
.mr-2 {
  margin-left: 2rem;
}
.mr-3 {
  margin-left: 3rem;
}

/* padding */
.pa-1 {
  padding: 1rem;
}
.pa-2 {
  padding: 2rem;
}
.pa-3 {
  padding: 3rem;
}
.px-1 {
  padding: 0 1rem;
}
.px-2 {
  padding: 0 2rem;
}
.px-3 {
  padding: 0 3rem;
}
.py-1 {
  padding: 1rem 0;
}
.py-2 {
  padding: 2rem 0;
}
.py-3 {
  padding: 3rem 0;
}
.pt-1 {
  padding-top: 1rem;
}
.pt-2 {
  padding-top: 2rem;
}
.pt-3 {
  padding-top: 3rem;
}
.pb-1 {
  padding-bottom: 1rem;
}
.pb-2 {
  padding-bottom: 2rem;
}
.pb-3 {
  padding-bottom: 3rem;
}
.pl-1 {
  padding-left: 1rem;
}
.pl-2 {
  padding-left: 2rem;
}
.pl-3 {
  padding-left: 3rem;
}
.pr-1 {
  padding-right: 1rem;
}
.pr-2 {
  padding-right: 2rem;
}
.pr-3 {
  padding-right: 3rem;
}


.border-none {
  border: none;
}
.border-box {
  border: 1px solid #CECECE;
}
.border-y {
  border-top: 2px  solid #dcdcdc;
  border-bottom: 2px  solid #dcdcdc;
}

.pointer {
  cursor: pointer;
}
.current-btn {
  border: none;
  background-color: #5146F0;
  color: #fff;
}
</style>
