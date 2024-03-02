<template>
  <div class="py-3">
    <h5 class="text-22 mb-2">메세지 입력</h5>
     <div class="bg-light-grey" style="width: 90%; padding: 5%;">
      <!-- input -->
      <div class="input-group">
        <input 
          type="text"
          class="pa-1 border-none text-18 border-box" 
          placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)" 
          style="border-radius: 5px; width: calc(100% - 20px);" 
          @input="$emit('update:title', $event.target.value)" 
        >
      </div>
      <!-- 단문 SMS, byte -->
      <div class="my-3 flex justify-between align-items-center">
        <BaseChip label="단문 SMS" :color="true"/>
        <div class="flex align-items-center">
          <span class="text-16 color-violet">
            {{ byteSize }}
            <span class="text-16 color-grey-4 "> / 90byte</span>
          </span>
          <button class="border-none ml-1 pointer" @click="deleteContet">
            <img src="/icon/refresh.png" alt="">
          </button>
        </div>
      </div>
      <!-- textarea -->
      <div id="input-area" class="my-3 bg-white border-box">
        <textarea 
          class="pa-1 full-width border-none text-18"
          rows="10" placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,&#13;&#10;이미지 추가 시 포토 문자로 자동 전환 됩니다."
          style="resize: none; border-radius: 5px; width: calc(100% - 20px); "
          @input="$emit('update:content', $event.target.value)"
        ></textarea>
        <div class="pa-2 flex justify-end">
          <BaseChip v-for="(chip, index) in chips" :key="index" :label="chip"/>
        </div>
     </div>
     <!-- 광고성 문자 -->
     <div class="border-y py-3 flex justify-between">
      <h5 class="text-22">광고성 문자(080 수신거부번호 포함)</h5>
      <button class="border-none pointer" @click="$emit('upadate:ad')">
        <img src="/icon/toggle.png" alt="">
      </button>
     </div>

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

watch(() => props.content, (newValue) => {
  byteSize.value = getByteSize(newValue);
});
const deleteContet = () => emit('delete:content');



</script>

<style scoped>
.wrap {
  /* width: 90%; */
}
.border-box {
  border: 1px solid #CECECE;
}
#input-area .chip:nth-child(2) {
  margin: 0 1rem;
}
</style>