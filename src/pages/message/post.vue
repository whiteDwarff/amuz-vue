<template>
  <section>
    <form class="card bg-white mx-auto rounded-2xl" @submit.prevent="">
      <article class="card-header">
        <div class="text-center mb-3">
          <h2 class="xs:text-3xl md:text-4xl font-bold mb-10">메시지 전송</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-3">
          <button 
            v-for="button of buttons" :key="button.key"
            :class="{'way-btn' : message.way == button.value}"
            class="bg-light-grey block text-[#555555]"
            @click="changeMessageWay(button)"
          >{{ button.key }}</button>
        </div>
        <div class="text-left py-10 under-line">
          <span class="block xs:text-[12px] sm:text-[14px] md:text-base text-grey-7 mb-1">• 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.</span>
          <span class="xs:text-[12px] sm:text-[14px] md:text-base text-grey-7">• 90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이 가능합니다.</span>
        </div>
      </article>
      <article class="grid grid-cols-12">
        <div id="content-box" class="xs:col-span-12 md:col-span-8">
          <!-- 수신번호 -->
          <RecipientView 
            :list="message.tel"
            @update:tel="updateTel"
            @delete:tel="message.tel.length = 0"
          />
          <!-- 발신번호 -->
          <CallerView
            v-model:caller="message.caller"
            @update:caller="updateCaller"
          />
          <!-- 메시세지 입력 -->
          <ContentView 
            ref="content"
            v-model:title="message.title"
            v-model:content="message.content"
            @delete:content="deleteContent"
            @upadate:ad="message.ad = !message.ad"
          />
        </div>
        <!-- md:h-[1800px] lg:h-[1670px]" -->
        <div id="sticky-box" class="xs:hidden md:block md:col-span-4 md:h-[1805px] lg:h-[1670px]">
          <img id="sticky-img" class="mt-3 flex flex-end" src="/assets/message/phone.png" alt="phone">
        </div>
      </article>

      <article class="under-line pb-6" style="border-top: 1px solid #c8c8c8;">
        <div class="xs:w-full md:w-8/12">
          <ShippingSettingView 
            v-model:shpmnStngs="message.shpmnStngs"
            @update:shpmn-stngs="message.shpmnStngs = $event"
          />
        </div>
      </article>

      <button id="submit-btn" class="w-full bg-violet text-white xs:text-lg md:text-[22px] mt-6" type="submit">발송하기</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import RecipientView from '/src/components/message/RecipientView.vue';
import ContentView from '/src/components/message/ContentView.vue';
import CallerView from '/src/components/message/CallerView.vue';
import ShippingSettingView from '/src/components/message/ShippingSettingView.vue';

const buttons = ref([
  {key: '문자 메시지', value: 'message'},
  {key: '알림톡 (카카오)', value: 'notice'},
  {key: '알림톡 (카카오)', value: 'friend'}
]);
const message = ref({
  way: 'message',
  tel: [],
  caller: '',
  title: '',
  content: '',
  ad: false,
  image: [],
  shpmnStngs: true,
});

const changeMessageWay = ({value}) => {
  message.value.way = value;
  return message.value?.way == value ? 'current-btn' : ''
}
const updateTel = value => message.value.tel.push(value);
const deleteContent = () => message.value.content = '';
const updateCaller = value => message.value.caller = value;
</script>

<style scoped>
.way-btn {
  color: #fff;
  background-color: #5146F0;
}
#sticky-img {
  position: sticky;
  top: 83px;
  margin-left: auto;
  margin-top: 1.5rem;
}
</style>
