<script setup>
const email = useState('user', () => '')
const supabase = useSupabaseClient()

// HANDLERS
async function signInWithEmail () {
  const { data } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/home'
    }
  })

  console.log(data)
}

const handleChangeInput = (data) => {
  email.value = data
}

</script>

<template>
  <div class=" flex justify-center">
    <div class="flex flex-col w-1/2 items-center mt-32 gap-7">
      <h1 class="text-cyan-500">
        Log in with email and password
      </h1>
      <form class="w-full  items-center flex flex-col gap-5">
        <CustomInput
          title="email"
          placeholder="Enter email..."
          name="email"
          @change-input="handleChangeInput"
        />
      </form>
      <button
        class=" w-1/2 p-3 mt-5 rounded text-white font-bold bg-blue-500"
        @click="signInWithEmail"
      >
        Log in with email
      </button>
      <button
        class=" w-1/2 p-3 mt-5 rounded text-white font-bold bg-slate-900"
      >
        Login with Github
      </button>
    </div>
  </div>
</template>
