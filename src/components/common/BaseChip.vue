<template>
  <button 
    class="chip xs:text-[14px] md:text-base rounded-full"
    :class="!!color ? 'bg-violet' : 'text-[#646464] bg-[#F5F5F5]'"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: Boolean,
    default: false,
  }
});
</script>
