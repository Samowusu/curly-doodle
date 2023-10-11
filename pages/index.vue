<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/home'
  }
})
const handleNavigateToSignUp = () => {
  navigateTo('/sign-up')
}

const handleNavigateToLogin = () => {
  navigateTo('/login')
}
</script>
<template>
  <div>
    <header class=" flex justify-end gap-5 p-5">
      <button class="bg-blue-500 rounded-md p-2 text-white" @click="handleNavigateToSignUp">
        Sign Up
      </button>
      <button class="bg-red-500 rounded-md p-2 text-white ml-4" @click="handleNavigateToLogin">
        Log In
      </button>
    </header>
    <div class=" mx-auto flex justify-center">
      <h1 class="text-3xl mt-24">
        Welcome To The Landing Page
      </h1>
    </div>
  </div>
</template>
