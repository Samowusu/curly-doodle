<script setup>
const props = defineProps({
  red: Boolean

})

const iconClasses = computed(() => {
  return props.red ? 'outline-red-400 hover:bg-red-200 group-hover-bg-red-200 group-focus-visible:bg-red-200 focus-visible:bg-red-200' : 'outline-gray-400 hover:bg-gray-200 group-hover-bg-gray-200 group-focus-visible:bg-gray-200 focus-visible:bg-gray-200'
})
</script>

<template>
  <div
    :class="[iconClasses, 'rounded-full', 'p-2', 'transition-colors', 'duration-200']"
  >
    <slot />
  </div>
</template>
