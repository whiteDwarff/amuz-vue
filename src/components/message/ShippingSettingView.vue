<template>
  <div class="pt-6">
    <h5 class="sm:text-xl md:text-2xl font-bold text-left mb-4">발송 설정</h5>
    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4 justify-between py-3">
      <button 
       :class="{ 'shipping-setting' : shpmnStngs }"
        class="flex items-center justify-center border-0 bg-[#F2F5F9] text-[#747B84]"
        @click="$emit('update:shpmnStngs', true)">
        <img :src="shpmnStngs ? '/src/assets/message/toggleCheck.svg':'/src/assets/message/check.svg' " alt="체크버튼" style="width: 28px">
        즉시발송
      </button>
      <button 
        :class="{ 'shipping-setting' : !shpmnStngs}"
        class="flex items-center justify-center border-0 bg-[#F2F5F9] text-[#747B84]"
        @click="$emit('update:shpmnStngs', false)">
        <img :src="!shpmnStngs ? '/src/assets/message/toggleCheck.svg':'/src/assets/message/check.svg' " alt="체크버튼" style="width: 28px">
        예약발송
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  shpmnStngs: {
    type: Boolean,
    default: true
  }
});
defineEmits(['update:shpmnStngs']);
</script>

<style scoped>
.shipping-setting {
  background-color: #fff;
  color: #4F44F0;
  border: 2px solid #4F44F0;
}
</style>