<template>
  <section>

    <div class="text-center">
      <img id="sigin-up-logo" src="/icon/logo.png" alt="logo">
    </div>
    
    <form @submit.prevent="submit">
      <div class="">
        <input 
          id="name" 
          v-model="info.name" 
          type="text" 
          placeholder="아이디를 입력해주세요" 
          class="pa-1 mt-1 block full-width"
        >
      </div>
      <div class="my-3">
        <input 
          id="id"
          v-model="info.id"
          type="text"
          placeholder="비밀번호(영문, 숫자, 특수문자 포함 8~30자)"
          class="pa-1 mt-1 block full-width"
        >
      </div>

      <div id="terms-box" class="flex align-items-center justify-between">
        <div class="flex align-items-center">
          <input
            id="saveId"
            type="checkbox" 
            class="pointer"
            @click="info.saveId = !info.saveId"
          >
          <label for="saveId" class="text-14 ml-1 pointer">아이디 저장</label>
        </div>
        <div >
          <router-link to="/" class="text-14 pr-2">아이디 찾기</router-link>
          <router-link to="/" class="text-14 pl-2">비밀번호 찾기</router-link>
        </div>
      </div>

      <button id="submit-btn" type="submit" class="mt-3 text-16 full-width border-none py-1 color-white pointer">로그인</button>
    </form>

    <div class="text-center mt-3">
      <span class="text-14">계정이 없으신가요?</span>
      <router-link id="sign-up-btn" to="/signUp" class="text-14">회원가입하기</router-link>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { validateId, validatePassword } from '/src/utils/validate-rules.js';

const info = ref({
  id: '',
  password: '',
  saveId: false,
});

const submit = () => {
  if(!info.value.id || !validateId(info.value.id)) return alert('아이디는 8자 이상, 영문 혹은 영문과 숫자조합로 작성해주세요');
  if(!info.value.password || !validatePassword(info.value.password)) return alert('비밀번호는 대소문자와 특수기호, 숫자를 포함한 7-14글자로 작성해주세요.');
}

</script>

<style scoped>
section {
  background-color: #F2F4F8;
  padding: 20rem 0;
}
#sigin-up-logo {
  width: 219px;
  height: 68px;
  margin-bottom: 6rem;
}
form {
  width: 30%;
  margin: 0 auto;
}
input {
  width: calc(100% - 20px);
  border: 1px solid #CECECE;
  border-radius: 8px;
  font-size: 14px;
}
#saveId {
  width: 16px;
  height: 16px;
}
#submit-btn {
  background-color: #4F44F0;
  border-radius: 8px;
}
a.pl-2 {
  border-left: 1px solid #DEDEDE;
}
#sign-up-btn {
  color: #5146F0;
  text-decoration: underline;
  margin-left: 1rem;
}
</style>