<script setup>
import { useRouter } from 'vue-router';
import { useContactsStore } from '@/stores/contacts';

const props = defineProps({
  contact: {
    type: Object,
  },
});

const router = useRouter();
const contactsStore = useContactsStore();

const goToEditContact = (contactId) => {
  router.push({ name: 'AddContact', params: { id: contactId } });
};
const deleteContact = (contactId) => {
  contactsStore.deleteContact(contactId);
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
        @click="deleteContact(contact.id)"
        class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </li>
</template>
