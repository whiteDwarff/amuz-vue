<template>
  <section class="xs:w-11/12 md:w-9/12 lg:w-5/12 mx-auto">

    <img id="sign-up-logo" class="mx-auto mt-[60px] mb-[80px]" src="/src/assets/logo.svg" alt="logo">
    
    <form @submit.prevent="submit" class="text-left">
      <div class="xs:mb-5 md:mb-10">
        <label for="name" class="xs:text-[14px] sm:text-[16px] md:text-lg mb-2 block">이름</label>
        <input 
          id="name" 
          v-model="info.name" 
          type="text" 
          placeholder="이름을 입력해 주세요" 
          class="xs:text-[14px] sm:text-[16px] md:text-lg w-full"
        >
      </div>
      <div class="xs:mb-5 md:mb-10">
        <label for="id" class="xs:text-[14px] sm:text-[16px] md:text-lg mb-2 block">아이디</label>
        <input 
          id="id"
          v-model="info.id"
          type="text"
          placeholder="8자 이상, 영문 혹은 영문과 숫자조합"
          class="xs:text-[14px] sm:text-[16px] md:text-lg w-full"
        >
      </div>
      <div class="xs:mb-5 md:mb-10">
        <label for="password" class="xs:text-[14px] sm:text-[16px] md:text-lg mb-2 block">비밀번호</label>
        <input 
          id="password"
          v-model="info.password" 
          type="password" 
          placeholder="비밀번호를 입력해 주세요" 
          class="xs:text-[14px] sm:text-[16px] md:text-lg w-full"
        >
      </div>
      <div class="xs:mb-5 md:mb-10">
        <label for="password-chk" class="xs:text-[14px] sm:text-[16px] md:text-lg mb-2 block">비밀번호 확인</label>
        <input
          id="password-chk"
          v-model="confirmPassword"
          type="password"
          placeholder="비밀번호 확인" 
          class="xs:text-[14px] sm:text-[16px] md:text-lg w-full"
          >
      </div>

      <div id="terms-box" class="flex align-items-center xs:py-7 xs:my-7 md:py-10 md:my-10">
        <input
          id="terms"
          type="checkbox" 
          class="pointer w-[15px]"
          @click="info.terms = !info.terms"
        >
        <label for="terms" class="xs:text-[14px] sm:text-[16px] md:text-lg ml-2 cursor-pointer">모든 약관에 동의합니다.</label>
      </div>

      <button id="submit-btn" type="submit" class="xs:text-[14px] sm:text-[16px] md:text-lg w-full bg-violet text-white">제출하기</button>
      
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
#sign-up-logo {
  width: 219px;
  height: 68px;
}
#terms-box {
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
}
</style>