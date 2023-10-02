<script setup>
const userState = useState('user', () => {
  return { name: '', organization: '' }
})

// HANDLERS
const handleChangeInput = (data, name) => {
  userState.value[name] = data
}

</script>

<template>
  <div class="pt-10">
    <h1 class="text-3xl text-center">
      Create your profile and organization
    </h1>
    <form class="w-full  items-center flex flex-col gap-5">
      <CustomInput
        title="name"
        placeholder="Enter your name..."
        name="name"
        @change-input="handleChangeInput"
      />
      <CustomInput
        title="organization"
        placeholder="Enter your organization..."
        name="organization"
        @change-input="handleChangeInput"
      />
    </form>
  </div>
</template>
