<template>
  <div class="card">
    <div class="card-header">
      <div class="">
        <h5 class="text-30">{{ card.price.toLocaleString('ko-KR') }} 원</h5>
        <span class="text-18 color-grey-3 block mt-2 mb-1">
          총 {{ card.send.toLocaleString('ko-KR') }}건 발송가능 합니다.
        </span>
        <span class="text-18 color-grey-3 block">
          1건당 {{ card.per }}원에 결제가능합니다.
        </span>
      </div>
    </div> <!-- card-header-->
    <div class="flex align-items-center justify-between my-2">
      <h6 class="text-24">{{ (card.basic + card.addition).toLocaleString('ko-KR') }} 크레딧</h6>
      <div 
        class="text-16 bg-sky-blue color-blue px-1" 
        style="border-radius: 20px;"
      >{{ card.basic / card.addition }}%</div>
    </div>
    <div class="credit-info pa-1" style="border-radius: 10px;">
      <div class="flex justify-between mb-1">
        <span class="text-16 color-grey-2">기본 크레딧</span>
        <span class="text-16">{{ card.basic.toLocaleString('ko-KR') }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-16 color-grey-2">추가 크레딧</span>
        <span class="text-16 flex">
         + {{ card.addition.toLocaleString('ko-KR') }}
        </span>
      </div>
    </div><!-- card-info -->
    <button class="bg-blue color-white text-20 border-none py-1 mt-3 pointer" style="width: 283px; border-radius: 5px;">구매하기</button>
  </div>
</template>

<script setup>
defineProps({
  card: Object,
})
</script>

<style  scoped>
.card {
  width: 283px;
  padding: 32px;
  box-shadow: 0px 10px 10px #00000008;
  background-color: #fff;
  border-radius: 10px;
}
.credit-info {
  background-color:  #F4F5F6 ;
}

</style>