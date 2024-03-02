<template>
  <div class="pt-3 border-y">
    <h5 class="text-22">발송 설정</h5>

    <div class="flex justify-between py-3">
      <button 
       :class="{ 'shipping-setting' : shpmnStngs }"
        class="text-22 flex align-items-center justify-center border-none py-2 color-grey-3 pointer"
        style="width: 48%; border-radius: 8px;" 
        @click="$emit('update:shpmnStngs', true)">
        <img :src="shpmnStngs ? '/icon/toggleCheck.png' : '/icon/check.png'" alt="체크버튼" style="width: 28px">
        즉시발송
      </button>
      <button 
        :class="{ 'shipping-setting' : !shpmnStngs}"
        class="text-22 flex align-items-center justify-center border-none py-2 color-grey-3 pointer"
        style="width: 48%; border-radius: 8px;" 
        @click="$emit('update:shpmnStngs', false)">
        <img :src="!shpmnStngs ? '/icon/toggleCheck.png':'/icon/check.png' " alt="체크버튼" style="width: 28px">
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