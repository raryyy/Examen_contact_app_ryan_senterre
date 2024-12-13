<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  contact: {
    type: Object,
  },
});

const router = useRouter();

const goToEditContact = (contactId) => {
  router.push({ name: 'AddContact', params: { id: contactId } });
};
</script>

<template>
  <li class="md:flex items-center justify-between py-4">
    <div class="pb-4 md:pb-0">
      <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
      <p class="text-gray-500">{{ contact.email }}</p>
      <p class="text-gray-500">{{ contact.phone }}</p>
    </div>
    <div class="flex gap-2">
      <button
        @click="goToEditContact(contact.id)"
        class="bg-yellow-400 text-white px-4 py-2 rounded shadow hover:bg-yellow-500"
      >
        Edit
      </button>
      <button
        class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </li>
</template>
