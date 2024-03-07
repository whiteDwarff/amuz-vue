<template>
  <section class="xs:w-11/12 md:w-9/12 lg:w-5/12 mx-auto">
    <img id="sign-in-logo" class="mx-auto mt-[60px] mb-[80px] " src="/assets/logo.svg" alt="logo">
    <form @submit.prevent="submit">
      <div class="flex bg-white rounded-lg pl-2">
        <img src="/assets/auth/member.svg" alt="">
        <input 
          id="name" 
          v-model="info.name" 
          type="text" 
          placeholder="아이디를 입력해주세요" 
          class="xs:text-[14px] sm:text-[14px] md:text-lg w-full border-0"
        >
      </div>
      <div class="mt-8 flex bg-white rounded-lg pl-2">
        <img src="/assets/auth/password.svg" alt="">
        <input 
          id="id"
          v-model="info.id"
          type="text"
          placeholder="비밀번호(영문, 숫자, 특수문자 포함 8~30자)"
          class="xs:text-[14px] sm:text-[14px] md:text-lg w-full border-0"
        >
      </div>

      <div class="grid grid-cols-12 my-8">
        <div class="text-left xs:col-span-4 col-span-6">
            <input
              id="saveId"
              type="checkbox" 
              class="cursor-pointer"
              @click="info.saveId = !info.saveId"
            >
            <label for="saveId" class="pl-2 cursor-pointer xs:text-[14px] sm:text-[14px] md:text-lg">아이디 저장</label>
        </div>
        <div id="find-link" class="xs:text-[14px] sm:text-[14px] md:text-lg text-right xs:col-span-8 col-span-6">
          <router-link to="/" class="pr-4">아이디찾기</router-link>
          <router-link to="/" class="pl-4">비밀번호 찾기</router-link>
        </div>
      </div>

      <button id="submit-btn" type="submit" class="xs:text-[14px] sm:text-[16px] md:text-lg w-full bg-violet text-white mb-8">로그인</button>

    </form>
    <div class="text-center xs:text-[14px] md:text-lg">
      <span>계정이 없으신가요?</span>
      <router-link id="sign-up-btn" to="/signUp" class="text-violet underline ml-3 ">회원가입하기</router-link>
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