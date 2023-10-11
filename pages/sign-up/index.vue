<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/home'
  }
})

const { signIn } = useAuth()
// const userState = useState('user', () => {
//   return { email: '', password: '' }
// })

// HANDLERS
// const handleChangeInput = (data, name) => {
//   userState.value[name] = data
// }

const handleSignUp = async () => {
  await signIn('github', { callbackUrl: '/onboarding' })
}
</script>

<template>
  <div class=" flex justify-center">
    <div class="flex flex-col w-1/2 items-center mt-32 gap-7">
      <!-- <h1 class="text-cyan-500">
        Sign up with email
      </h1> -->
      <!-- <form class="w-full  items-center flex flex-col gap-5">
        <CustomInput
          title="email"
          placeholder="Enter email..."
          name="email"
          @change-input="handleChangeInput"
        />
      </form>
      <button
        class=" w-1/2 p-3 mt-5 rounded text-white font-bold bg-blue-500"
        @click="() => navigateTo('/onboarding')"
      >
        Get magic link
      </button> -->
      <button
        class=" w-1/2 p-3 mt-5 rounded text-white font-bold bg-slate-900"
        @click="handleSignUp"
      >
        Sign up with Github
      </button>
    </div>
  </div>
</template>
