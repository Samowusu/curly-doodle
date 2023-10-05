<script setup>
const userState = useOnboardedUser()
const organizationState = useOrganizations()
const { createUser, createOrganization } = useUtilities()

// HANDLERS
const handleCompleteOnboarding = async () => {
  userState.value.organizations.push(organizationState.value.id)
  organizationState.value.createdBy = userState.value.id
  organizationState.value.members = [userState.value.id]

  const createdUser = await useOnboardUser(userState.value)
  await useCreateOrganization(organizationState.value)
  const { id } = createdUser
  navigateTo(`/profile/${id}`)
}
const handleCreateUser = (data) => {
  userState.value = createUser(data)
}

const handleCreateOrganization = (data) => {
  organizationState.value = createOrganization(data, null, [])
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
        @change-input="handleCreateUser"
      />
      <CustomInput
        title="organization name"
        placeholder="Enter your organization..."
        name="organization"
        @change-input="handleCreateOrganization"
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
