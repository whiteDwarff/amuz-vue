<template>
  <section class="bg-back">
    <div class="text-center">
      <h2 class="xs:text-3xl md:text-4xl font-bold">크레딧 구매</h2>
      <span class="xs:text-base md:text-lg text-grey-7 block mt-5 mb-10">메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요</span>
    </div>
    <article class="grid grid-cols-12 gap-5">
      <CreditCard
        v-for="card of cards" :key="card.price" 
        :card="card"
        class="xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
      />
    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue';

import CreditCard from '/src/components/credits/CreditCard.vue';
const cards = ref([
  {
    price : 30000,
    send : 66667,
    per : 15,
    credit : 330000,
    basic: 300000,
    addition: 30000,
  },
  {
    price : 10000,
    send : 76687,
    per : 15,
    credit : 110000,
    basic: 100000,
    addition: 10000,
  },
  {
    price : 30000,
    send : 66667,
    per : 15,
    credit : 330000,
    basic: 300000,
    addition: 30000,
  },
  {
    price : 10000,
    send : 76687,
    per : 15,
    credit : 110000,
    basic: 100000,
    addition: 10000,
  },
]);
</script>
