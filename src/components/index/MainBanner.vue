<template>
  <div class="bg-black h-1/3">
    <div class="w-[95%] mx-auto flex">
      <!-- 로그인, 회원가입 -->
      <div class="xs:py-4 lg:py-0 xs:w-[90%] lg:w-[60%] my-auto ml-auto xs:text-[18px] sm:text-[20px] lg:text-[24px]">
        <div class="xs:w-full lg:w-[70%] mx-auto xs:py-10 lg:py-20">
          <h6 class="text-[#FCFCFC] xs:text-[15px] sm:text-[18px] lg:text-[21px]">인터넷 문자 메시지 전송의 모든 것</h6>
          <h2 id="main-gradient" class="xs:text-[30px] sm:text-[34px] md:text-[40px] mt-2">가장 빠르고 안정적인<br>문자 서비스 SENDGO</h2>
          <div class="xs:mt-10 lg:mt-20">
            <router-link to="/signUp">
              <button class="xs:w-[90%] sm:w-[48%] sm:mr-[4%] lg:w-[30%] bg-[#6250FF] text-[#FFFFFF] xs:text-[15px] sm:text-[18px] lg:text-[21px] rounded-full">회원가입</button>
            </router-link>
            <router-link to="/signIn">
              <button class="xs:w-[90%] xs:mt-5 sm:w-[48%]  lg:mt-0 lg:w-[30%] bg-[#242424] text-[#FFFFFF] xs:text-[15px] sm:text-[18px] lg:text-[21px] rounded-full">로그인</button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- image -->
      <div class="xs:hidden lg:w-[40%] overflow-hidden lg:flex">
        <div class="thum inline mt-auto ">
          <img src="/assets/index/main-banner1.png" class="bg-[#6250FF] mb-[10%] rounded-3xl">
          <img src="/assets/index/main-banner2.png">
        </div>
        <div class="thum inline mt-[-80px] mx-5">
          <img src="/assets/index/main-banner3.png" class="bg-[#25262c] rounded-3xl">
          <img src="/assets/index/main-banner4.png" class="bg-[#6250FF] mt-[10%] rounded-3xl">
        </div>
       <div class="thum inline mt-[-300px]">
          <img src="/assets/index/main-banner5.png" class="bg-[#6250FF] rounded-3xl">
            <img src="/assets/index/main-banner6.png" class="w-[200%]">
        </div> 
      </div>
    </div>
  </div>
</template>

<style  scoped>
#main-gradient {
  background: linear-gradient(to right, #9FBAFD, #4E81FF);
  -webkit-background-clip: text; 
  background-clip: text;
  color: transparent;
  font-weight: bold; 
}
</style>