<template>
  <div>
    <h5 class="text-22">수신번호</h5>
    <div class="input-group flex mt-2">
      <input 
        v-model="tel"
        type="text"
        class="pa-1 border-none bg-grey text-18" 
        placeholder="휴대폰번호 (숫자만 입력)"
        style="width: 83%; border-radius: 8px; margin-right: 2%;"
        @input="removeString($event.target.value)"
      >
      <button class="text-20 pa-1 current-btn pointer" style="border-radius: 8px; width: 15%;" @click="addTel">+ 추가</button>
    </div>
    <div id="input-area" class="my-2 border-box">
      <textarea 
        readonly
        :value="list"
        class="full-width border-none text-18" rows="10"
        placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요. &#13;&#10;최대 1만 건까지 붙여넣기 가능합니다."
        style="resize: none;"
      ></textarea>
      <div class="flex justify-between">
        <span class="text-18">총 <span class="color-violet text-18">{{ list.length }}</span>명</span>
        <span id="delete-btn" class="text-18 pointer" @click="deleteTel">모두 삭제</span>
      </div>
    </div>
    <div id="btn-group" class="flex justify-around">
      <button
        v-for="button of buttons" :key="button.key"
        class="text-16 color-grey-3 py-1 pointer bg-white flex align-items-center justify-center border-box"
        style="width: 32%; border-radius: 8px;"
      >
        <img :src='`/icon/${button.icon}.png`' alt="아이콘" style="width: 30px">
        {{ button.key }}
      </button>
    
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update:tel', 'delete:tel'])
defineProps({
  list: {
    type: Array,
  }
});

const tel = ref('');
const buttons = ref([
  {icon: 'tel', key: '주소록 불러오기'},
  {icon: 'file', key: '파일 불러오기'},
  {icon: 'time', key: '최근 전송 내역'},
])
const removeString = (value) => tel.value = value.replace(/[^0-9]/g, "");

const addTel = () => {
  emit('update:tel', tel.value);
  tel.value = '';
}
const deleteTel = () => emit('delete:tel');


</script>

<style  scoped>
#input-area {
  padding: 1rem;
  border-radius: 10px;
}
#delete-btn {
  color: #6A6A6A;
  text-decoration: underline;
}
</style>