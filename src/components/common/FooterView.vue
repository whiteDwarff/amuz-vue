<template>
  <footer class="bg-[#222222] xs:py-4 md:py-6">
    <div class="footer-wrap text-[#EDEDED]">
      <div style="border-bottom: 1px solid #414141;">

        <div class="grid grid-cols-2 xs:py-4 md:py-8  w-10/12 mx-auto">
          <router-link to="/" class="md:mr-[10rem]">
            <img src="/src/assets/footer-logo.svg" class="xs:w-[100px] md:w-[132px]">
          </router-link>
            <div>
              <router-link
                to="/message/post"
                class="text-[#EDEDED] mr-20 xs:text-[14px] md:text-base"
              >메세지</router-link>
              <router-link
                to="/credits/buy"
                class="text-[#EDEDED] xs:text-[14px] md:text-base"
              >크레딧</router-link>
          </div>
        </div>
      </div>

      <div class="text-left xs:py-4 md:py-8 w-10/12 mx-auto">
        <span class="text-[#D6D6D6] block xs:text-[14px] md:text-base mb-3">문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의 해 보세요.</span>
        <span class="font-bold xs:text-[14px] md:text-base">Telegram : @shdevelope</span>
      </div>
    </div>
  </footer>
</template>
