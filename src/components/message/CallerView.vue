<template>
 <!-- 발신번호 -->
 <div id="caller" class="under-line py-6">
  <h5 class="sm:text-xl md:text-2xl font-bold text-left mb-4">발신번호</h5>
  <select 
    class="w-full bg-light-grey text-grey-7 border-0 cursor-pointer"
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
