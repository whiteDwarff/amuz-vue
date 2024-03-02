<template>
  <button 
    class="text-16 chip inline-block border-none pointer"
    :class="!!color ? 'color-white bg-violet' : 'color-grey-3 bg-grey-1'"
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

<style scoped>
.chip {
  border-radius: 20px;
  padding: 1rem 2rem;
  width: 107px;
}
</style>