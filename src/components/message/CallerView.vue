<template>
 <!-- 발신번호 -->
 <div id="caller" class="py-3 border-y ">
  <h5 class="text-22 mb-2">발신번호</h5>
  <select 
    class="full-width color-grey-3 text-18 border-none bg-grey pa-1"
    style="border-radius: 8px;"
    @change="$emit('update:caller', $event.target.value)"
  >
    <option value selected>발신번호선택</option>
    <option value="010-8637-1685">010-8637-1685</option>
  </select>
</div>
</template>

<script setup>
defineProps({
  caller: {
    type: String,
    default: '',
  }
});
defineEmits(['update:caller']);
</script>
