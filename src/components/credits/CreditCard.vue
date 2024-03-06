<template>
  <div class="card bg-white shadow-md rounded-lg xs:w-[90%] sm:w-full mx-auto">
    <div class="card-header">
      <div>
        <h5 class="xs:text-2xl sm:text-3xl font-bold text-left">{{ card.price.toLocaleString('ko-KR') }} 원</h5>
       
        <div class="pt-4 mb-6">
          <span class="sm:text-[14px] md:text-base text-left text-grey-7 block font-extralight">
            총 {{ card.send.toLocaleString('ko-KR') }}건 발송가능 합니다.
          </span>
          <span class="sm:text-[14px] md:text-base text-left text-grey-7 block font-extralight">
            1건당 {{ card.per }}원에 결제가능합니다.
          </span>
        </div>
      </div>
    </div> <!-- card-header-->
    <div class="flex items-center justify-between">
      <h6 class="sm:text-lg md:text-xl font-bold text-left">{{ (card.basic + card.addition).toLocaleString('ko-KR') }} 크레딧</h6>
      <div 
        class="sm:text-[14] md:text-base bg-sky-blue text-violet font-bold py-1 px-2" 
        style="border-radius: 20px;"
      >{{ card.basic / card.addition }}%</div>
    </div>
    <div class="bg-[#F4F5F6] p-3 rounded-lg my-6">
      <div class="flex justify-between mb-2">
        <span class="sm:text-[14px] md:text-base text-grey-7 font-extralight">기본 크레딧</span>
        <span class="sm:text-[14px] md:text-base">{{ card.basic.toLocaleString('ko-KR') }}</span>
      </div>
      <div class="flex justify-between">
        <span class="sm:text-[14px] md:text-base text-grey-7 font-extralight">추가 크레딧</span>
        <span class="sm:text-[14px] md:text-base">
         + {{ card.addition.toLocaleString('ko-KR') }}
        </span>
      </div>
    </div><!-- card-info -->

    <div>
      <button class="bg-violet text-white w-full">구매하기</button>
    </div>

  </div>
</template>

<script setup>
defineProps({
  card: Object,
});
</script>
