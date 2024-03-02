<template>
  <section>

    <div class="text-center">
      <img id="sigin-up-logo" src="/icon/logo.png" alt="logo">
    </div>
    
    <form @submit.prevent="submit">
      <div class="input-group">
        <label for="name" class="text-16">이름</label>
        <input 
          id="name" 
          v-model="info.name" 
          type="text" 
          placeholder="이름을 입력해 주세요" 
          class="pa-1 mt-1 block full-width"
        >
      </div>
      <div class="input-group">
        <label for="id" class="text-16">아이디</label>
        <input 
          id="id"
          v-model="info.id"
          type="text"
          placeholder="8자 이상, 영문 혹은 영문과 숫자조합"
          class="pa-1 mt-1 block full-width"
        >
      </div>
      <div class="input-group">
        <label for="password" class="text-16">비밀번호</label>
        <input 
          id="password"
          v-model="info.password" 
          type="password" 
          placeholder="비밀번호를 입력해 주세요" 
          class="pa-1 mt-1 block full-width"
        >
      </div>
      <div class="input-group">
        <label for="password-chk" class="text-16">비밀번호 확인</label>
        <input
          id="password-chk"
          v-model="confirmPassword"
          type="password"
          placeholder="비밀번호 확인" 
          class="pa-1 mt-1 block full-width"
          >
      </div>

      <div id="terms-box" class="input-group  flex align-items-center">
        <input
          id="terms"
          type="checkbox" 
          class="pointer"
          @click="info.terms = !info.terms"
        >
        <label for="terms" class="text-14 ml-2 pointer">모든 약관에 동의합니다.</label>
      </div>

      <button id="submit-btn" type="submit" class="text-16 full-width border-none py-1 color-white pointer">제출하기</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { validateId, validatePassword } from '/src/utils/validate-rules.js';

const info = ref({
  name: '',
  id: '',
  password: '',
  terms: false,
});
const confirmPassword = ref('');

const submit = () => {
  if(!info.value.name) return alert('이름을 입력해주새요');
  if(!info.value.id || !validateId(info.value.id)) return alert('아이디는 8자 이상, 영문 혹은 영문과 숫자조합로 작성해주세요');
  if(!info.value.password || !validatePassword(info.value.password)) return alert('비밀번호는 대소문자와 특수기호, 숫자를 포함한 8-30글자로 작성해주세요.');
  if(info.value.password != confirmPassword.value) return alert('비밀번호가 일치하지 않습니다.');
  if(!info.value.terms) return alert('약관에 동의해주세요');
}

</script>

<style scoped>
section {
  background-color: #F2F4F8;
  padding: 10rem 0;
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
.input-group {
  margin-bottom: 4rem;
}
#terms-box {
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
  padding: 4rem 0;
}
#terms {
  width: 16px;
  height: 16px;
}
#submit-btn {
  background-color: #4F44F0;
  border-radius: 8px;
}
</style>