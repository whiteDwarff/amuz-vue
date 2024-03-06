<template>
  <section>
      <article>
        <BannerTitle
          title="복잡한 인터넷 문자 서비스를<br>간편하게 만나보세요."
          subTitle="모든 종류의 인터넷 SMS를 편리하게."
          img="talk1"
        />
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <MessageCard 
            v-for="card of messageCard" :key="card.img"
            :img="card.img"
            :title="card.title"
            :subTitle="card.subTitle"
          />
        </div>
      </article>
      <article>
        <BannerTitle
          title="샌드고의 다양한<br>기능들을 살펴보세요."
          subTitle="고객님들의 입장에서 고민하였습니다."
          img="bulb"
        />
        <div class="flex flex-wrap">
          <div class="xs:mx-auto xs:w-[90%] md:w-[44%] md:mr-[4%] bg-[#F8F9FA] rounded-[25px] overflow-hidden pt-7 pl-7 h-fit">
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold mb-1">자주 전송하는 내용이 있나요?</h5>
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#727B88] mb-10">템플릿으로 메시지 내용을<br>저장하여 간편하게 전송하세요.</h5>
            <img src="/src/assets/index/msg1.png" class="">
          </div>
          <div class="xs:mx-auto xs:w-[90%] md:w-[52%] bg-[#E9EBFD] rounded-[25px] overflow-hidden pt-7 px-7 h-fit xs:mt-[4%] md:mt-0">
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#7F3ADD] mb-1">크레딧 구매 시, 보너스 크레딧 증정</h5>
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#7079CB] mb-10">크레딧 상품을 구매하면 상품 별<br>보너스 크레딧을 증정합니다</h5>
            <img src="/src/assets/index/price.png" class="">
          </div>
        </div>
        <div class="flex flex-wrap mt-[4%]">
          <div class="xs:mx-auto xs:w-[90%] md:w-[61%] md:mr-[4%] bg-[#DBE5FF] rounded-[25px] overflow-hidden pt-7 pl-7 h-fit">
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold mb-1 text-[#375984]">자주 전송하는 내용이 있나요?</h5>
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#698AB1] mb-10">템플릿으로 메시지 내용을<br>저장하여 간편하게 전송하세요.</h5>
            <img src="/src/assets/index/group.png" class="">
          </div>
          <div class="xs:mx-auto xs:w-[90%] md:w-[35%] bg-[#FAFAEE] rounded-[25px] overflow-hidden pt-7 px-7 h-fit xs:mt-[4%] md:mt-0">
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#6C3111] mb-1">누르면 바로 전송완료</h5>
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#6F6F6F] mb-10">누르자마자 수신인에게<br>바로 전달됩니다</h5>
            <img src="/src/assets/index/msg2.png" class="mx-auto">
          </div>
        </div>
      </article>
      <article>
        <BannerTitle
          title="정확도와 다양함은 물론<br>신뢰할 수 있는 보안까지"
          subTitle="정확도와 다양함은 물론 신뢰할 수 있는 보안까지"
          img="trust"
        />
        <div class="flex flex-wrap">
          <div class="xs:mx-auto xs:w-[90%] md:w-[48%] md:mr-[4%] bg-[#DCEFF4] rounded-[25px] p-7">
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] text-[#0F1F4B] font-bold mb-1">일반 SMS는 기본, 카카오톡까지</h5>
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#516B71] mb-10">종류와 상관없이 모두 전송해 드립니다</h5>
            <img src="/src/assets/index/talk2.png" class="w-3/5 mx-auto">
          </div>
          <div class="xs:mx-auto xs:w-[90%] md:w-[48%] bg-[#FBFBEF] rounded-[25px] p-7 h-fit xs:mt-[4%] md:mt-0">
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#431B06] mb-1">강력한 보안을 제공합니다.</h5>
            <h5 class="'xs:text-base sm:text-lg md:text-2xl lg:text-[26px] font-bold text-[#696156] mb-10">신뢰할 수 있는 최신의 보안 시스템을<br> 적용하여 개인정보를 보호합니다</h5>
            <img src="/src/assets/index/lock.png" class="w-[44%] ml-auto">
          </div>
        </div>
      </article>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import BannerTitle from './BannerTitle.vue';
import MessageCard from './MessageCard.vue';

const messageCard = ref([
  { img: 'pen', title: '메시지 용량에<br>제한 받지 않고 전송', subTitle: '메시지 용량 걱정없이 단문 메시지는<br>물론 장문, 사진까지 전송이 가능합니다.' },
  { img: 'message', title: '모든 종류의<br>문자 메시지를 한번에', subTitle: '메시지 용량 걱정없이 단문 메시지는<br>물론 장문, 사진까지 전송이 가능합니다.' },
  { img: 'ad', title: '간편한 광고<br>문자 메시지 설정', subTitle: '광고 설정 버튼 클릭 한번으로<br>080 수신 거부 번호가 적용됩니다.'}
]);
</script>./BannerTitle.vue