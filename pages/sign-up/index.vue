<script setup>
const userState = useState('user', () => {
  return { email: '', password: '' }
})

// HANDLERS
const handleChangeInput = (data, name) => {
  userState.value[name] = data
}

</script>

<template>
  <div class=" flex justify-center">
    <div class="flex flex-col w-1/2 items-center mt-32 gap-7">
      <h1 class="text-cyan-500">
        Sign up with email and password
      </h1>
      <form class="w-full  items-center flex flex-col gap-5">
        <CustomInput
          title="email"
          placeholder="Enter email..."
          name="email"
          @change-input="handleChangeInput"
        />
        <CustomInput
          title="password"
          placeholder="Enter password..."
          name="password"
          @change-input="handleChangeInput"
        />
      </form>
      <button
        class=" w-1/2 p-3 mt-5 rounded text-white font-bold bg-slate-900"
      >
        Sign up with Github
      </button>
    </div>
  </div>
</template>
