<script setup>
// HANDLERS

import { ref } from 'vue'

definePageMeta({
  layout: 'custom'
})

const inviteLink = ref('') // Store the generated invite link
const members = ref([{ name: 'Goe' }, { name: 'frank' }, { name: 'luffy' }]) // Store the list of organization members

const generateInviteLink = () => {
  // Generate and set the invite link logic here
  // Update inviteLink.value with the generated link
}

const deactivateInviteLink = () => {
  // Deactivate the invite link logic here
}

const kickMember = (member) => {
  // Kick a member from the organization logic here
  // Remove the member from members.value
}
</script>

<template>
  <div class="flex-1 p-8">
    <!-- Invite Link Section -->
    <div class="mb-4">
      <h2 class="text-2xl font-semibold mb-2">
        Invite New Users
      </h2>
      <p class="text-gray-600">
        Generate an invite link that expires in 24 hours.
      </p>
      <div class="flex mt-2">
        <input
          v-model="inviteLink"
          class="flex-1 p-2 border rounded-l"
          placeholder="Generated Invite Link"
          readonly
        >
        <button
          class="bg-blue-500 text-white p-2 rounded-r"
          @click="generateInviteLink"
        >
          Generate
        </button>
      </div>
      <button
        class="mt-2 text-red-500 underline"
        @click="deactivateInviteLink"
      >
        Deactivate Invite Link
      </button>
    </div>

    <!-- Members List -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">
        Members
      </h2>
      <ul class="space-y-4">
        <!-- Member Item -->
        <li v-for="member in members" :key="member.id" class="flex items-center">
          <div class="flex-1">
            {{ member.name }}
          </div>
          <button
            class="bg-red-500 text-white p-2 rounded"
            @click="kickMember(member)"
          >
            Kick
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
