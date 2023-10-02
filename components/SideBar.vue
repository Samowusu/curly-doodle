
<script setup>
defineProps({
  user: {
    type: String, default: null
  }
})
</script>

<template>
  <nav class="sticky top-0 px-2 py-4 h-screen w-40 border border-red-500">
    <ul class="flex flex-col items-start gap-2 whitespace-nowrap  h-full">
      <li>
        <NuxtLink href="/home">
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="ic:outline-home" size="32px" />
              <span class="hidden text-lg md:inline">Home</span>
            </span>
          </IconHoverEffect>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="/members">
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="fa6-solid:people-line" size="32px" />
              <span class="hidden text-lg md:inline">Members</span>
            </span>
          </IconHoverEffect>
        </NuxtLink>
      </li>

      <li>
        <NuxtLink href="/profile">
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="healthicons:ui-user-profile-outline" size="32px" class="fill-green-700" />
              <span class="hidden text-lg text-green-700 md:inline">
                Profile
              </span>
            </span>
          </IconHoverEffect>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
