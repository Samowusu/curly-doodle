<script setup>
definePageMeta({
  layout: 'custom'
})
const route = useRoute()

const { $client } = useNuxtApp()
const user = await $client.user.getUser.useQuery({ id: route.params.id })
console.log(user.data.value)
const showEditModal = ref(false)
const newName = ref('')

// HANDLERS
const handleShowEditModal = () => {
  showEditModal.value = true
}

const handleCancelEdit = () => {
  showEditModal.value = false
}

const confirmEdit = () => {
  profile.value.name = newName
  handleCancelEdit()
}
</script>
<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">
      Your Profile
    </h1>

    <!-- User Profile Section -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-2">
        User Profile
      </h2>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <p class="text-gray-800 mb-2">
          Name:
        </p>
        <!-- Display other user details as needed -->
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          @click="handleShowEditModal"
        >
          Edit Profile
        </button>
        <!-- Edit Profile Modal -->
        <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center z-10">
          <div class="bg-white p-4 rounded-md shadow-md w-1/3">
            <h2 class="text-xl font-semibold mb-2">
              Edit Profile
            </h2>
            <input v-model="newName" class="border border-gray-300 p-2 rounded-md w-full mb-2" placeholder="Enter new name">

            <div class="flex justify-end">
              <button class="text-gray-500 hover:text-gray-700 mr-2" @click="handleCancelEdit">
                Cancel
              </button>
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" @click="confirmEdit">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Organization Switcher -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-2">
        Switch Organization
      </h2>
      <div class="bg-white p-4 rounded-lg shadow-md">
        <select
          class="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>
            Select an Organization
          </option>
          <option
            v-for="organization in organizations"
            :key="organization.id"
            :value="organization.id"
          >
            {{ organization.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex space-x-4">
      <button
        class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        @click="signOut"
      >
        Sign Out
      </button>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        @click="deleteAccount"
      >
        Delete Account
      </button>
    </div>
  </div>
</template>
