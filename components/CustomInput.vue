<!-- eslint-disable vue/require-default-prop -->
<script setup>

defineProps({
  title: String,
  placeholder: String,
  name: String,
  width: String
})
// STATE
const state = ref()
// EMITS
const emits = defineEmits(['changeInput'])
</script>

<template>
  <div :class="['flex flex-col w-[48%] mt-2', width]">
    <label class="text-cyan-500 mb-1 text-sm capitalize">{{ title }}</label>
    <input
      v-model="state"
      type="text"
      class="p-2 border w-100 rounded"
      :placeholder="placeholder"
      :name="name"
      @input="emits('changeInput', state)"
    >
  </div>
</template>
