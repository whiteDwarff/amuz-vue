<template>
  <div class="under-line py-6">
    <h5 class="sm:text-xl md:text-2xl font-bold text-left mb-4">수신번호</h5>
    <div class="flex flex-wrap justify-between my-3">
      <input 
        v-model="tel"
        type="text"
        class="sm:text-base md:text-lg bg-[#F4F5F6] xs:w-full sm:w-8/12 md:w-9/12 border-0" 
        placeholder="휴대폰번호 (숫자만 입력)"
        @input="removeString($event.target.value)"
      >
      <button class="sm:text-base md:text-lg bg-violet xs:mt-3 sm:mt-0 xs:w-full sm:w-3/12 md:w-2/12 text-white " @click="addTel">+ 추가</button>
    </div>
    <div class="text-left rounded-lg border-box">
      <textarea 
        readonly
        :value="list"
        class="sm:text-base md:text-lg w-full border-white" rows="10"
        placeholder="번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요. &#13;&#10;최대 1만 건까지 붙여넣기 가능합니다."
        style="resize: none;"
      ></textarea>
      <div class="flex justify-between p-3">
        <span class="xs:text-[14px] sm:text-base md:text-lg">총 <span class="xs:text-[14px] sm:text-base md:text-lg text-violet">{{ list.length }}</span>명</span>
        <span id="delete-btn" class="xs:text-[14px] sm:text-base  md:text-lg cursor-pointer text-[#6A6A6A] underline" @click="deleteTel">모두 삭제</span>
      </div>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
      <button
        class="flex items-center justify-center xs:text-[14px] text-grey-7 sm:text-base md:text-lg border-box"
        v-for="button of buttons" :key="button.key"
      >
        <img :src='`/src/assets/${button.icon}.svg`' alt="아이콘" style="width: 30px">
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
]);

const removeString = (value) => tel.value = value.replace(/[^0-9]/g, "");
const addTel = () => {
  emit('update:tel', tel.value);
  tel.value = '';
}
const deleteTel = () => emit('delete:tel');
</script>