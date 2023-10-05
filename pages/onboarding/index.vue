<script setup>
const userState = useOnboardedUser()
const { $client } = useNuxtApp()
console.log(userState.value)
// HANDLERS
const handleCompleteOnboarding = async () => {
  try {
    console.log(userState.value)

    const createdUser = await $client.user.createUser.mutate({ name: userState.value.name, organization: userState.value.organization })
    console.log({ createdUser })
    const { id } = createdUser
    navigateTo(`/profile/${id}`)
  } catch (error) {
    console.error(error)
    throw error
  }
}

const handleChangeInput = (data, name) => {
  userState.value[name] = data
}

</script>

<template>
  <div class="pt-10 border">
    <h1 class="text-3xl text-center">
      Complete Your Onboarding
    </h1>

    <form class="w-full  items-center flex flex-col gap-5">
      <CustomInput
        title="Create your user profile"
        placeholder="Enter your name..."
        name="name"
        @change-input="handleChangeInput"
      />
      <CustomInput
        title="organization name"
        placeholder="Enter your organization..."
        name="organization"
        @change-input="handleChangeInput"
      />
    </form>
    <div class="flex justify-center">
      <button
        class=" w-1/2 p-3 mt-5 rounded text-white font-bold bg-blue-500"
        @click="handleCompleteOnboarding"
      >
        Completed
      </button>
    </div>
  </div>
</template>
