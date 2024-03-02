<template>
  <section>
    <form class="card bg-white mx-auto" @submit.prevent="">
      <article class="card-header">
        <div class="text-center mb-3">
          <h2 class="text-38">메시지 전송</h2>
        </div>
        <div class="button-wrap">
          <button 
            v-for="button of buttons" :key="button.key"
            :class="{'current-btn' : message.way == button.value}"
            class="border-none bg-grey-1 py-2 color-grey-1 text-24 pointer"
            style="width: 333px; border-radius: 10px;"
            @click="changeMessageWay(button)"
          >
            {{ button.key }}
          </button>
        </div>
        <div id="caption" class="text-left py-3 border-bottom ">
          <span class="block mb-1 color-grey text-16">• 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.</span>
          <span class="color-grey text-16">• 90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이 가능합니다.</span>
        </div>
      </article>

      <article class="flex">
        <div style="width: 65%;">
          <!-- 수신번호 -->
          <RecipientView 
            class="py-3"
            :list="message.tel"
            @update:tel="updateTel"
            @delete:tel="message.tel.length = 0"
          />
          <CallerView
            v-model:caller="message.caller"
            @update:caller="updateCaller"
          />
          <!-- 메시세지 입력 -->
          <ContentView 
            v-model:title="message.title"
            v-model:content="message.content"
            @delete:content="deleteContent"
            @upadate:ad="message.ad = !message.ad"
          />
          <ShippingSettingView 
            v-model:shpmnStngs="message.shpmnStngs"
            @update:shpmn-stngs="message.shpmnStngs = $event"
          />
        </div>

        <div id="sticky-box" style="width: 30%; margin-left: 5%;">
          <img id="sticky-img" class="mt-3" src="/icon/phone.png" alt="phone">
        </div>
      </article>
      <button id="submit-btn" class="full-width py-2 text-22 pointer" type="submit">발송하기</button>
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
section {
  padding: 5.3rem 0;
  background-color: #F2F4F8;
}
.card {
  width: 1031px;
  padding: 53px 96px;
  border-radius: 24px;
}

.card-header .button-wrap button:nth-child(2) {
  margin: 0 16px;
}

.border-bottom {
  border-bottom: 2px  solid #dcdcdc;
}
#submit-btn {
  background-color: #4F44F0;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 3rem;
}

#sticky-box {
  height: 1842px;
}
#sticky-img {
  position: sticky;
  top: 10px;
}
</style>