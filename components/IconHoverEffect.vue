<script setup>
const props = defineProps({
  active: Boolean

})

const iconClasses = computed(() => {
  return props.active ? 'bg-red-200' : 'outline-gray-400 hover:bg-gray-200 group-hover-bg-gray-200 group-focus-visible:bg-gray-200 focus-visible:bg-gray-200'
})
</script>

<template>
  <div
    :class="[iconClasses, 'rounded-full', 'p-2', 'transition-colors', 'duration-200']"
  >
    <slot />
  </div>
</template>
