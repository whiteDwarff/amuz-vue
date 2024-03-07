<template>
  <div class="py-6">
    <h5 class="sm:text-xl md:text-2xl font-bold text-left mb-4">메세지 입력</h5>
     <div class="bg-light-grey pt-6 rounded-lg p-4 border-box">
      <!-- input -->
      <div>
        <input 
          type="text"
          class="sm:text-base md:text-lg block w-full" 
          placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)" 
          @input="$emit('update:title', $event.target.value)" 
        >
      </div>
      <!-- 단문 SMS, byte -->
      <div class="my-3 flex flex-wrap justify-between items-center">
        <BaseChip 
          :label="byteSize < 91 ? '단문 SMS' : '장문 SMS'" 
          :color="true" 
          class="text-white xs:mx-auto sm:mx-0 xs:w-full sm:w-3/6 md:w-5/12 lg:w-28"
        />
        <div class="flex items-center xs:w-full xs:justify-between xs:mt-3 sm:m-0 sm:justify-end sm:w-[30%]">
          <div class="xs:text-[14px] md:text-base xs:text-[14px] md:text-base">
            <span class="text-violet font-bold">
              {{ byteSize }}&ensp;
            </span>
            <span class="text-[#8D8D8D] font-bold">/ 90byte</span>
          </div>
          <button class="border-none ml-1 p-0 ml-3" @click="deleteContet">
            <img src="/assets/message/refresh.svg" alt="새로고침 버튼">
          </button>
        </div>
      </div>
      <!-- textarea -->
      <div class="pb-6 under-line">
        <div id="input-area" class="rounded-lg bg-white border-box">
          <textarea 
            ref="input"
            class="sm:text-base md:text-lg border-0"
            rows="10" placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,&#13;&#10;이미지 추가 시 포토 문자로 자동 전환 됩니다."
            style="resize: none; border-radius: 5px; width: calc(100% - 20px); "
            @input="$emit('update:content', $event.target.value)"
          ></textarea>
          <div class="pb-3 px-3 flex flex-wrap justify-end">
            <BaseChip 
              v-for="(chip, index) in chips" :key="index" 
              :label="chip"
              class="xs:w-11/12 xs:my-1 xs:mx-auto lg:mx-1 lg:w-28"
            />
          </div>
        </div>
      </div>
     <!-- 광고성 문자 -->
     <div class="flex justify-between items-center py-3 under-line">
      <h5 class="sm:text-xl md:text-2xl font-bold text-left">광고성 문자(080 수신거부번호 포함)</h5>
      <button class="border-none pointer" @click="$emit('upadate:ad')">
        <img src="/assets/message/toggle-btn.svg" alt="">
      </button>
     </div>
     <!-- 이미지 추가 -->
     <AddImageView />

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getByteSize } from '/src/utils/byte.js';
import BaseChip from '/src/components/common/BaseChip.vue';
import AddImageView from '/src/components/message/AddImageView.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});
const emit = defineEmits(['update:title', 'update:content', 'delete:content', 'upadate:ad']);

const chips = ref(['치환코드', '템플릿', '문자도구']);
const byteSize = ref(getByteSize(props.content));
// 메세지 입력 textarea 초기화
const input = ref(null);

watch(() => props.content, (newValue) => {
  byteSize.value = getByteSize(newValue);
});
const deleteContet = () =>{
  emit('delete:content');
  input.value.value = ''
} 
</script>
