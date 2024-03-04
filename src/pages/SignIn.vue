<template>
  <section class="md:w-7/12 lg:w-5/12 mx-auto">
    <img id="sign-in-logo" class="mx-auto xs:mb-[50px] sm:mb-[80px]" src="/src/assets/logo.svg" alt="logo">
    <form @submit.prevent="submit">
      <div class="flex bg-white rounded-lg pl-2">
        <img src="/src/assets/auth/member.svg" alt="">
        <input 
          id="name" 
          v-model="info.name" 
          type="text" 
          placeholder="아이디를 입력해주세요" 
          class="w-full border-0"
        >
      </div>
      <div class="my-6 flex bg-white rounded-lg pl-2">
        <img src="/src/assets/auth/password.svg" alt="">
        <input 
          id="id"
          v-model="info.id"
          type="text"
          placeholder="비밀번호(영문, 숫자, 특수문자 포함 8~30자)"
          class="w-full border-0"
        >
      </div>

      <div class="grid xs:grid-cols-1 sm:grid-cols-2  justify-between">
        <div class="xs:text-center sm:text-left xs:mb-2 md:mb-0">
            <input
            id="saveId"
            type="checkbox" 
            class="pointer cursor-pointer"
            @click="info.saveId = !info.saveId"
            >
            <label for="saveId" class="pl-2 cursor-pointer xs:text-base md:text-lg">아이디 저장</label>
        </div>
        <div id="find-link" class="xs:text-center sm:text-right">
          <router-link to="/" class="pr-4 txs:text-base md:text-lg">아이디 찾기</router-link>
          <router-link to="/" class="pl-4 xs:text-base md:text-lg">비밀번호 찾기</router-link>
        </div>
      </div>
      <button id="submit-btn" type="submit" class="w-full my-6 text-white bg-violet pointer xs:text-base md:text-lg">로그인</button>
    </form>
    <div class="text-center">
      <span class="xs:text-base md:text-lg">계정이 없으신가요?</span>
      <router-link id="sign-up-btn" to="/signUp" class="text-violet underline ml-3 xs:text-base md:text-lg">회원가입하기</router-link>
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
#find-link a:last-child {
  border-left: 1px solid #CECECE;
}
#sign-in-logo {
  width: 219px;
  height: 68px;
}
</style>