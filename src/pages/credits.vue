<template>
  <section>
    <div class="text-center">
      <h2 class="text-38">크레딧 구매</h2>
      <span class="text-19 color-grey-3 block mt-2 mb-3">메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요</span>
    </div>

    <article class="flex mx-auto card-wrap">
      <CreditCard
        v-for="card of cards" :key="card.price" 
        :card="card"
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
])
</script>

<style scoped>
section {
  background-color: #F2F4F8;
  padding: 10rem 0 20rem 0;
}
.card-wrap {
  width:70%;
}
.card {
  margin-right: 24px;
}
.card:last-child {
  margin-right: 0;
}

</style>